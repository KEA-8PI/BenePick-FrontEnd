import { Helmet } from 'react-helmet-async';
import { LoginView } from './view';
import { useEffect } from 'react';
import { useAccountStore } from 'store/useAccountStore';

const LoginPage = () => {
  const { accountInfo } = useAccountStore();
  const { role } = accountInfo;

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
