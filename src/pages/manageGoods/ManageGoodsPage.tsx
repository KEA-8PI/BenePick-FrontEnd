import { Helmet } from 'react-helmet-async';
import ManageGoodsView from './view/ManageGoodsView';

const ManageGoodsPage = () => {
  return (
    <div>
      <Helmet>
        <title>BenePick | 상품 관리</title>
      </Helmet>
      <ManageGoodsView />
    </div>
  );
};

export default ManageGoodsPage;
