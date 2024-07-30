import { forwardRef } from 'react';
import * as S from 'components/common/Components.styles';
import { DrawOutcomeProps } from '../TabContent.types';

const DrawOutcomeIng = forwardRef<HTMLElement, DrawOutcomeProps>(({ info }, ref) => {
  //   console.log('DrawOutcomeIng info: ', info);
  return (
    <S.Wrapper style={{ paddingTop: '20px', width: '100%', justifyContent: 'center' }}>
      <S.ShadowBox style={{ width: 600, height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        응모 해주셔서 감사합니다.
        <br />
        결과 발표는 2024.7.31(수) 이후에 발표될 예정입니다.
      </S.ShadowBox>
    </S.Wrapper>
  );
});

export default DrawOutcomeIng;
