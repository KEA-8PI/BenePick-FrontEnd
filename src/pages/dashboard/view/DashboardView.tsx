import { useState } from 'react';
import { Typography, CircularProgress, Box } from '@mui/material';
import DashboardFilter from '../components/DashboardFilter';
import DashboardCard from '../components/DashboardCard';
import DashboardEmpty from '../components/DashboardEmpty';

const DashboardView = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Typography sx={{ fontWeight: 'bold', fontSize: '26px' }}>대시보드</Typography>
      <DashboardFilter setDashboardData={setDashboardData} setLoading={setLoading} />
      {loading ? (
        // 로딩 중일 때
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
          <CircularProgress color="inherit" />
        </Box>
      ) : dashboardData ? (
        // 데이터가 있을 때
        <DashboardCard data={dashboardData} />
      ) : (
        // 데이터가 없을 때
        <DashboardEmpty />
      )}
    </>
  );
};

export default DashboardView;
