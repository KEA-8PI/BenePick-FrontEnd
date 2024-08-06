import { Typography } from '@mui/material';

import DashboardFilter from '../components/DashboardFilter';
import DashboardCard from '../components/DashboardCard';

const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    weekday: 'short',
    hour12: false,
  };
  const formattedDate = date.toLocaleString('ko-KR', options);
  return formattedDate.replace(/(\d+)\.(\d+)\.(\d+)\.\s(\w+)\s(\d+:\d+)/, '$1.$2.$3($4) $5');
};

const DashboardView = () => {
  const raffleStartAt = new Date('');
  const raffleEndAt = new Date('');
  return (
    <>
      <Typography sx={{ fontWeight: 'bold', fontSize: '26px' }}>대시보드</Typography>

      <DashboardFilter raffleStartAt={raffleStartAt} raffleEndAt={raffleEndAt} />
      <DashboardCard />
    </>
  );
};

export default DashboardView;
