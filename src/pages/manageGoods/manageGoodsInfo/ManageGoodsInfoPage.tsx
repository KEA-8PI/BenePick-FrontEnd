import CardImage from 'components/CustomCard/CardImage';
import * as S from 'components/common/Components.styles';
import { Helmet } from 'react-helmet-async';
import colors from 'theme/variableColors';
import { ColumnBox } from './ManageGoodsInfo.styles';

const ManageGoodsPage = ({ info }: { info?: any }) => {
  return (
    <div>
      <Helmet>
        <title>BenePick | 상품 정보 관리</title>
      </Helmet>
      <h1>상품 관리 페이지</h1>
      <S.Row>
        <div>
          <ColumnBox>상품이름</ColumnBox>
          <ColumnBox>상품코드</ColumnBox>
          <ColumnBox>카테고리</ColumnBox>
          <ColumnBox>개수</ColumnBox>
          <ColumnBox>정가</ColumnBox>
          <ColumnBox>할인가</ColumnBox>
          <ColumnBox>상세설명</ColumnBox>
        </div>
      </S.Row>
    </div>
  );
};

export default ManageGoodsPage;
