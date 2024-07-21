import React from 'react';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
  return (
    <div>
      <Helmet>
        <title>대시보드 | BenePick</title>
      </Helmet>
      {Array.from({ length: 30 }, (_, index) => (
        <p key={index}>This is the Dashboard Page.</p>
      ))}
    </div>
  );
};
export default Dashboard;
