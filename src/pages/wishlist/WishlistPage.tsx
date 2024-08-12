import React from 'react';
import { Helmet } from 'react-helmet-async';
import WishlistView from './view/WishlistView';

const Wishlist = () => {
  return (
    <div>
      <Helmet>
        <title>BenePick | 위시리스트</title>
      </Helmet>
      <WishlistView />
    </div>
  );
};

export default Wishlist;
