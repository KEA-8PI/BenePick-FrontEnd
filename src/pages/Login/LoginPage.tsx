import { Helmet } from 'react-helmet-async';
import { LoginView } from './view';
import { useEffect, useState } from 'react';
import { useAccountStore } from 'store/useAccountStore';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { accountInfo } = useAccountStore();
  const userID = accountInfo.id;
  const navigate = useNavigate();
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (userID && isFirstLoad) {
      alert('이미 로그인 되어 있습니다.');
      navigate(-1);
    }
    setIsFirstLoad(false);
  }, [userID, isFirstLoad]);

  return (
    <>
      <Helmet>
        <title> BenePick | 로그인 </title>
      </Helmet>

      <LoginView />
    </>
  );
};

export default LoginPage;
