import React from 'react';
import { Helmet } from 'react-helmet-async';
import DashboardView from './view/DashboardView';

const Dashboard = () => {
  return (
    <div>
      <Helmet>
        <title>BenePick | 대시보드</title>
      </Helmet>

      <DashboardView />
    </div>
  );
};
export default Dashboard;
