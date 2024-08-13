import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import DashboardView from './view/DashboardView';
import { useAccountStore } from 'store/useAccountStore';
import { useEffect } from 'react';

const Dashboard = () => {
  const navigate = useNavigate();
  const userID = useAccountStore((state) => state.accountInfo.id);

  useEffect(() => {
    if (!userID) {
      navigate('/login');
    }
  });

  return (
    <div>
      <Helmet>
        <title>BenePick | 대시보드</title>
      </Helmet>

      {userID && <DashboardView />}
    </div>
  );
};
export default Dashboard;
