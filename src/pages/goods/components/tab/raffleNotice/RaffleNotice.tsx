import { forwardRef } from 'react';
import { RaffleNoticeProps } from '../TabContent.types';
import { Typography, Divider } from '@mui/material';
import colors from 'theme/variableColors';

const RaffleNotice = forwardRef<HTMLElement, RaffleNoticeProps>(({ goodsStatus }, ref) => {
  return (
    <section ref={ref} style={{ width: '100%' }}>
      <h3 style={{ paddingTop: '40px', paddingLeft: '10px' }}>응모 현황 정보</h3>
      <Divider variant="middle" style={{ width: '100%' }} />
      <Typography style={{ color: colors.grey01, fontSize: '15px', paddingTop: '10px', paddingLeft: '30px' }}>
        ※ 응모 후에는 취소가 불가능하오니 신중히 참여해 주시기 바랍니다.
        <br />
        ※ 당첨 시, 24시간 내에 마이페이지 &gt; 응모 내역에서 취소하시면 응모한 복지포인트의 일부만 환급받을 수 있습니다.
        <br />
        ※ 당첨 시 24시간 내에 구매 확정을 하지 않으면 노쇼로 간주되며 이후 응모시 불이익을 받을 수 있습니다.
        <br />
        ※ 당첨자에 한하여 개별 메세지를 드리며,미당첨자에게는 별도의 연락을 드리지 않습니다.
        <br />
        ※ 미당첨 시 응모한 복지포인트의 일부를 환급받을 수 있습니다.
        <br />※ 당첨 여부는 마이페이지 &gt; 응모 내역을 통해서 확인할 수 있습니다.
      </Typography>
    </section>
  );
});

export default RaffleNotice;
