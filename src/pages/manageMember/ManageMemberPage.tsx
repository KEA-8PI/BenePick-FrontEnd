import { Helmet } from 'react-helmet-async';
import ManageMemberView from './view/ManageMemberView';

const ManageMemberPage = () => {
  return (
    <div>
      <Helmet>
        <title>BenePick | 사원 관리</title>
      </Helmet>
      <ManageMemberView />
    </div>
  );
};

export default ManageMemberPage;
