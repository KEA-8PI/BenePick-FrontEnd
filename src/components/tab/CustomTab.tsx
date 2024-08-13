import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import colors from 'theme/variableColors';
import CustomTabPanel from './CustomTabPanel';
import { TabsProps } from './CustomTab.types';

// 탭 속성 (0,1,2,3)
const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const CustomTab: React.FC<TabsProps> = ({
  tabs,
  data,
  keyword,
  category,
  showTabTitle,
  showFilter,
  callGetAPI,
  setState,
  dtoName,
  onFilterChange,
}) => {
  const [value, setValue] = React.useState(0);
  // 각 탭의 sortBy 상태를 탭마다 독립적으로 관리
  const [selectedFilters, setSelectedFilters] = useState<string[]>(['END', 'END', 'END']);
  const [tabData, setTabData] = useState([]);

  const handleChange = (event: React.SyntheticEvent, newIndex: number) => {
    setValue(newIndex);
    callGetAPI &&
      callGetAPI[newIndex](selectedFilters[newIndex])
        .then((res) => {
          const response = dtoName ? res.data.result[dtoName[newIndex]] : '';
          console.log('handleChange API 호출 결과:', response);
          setTabData(response);
          setState[newIndex](response);
        })
        .catch((error) => {
          console.log(error);
        });
  };

  const handleFilterChange = (filter: string) => {
    // 현재 활성화된 탭의 sortBy 상태 업데이트
    setSelectedFilters((prevFilters) => {
      const newFilters = [...prevFilters];
      newFilters[value] = filter;
      return newFilters;
    });

    // 현재 선택된 탭에 대해 필터 적용된 데이터를 불러오기
    callGetAPI[value](filter)
      .then((res) => {
        const response = dtoName ? res.data.result[dtoName[value]] : '';
        setState[value](response);
        console.log('handleFilterChange API 호출 결과:', response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log('CustomTab filter:', selectedFilters[value]);
  onFilterChange(selectedFilters[value]);
  console.log('CustomTab key:  ', keyword);
  console.log('CustomTab tabs: ', tabs);
  console.log('CustomTab data: ', data);

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        {/* 탭 컴포넌트 */}
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="custom tabs"
          textColor="inherit"
          sx={{ '& .MuiTab-root': { fontSize: '15px' } }}
          TabIndicatorProps={{
            style: {
              backgroundColor: colors.primary,
            },
          }}
        >
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab.label} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>

      {/* 탭 내용 컴포넌트 */}
      {tabs.map((tab, index) => (
        <CustomTabPanel
          key={index}
          value={value}
          index={index}
          showTabTitle={showTabTitle} // showTabTitle CustomTabPanel에 전달
          title={tab.tabTitle} // tabTitle을 CustomTabPanel에 전달
          showFilter={showFilter} // showFilter를 CustomTabPanel에 전달
          onFilterChange={handleFilterChange} // 필터 변경 시 호출될 함수 전달
          selectedFilter={selectedFilters[index]} // 각 탭의 현재 필터 상태 전달
        >
          {tab.content}
        </CustomTabPanel>
      ))}
    </Box>
  );
};

export default CustomTab;
