import { Box, IconButton } from '@mui/material';
import * as S from 'components/common/Components.styles';
import * as C from 'components/CustomCard/CustomCard.styles';
import Iconify from 'components/common/Iconify/Iconify';
import colors from 'theme/variableColors';
import { useState } from 'react';
import DateCalendar from 'components/dateCalendar/DateCalendar';
import { GoodsInfoData } from '../../goodsInfo/GoodsInfo.types';
import { deleteDateT } from 'pages/manageGoods/utils/formatData';

const ModifyGoodsDate = ({
  raffleStartAt,
  raffleEndAt,
  setState,
}: {
  raffleStartAt: string;
  raffleEndAt: string;
  setState: React.Dispatch<React.SetStateAction<GoodsInfoData>>;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <IconButton sx={{ marginRight: '8px' }} onClick={() => setIsOpen(!isOpen)}>
        <Iconify icon="lets-icons:date-range" sx={{ width: '20px', height: '20px', color: colors.grey01 }} />
      </IconButton>
      <S.Wrapper>
        <C.CardLightFont>{deleteDateT(raffleStartAt, true)}</C.CardLightFont>
        <C.CardLightFont>~{deleteDateT(raffleEndAt, true)}</C.CardLightFont>
      </S.Wrapper>
      <DateCalendar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        startDate={raffleStartAt}
        endDate={raffleEndAt}
        setState={setState}
      />
    </Box>
  );
};

export default ModifyGoodsDate;
