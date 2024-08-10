import React from 'react';
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

const CustomTab: React.FC<TabsProps> = ({ tabs, showTabTitle, showFilter, callGetAPI, setState, dtoName }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newIndex: number) => {
    // console.log('탭 변경:', tabs[newIndex].label);
    setValue(newIndex);
    callGetAPI[newIndex]()
      .then((res) => {
        const response = dtoName ? res.data.result[dtoName[newIndex]] : '';
        console.log('API 호출 결과:', res.data.result[dtoName[newIndex]]);
        setState[newIndex](res.data.result[dtoName[newIndex]]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        >
          {tab.content}
        </CustomTabPanel>
      ))}
    </Box>
  );
};

export default CustomTab;
