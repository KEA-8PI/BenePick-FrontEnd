import React, { useState, useEffect } from 'react';
import * as S from 'components/common/Components.styles';
import * as C from 'components/CustomCard/CustomCard.styles';
import { Box, Button, Slider, OutlinedInput, Typography } from '@mui/material';
import CustomModal from 'components/CustomModal/CustomModal';
import { IModalConfig } from 'components/CustomModal/CustomModal.types';
import { useToggle } from 'hooks/useToggle';
import colors from 'theme/variableColors';
import { useAccountStore } from 'store/useAccountStore';
import { PostRaffleApply } from 'api/raffles.api';

const RaffleButton = ({ info, point }) => {
  const userID = useAccountStore((state) => state.accountInfo.id);
  const MIN = 0;
  const MAX = point;
  const MID = (MIN + MAX) / 2;

  // value의 초기 값을 MID로 설정합니다.
  const [value, setValue] = useState(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value === '' ? 0 : Number(event.target.value);
    setValue(Math.min(MAX, Math.max(MIN, newValue))); // value를 MIN과 MAX 사이로 제한
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

  useEffect(() => {
    setValue(MID);
    console.log('value', value);
    console.log('info', info);
    console.log('userID', userID);
    console.log('RaffleButton point', point);
  }, [value, info, userID, point]);

  const isFirstModalToggle = useToggle();
  const isSecondModalToggle = useToggle();

  const firstModalConfig: IModalConfig = {
    open: isFirstModalToggle.isOpen,
    onClose: isFirstModalToggle.toggle,
    contents: (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
        textAlign="center"
      >
        {value === MIN ? (
          <Typography style={{ color: colors.primary }}>1 이상의 포인트를 사용하셔야 합니다.</Typography>
        ) : (
          <>
            <Typography style={{ fontSize: '18px' }}>{value} 포인트 응모 하시겠습니까?</Typography>
            <Typography
              style={{ color: colors.primary, textDecoration: 'underline', fontSize: '13px', paddingTop: '15px' }}
            >
              ※ 응모 완료 시 취소할 수 없습니다.
            </Typography>
          </>
        )}
      </Box>
    ),
    buttons:
      value !== MIN
        ? {
            label: '확인',
            action: () => {
              PostRaffleApply(info.id, value)
                .then((res) => {
                  const response = res.data.result;
                  console.log('응모 결과:', response);
                  isSecondModalToggle.toggle();
                })
                .catch((error) => {
                  if (error.response) {
                    console.error('응모 에러:', error.response.data);
                  } else if (error.request) {
                    console.error('응모 에러: 서버로부터 응답이 없습니다.', error.request);
                  } else {
                    console.error('응모 에러:', error.message);
                  }
                });
            },
          }
        : null, // value가 MIN일 경우 버튼을 숨깁니다.
  };

  const secondModalConfig = {
    open: isSecondModalToggle.isOpen,
    onClose: isSecondModalToggle.toggle,
    contents: <Typography>응모가 완료되었습니다.</Typography>,
  };

  return (
    <div style={{ width: '400px' }}>
      <S.Row style={{ alignContent: 'center', alignItems: 'center' }}>
        <C.CardLightFont>{MIN} 포인트</C.CardLightFont>
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
        <C.CardLightFont>{MAX} 포인트</C.CardLightFont>
      </S.Row>

      <Slider
        aria-labelledby="input-slider"
        step={10}
        min={MIN}
        max={MAX}
        value={typeof value === 'number' ? value : MID} // value가 숫자인 경우만 설정, 아니면 MID를 기본값으로 사용
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
        onClick={() => isFirstModalToggle.toggle()}
      >
        응모하기
      </Button>
      <CustomModal modalConfig={firstModalConfig} />
      <CustomModal modalConfig={secondModalConfig} />

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
