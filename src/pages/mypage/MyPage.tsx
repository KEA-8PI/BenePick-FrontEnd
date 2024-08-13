import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MyPageView from './view/MyPageView';
import { useAccountStore } from 'store/useAccountStore';

const MyPage = () => {
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
        <title>BenePick | 마이페이지</title>
      </Helmet>
      {userID && <MyPageView />}
    </div>
  );
};

export default MyPage;
