import { Box } from '@mui/material';
import { TabPanelProps } from './CustomTab.types';

// 탭 안의 내용
const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ paddingTop: '35px' }}>{children}</Box>}
    </div>
  );
};
export default CustomTabPanel;
