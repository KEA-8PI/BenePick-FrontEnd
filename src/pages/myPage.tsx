import React from 'react';
import { Helmet } from 'react-helmet-async';

const MyPage = () => {
  return (
    <div>
      <Helmet>
        <title>마이페이지 | BenePick</title>
      </Helmet>
      {Array.from({ length: 30 }, (_, index) => (
        <p key={index}>This is the MyPage.</p>
      ))}
    </div>
  );
};

export default MyPage;
