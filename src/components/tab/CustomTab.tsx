import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import colors from 'theme/variableColors';
import CustomTabPanel from './CustomTabPanel';
import { CustomTabsProps } from './CustomTab.types';

// 탭 속성 (0,1,2,3)
const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const CustomTab: React.FC<CustomTabsProps> = ({ tabs }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newIndex: number) => {
    console.log('탭 변경', newIndex);
    setValue(newIndex);
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
        <CustomTabPanel key={index} value={value} index={index}>
          {tab.content}
        </CustomTabPanel>
      ))}
    </Box>
  );
};

export default CustomTab;
