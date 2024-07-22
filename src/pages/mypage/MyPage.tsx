import { Helmet } from 'react-helmet-async';
import MyPageView from './view/MyPageView';

const MyPage = () => {
  return (
    <div>
      <Helmet>
        <title>BenePick | 마이페이지</title>
      </Helmet>
      <MyPageView />
    </div>
  );
};

export default MyPage;
