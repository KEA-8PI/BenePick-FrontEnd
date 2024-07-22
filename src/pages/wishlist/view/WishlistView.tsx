import CustomTab from 'components/tab/CustomTab';
import { Typography } from '@mui/material';

const WishlistView = () => {
  const tabData = [
    { label: '진행중', content: <div>Content for Tab 1</div> },
    { label: '응모 예정', content: <div>Content for Tab 2</div> },
  ];
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: '26px', paddingBottom: '32px' }}>위시리스트</Typography>
        <CustomTab tabs={tabData} />
      </div>
    </>
  );
};

export default WishlistView;
