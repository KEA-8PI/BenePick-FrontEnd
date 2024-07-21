import React from 'react';
import { Helmet } from 'react-helmet-async';

const Wishlist = () => {
  return (
    <div>
      <Helmet>
        <title>BenePick | 위시리스트</title>
      </Helmet>
      {Array.from({ length: 30 }, (_, index) => (
        <p key={index}>This is the Wishlit Page.</p>
      ))}
    </div>
  );
};

export default Wishlist;
