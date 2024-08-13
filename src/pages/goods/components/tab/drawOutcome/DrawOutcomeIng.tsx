import { forwardRef } from 'react';
import * as S from 'components/common/Components.styles';
import { DrawOutcomeProps } from '../TabContent.types';

const DrawOutcomeIng = forwardRef<HTMLElement, DrawOutcomeProps>(({ info }, ref) => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };
  return (
    <S.Wrapper style={{ paddingTop: '20px', width: '100%', justifyContent: 'center' }}>
      <S.ShadowBox style={{ width: 600, height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        응모 해주셔서 감사합니다.
        <br />
        결과 발표는 {formatDate(info.raffleEndAt)} 이후에 발표될 예정입니다.
      </S.ShadowBox>
    </S.Wrapper>
  );
});

export default DrawOutcomeIng;
