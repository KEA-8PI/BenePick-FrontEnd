import * as S from 'components/common/Components.styles';
const DashboardEmpty = () => {
  return (
    <div>
      <S.Wrapper style={{ paddingTop: '20px', width: '100%', justifyContent: 'center', padding: '30px 0 10px 0' }}>
        <S.ShadowBox
          style={{ width: 600, height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          기간을 설정해주세요.
        </S.ShadowBox>
      </S.Wrapper>
    </div>
  );
};
export default DashboardEmpty;
