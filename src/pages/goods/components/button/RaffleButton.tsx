import React, { useState } from 'react';
import * as S from 'components/common/Components.styles';
import * as C from 'components/CustomCard/CustomCard.styles';
import { Box, Button, Slider, OutlinedInput, Typography } from '@mui/material';
import { CustomModal } from 'components/CustomModal/CustomModal';
import { IModalConfig } from 'components/CustomModal/CustomModal.types';
import colors from 'theme/variableColors';

const MIN = 0;
const MAX = 3200;
const MID = (MIN + MAX) / 2;

const RaffleButton: React.FC = () => {
  const [value, setValue] = useState(MID);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === '' ? 0 : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < MIN) {
      setValue(MIN);
    } else if (value > MAX) {
      setValue(MAX);
    }
  };

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  console.log('value', value);

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleAction = () => {
    console.log('Action button clicked');
    handleClose();
  };

  const modalConfig: IModalConfig = {
    open: isModalOpen,
    onClose: handleClose,
    contents: (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
        textAlign="center"
      >
        <Typography style={{ fontSize: '18px' }}>응모 하시겠습니까?</Typography>
        <Typography
          style={{ color: colors.primary, textDecoration: 'underline', fontSize: '13px', paddingTop: '15px' }}
        >
          ※ 응모 완료 시 취소할 수 없습니다.
        </Typography>
      </Box>
    ),
    buttons: {
      label: '확인',
      action: handleAction,
    },
  };

  return (
    <div style={{ width: '400px' }}>
      <S.Row style={{ alignContent: 'center', alignItems: 'center' }}>
        <C.CardLightFont>{MIN}</C.CardLightFont>
        <OutlinedInput
          value={value}
          size="small"
          onChange={handleInputChange}
          onBlur={handleBlur}
          inputProps={{
            step: 10,
            min: MIN,
            max: MAX,
            type: 'number',
            'aria-labelledby': 'input-slider',
          }}
          style={{ width: 'auto', fontSize: '13px' }}
        />
        <C.CardLightFont>{MAX}</C.CardLightFont>
      </S.Row>

      <Slider
        aria-labelledby="input-slider"
        step={10}
        min={MIN}
        max={MAX}
        value={typeof value === 'number' ? value : 0}
        onChange={handleSliderChange}
        style={{
          marginTop: '5px',
          color: colors.secondary,
        }}
      />
      <Button
        style={{
          width: '400px',
          height: '45px',
          fontSize: '17px',
          backgroundColor: colors.primary,
          color: 'white',
          marginTop: '10px',
        }}
        onClick={handleOpen}
      >
        응모하기
      </Button>
      <CustomModal modalConfig={modalConfig} />

      <C.CardLightFont
        style={{
          fontSize: '13px',
          color: colors.grey01,
          marginTop: '10px',
          textAlign: 'right',
        }}
      >
        ※ 응모 시 패널티가 부과되어 포인트가
        <br />
        10% 증가된 비율로 적용됩니다.
      </C.CardLightFont>
    </div>
  );
};

export default RaffleButton;
