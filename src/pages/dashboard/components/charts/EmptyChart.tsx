import * as S from 'components/common/Components.styles';

const EmptyChart = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
      <S.Wrapper style={{ paddingTop: '20px', width: '100%', textAlign: 'center' }}>
        관련된 데이터가 없습니다.
      </S.Wrapper>
    </div>
  );
};
export default EmptyChart;
