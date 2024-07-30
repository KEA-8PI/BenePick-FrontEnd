import { forwardRef } from 'react';
import { DrawOutcomeProps } from '../TabContent.types';
import DrawOutcomeIng from './DrawOutcomeIng';
import DrawOutcomeBefore from './DrawOutcomeBefore';
import DrawOutcomeAfter from './DrawOutcomeAfter';

import { Divider } from '@mui/material';

const DrawOutcomeView = forwardRef<HTMLElement, DrawOutcomeProps>(({ goodsStatus, info }, ref) => {
  return (
    <section ref={ref} style={{ width: '100%' }}>
      <h3 style={{ paddingTop: '40px', paddingLeft: '10px' }}>결과 발표</h3>
      <Divider variant="middle" style={{ width: '100%' }} />
      <div>
        {goodsStatus === '예정' ? (
          <DrawOutcomeBefore goodsStatus={goodsStatus} info={info} />
        ) : goodsStatus === '진행' ? (
          <DrawOutcomeIng goodsStatus={goodsStatus} info={info} />
        ) : (
          <DrawOutcomeAfter goodsStatus={goodsStatus} info={info} />
        )}
      </div>
    </section>
  );
});

export default DrawOutcomeView;
