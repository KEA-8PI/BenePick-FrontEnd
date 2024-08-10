import { forwardRef } from 'react';
import * as S from 'components/common/Components.styles';

const RaffleBeforeInfo = forwardRef<HTMLElement>(() => {
  return (
    <S.Wrapper style={{ paddingTop: '20px', width: '100%', justifyContent: 'center' }}>
      <S.ShadowBox style={{ width: 600, height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        응모 진행 전입니다.
      </S.ShadowBox>
    </S.Wrapper>
  );
});

export default RaffleBeforeInfo;
