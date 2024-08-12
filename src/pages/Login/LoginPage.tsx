import { Helmet } from 'react-helmet-async';
import { LoginView } from './view';

const LoginPage = () => {
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
