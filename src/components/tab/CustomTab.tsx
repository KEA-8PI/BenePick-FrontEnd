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
  showTabTitle,
  showFilter,
  callGetAPI,
  setState,
  dtoName,
  onFilterChange,
  setDrawIdList,
}) => {
  const [value, setValue] = React.useState(0);
  const [selectedFilters, setSelectedFilters] = useState<string[]>(['END', 'END', 'POPULAR']);
  const [tabData, setTabData] = useState([]);

  const handleChange = (event: React.SyntheticEvent, newIndex: number) => {
    setValue(newIndex);

    // 조건문 간소화 및 API 호출
    if (callGetAPI?.[newIndex] && setState?.[newIndex] && dtoName?.[newIndex]) {
      callGetAPI[newIndex](selectedFilters[newIndex])
        .then((res) => {
          const response = res.data.result[dtoName[newIndex]];
          console.log('handleChange API 호출 결과:', response);
          setTabData(response);
          setState[newIndex](response);

          if (dtoName[newIndex] === 'drawsResponseByWinnerGoodsIdDTOS') {
            setDrawIdList(response.map((item: any) => item.drawId));
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleFilterChange = (filter: string) => {
    setSelectedFilters((prevFilters) => {
      const newFilters = [...prevFilters];
      newFilters[value] = filter;
      return newFilters;
    });

    // 조건문 간소화 및 API 호출
    if (callGetAPI?.[value] && setState?.[value] && dtoName?.[value]) {
      callGetAPI[value](filter)
        .then((res) => {
          const response = res.data.result[dtoName[value]];
          console.log('handleFilterChange API 호출 결과:', response);
          setState[value](response);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  onFilterChange && onFilterChange(selectedFilters[value]);

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
