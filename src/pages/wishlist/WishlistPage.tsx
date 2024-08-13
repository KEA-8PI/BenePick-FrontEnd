import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import WishlistView from './view/WishlistView';
import { useAccountStore } from 'store/useAccountStore';

const Wishlist = () => {
  const navigate = useNavigate();
  const userID = useAccountStore((state) => state.accountInfo.id);

  useEffect(() => {
    if (!userID) {
      navigate('/login');
    }
  }, [userID, navigate]);

  return (
    <div>
      <Helmet>
        <title>BenePick | 위시리스트</title>
      </Helmet>
      {userID && <WishlistView />}
    </div>
  );
};

export default Wishlist;
