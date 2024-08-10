import { Helmet } from 'react-helmet-async';
import { LoginView } from './view';
import { useEffect } from 'react';
import axios from 'axios';

const LoginPage = () => {
  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const response = await axios.post('http://benepick.kro.kr:10001/auth/login', {
  //         id: 'string',
  //         password: 'string',
  //       });
  //       console.log('Get 상품 목록 response:', response.data);
  //       // Assuming response.data.result.goodsDTOList contains the list of goods
  //     } catch (error) {
  //       console.error('Get 상품 목록 error:', error);
  //     }
  //   }
  //   getData();
  // }, []);
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
