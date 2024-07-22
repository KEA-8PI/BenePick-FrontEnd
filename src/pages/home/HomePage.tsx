import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HomeView } from './view';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>BenePick | 홈</title>
      </Helmet>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <HomeView />
      </div>
    </div>
  );
};
export default Home;
