import { forwardRef } from 'react';
import * as S from 'components/common/Components.styles';
import { DrawOutcomeProps } from '../TabContent.types';
import { deleteDateT } from 'pages/manageGoods/utils/formatData';

const DrawOutcomeIng = forwardRef<HTMLElement, DrawOutcomeProps>(({ info }, ref) => {
  return (
    <S.Wrapper style={{ paddingTop: '20px', width: '100%', justifyContent: 'center' }}>
      <S.ShadowBox style={{ width: 600, height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        추첨 결과는 {deleteDateT(info.raffleEndAt)} 이후에 발표될 예정입니다.
      </S.ShadowBox>
    </S.Wrapper>
  );
});

export default DrawOutcomeIng;
