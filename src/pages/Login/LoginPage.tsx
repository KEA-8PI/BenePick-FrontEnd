import { Helmet } from 'react-helmet-async';

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title> BenePick | Login </title>
      </Helmet>

      <div style={{ flex: 1, backgroundColor: 'pink' }}>로그인</div>
    </>
  );
};

export default LoginPage;
