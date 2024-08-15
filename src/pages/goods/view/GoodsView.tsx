import * as S from 'components/common/Components.styles';
import GoodsDetail from '../components/GoodsDetail';

const GoodsView = () => {
  return (
    <S.Wrapper>
      <GoodsDetail info={info} />
    </S.Wrapper>
  );
};

export default GoodsView;
