import React from 'react';
import * as S from 'components/common/Components.styles';
import * as C from 'components/CustomCard/CustomCard.styles';
import { Typography, Button, Fade, Paper } from '@mui/material';
import Popper, { PopperPlacementType } from '@mui/material/Popper';
import colors from 'theme/variableColors';
import { CustomCardData } from 'components/CustomCard/CustomCard.types';

const RightDetailContents = ({ info }: { info: CustomCardData; like?: boolean; handleLike?: () => void }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();

  const handleClick = (newPlacement: PopperPlacementType) => (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <C.CardLightFont style={{ fontSize: '15px' }}>#{info.category}</C.CardLightFont>
      <C.CardBoldFont style={{ fontSize: '25px', width: '400px' }}>{info.name}</C.CardBoldFont>
      <C.CardBoldFont
        style={{ fontSize: '20px', textDecoration: 'line-through', color: colors.grey01, marginBottom: '3px' }}
      >
        {info.price.toLocaleString()}원
      </C.CardBoldFont>
      <S.Row>
        <C.CardBoldFont style={{ fontSize: '20px' }}>{info.discountPrice.toLocaleString()}원</C.CardBoldFont>
        <Typography style={{ color: 'black', fontSize: '15px', paddingLeft: '150px' }}>{info.amounts}개</Typography>
      </S.Row>
      <S.Row style={{ justifyContent: 'flex-end' }}>
        <Button
          style={{
            width: '48px',
            height: '22px',
            fontSize: '15px',
            backgroundColor: colors.whiteGrey,
            color: colors.grey02,
            marginTop: '30px',
          }}
          onClick={handleClick('bottom-end')}
        >
          더보기
        </Button>
      </S.Row>

      <Popper sx={{ width: '400px', height: '200px' }} open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={5}>
            <Paper sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Typography sx={{ p: 2 }}>{info.description}</Typography>
              <Button onClick={handleClose} style={{ color: colors.grey01, alignSelf: 'flex-end', bottom: 0 }}>
                닫기
              </Button>
            </Paper>
          </Fade>
        )}
      </Popper>
    </div>
  );
};

export default RightDetailContents;
