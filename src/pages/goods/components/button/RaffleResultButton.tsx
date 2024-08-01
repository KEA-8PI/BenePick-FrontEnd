import React, { useState } from 'react';
import { Button, IconButton, Box, Typography, InputAdornment } from '@mui/material';
import colors from 'theme/variableColors';
import * as S from 'components/common/Components.styles';
import { HashInput } from 'components/bigCustomModal/bigCustomModal.styles';
import BigCustomModal from 'components/bigCustomModal/bigCustomModal';
import { IModalConfig } from 'components/bigCustomModal/bigCustomModal.types';
import { useToggle } from 'hooks/useToggle';

const seeds = 13241342342798;

const RaffleResultButton = () => {
  const isFirstModalToggle = useToggle();
  const isSecondModalToggle = useToggle();

  const firstModalConfig: IModalConfig = {
    open: isFirstModalToggle.isOpen,
    onClose: isFirstModalToggle.toggle,
    contents: (
      <Box display="flex" flexDirection="column" height="100%">
        <Typography style={{ fontSize: '17px', fontWeight: 'bold' }}>결과 돌려보기</Typography>
        <Box
          style={{
            fontSize: '17px',
            display: 'flex',
            flexDirection: 'row',
            paddingTop: '20px',
          }}
        >
          <Typography style={{ paddingRight: '70px' }}>설정된 해시 </Typography>
          <Typography>{seeds} </Typography>
        </Box>
        <S.Row style={{ fontSize: '17px', alignContent: 'center', alignItems: 'center', paddingTop: '20px' }}>
          <Typography style={{ paddingRight: '100px' }}>테스트</Typography>
          <HashInput placeholder="해시 값을 입력해주세요." />
        </S.Row>

        <img
          src="/images/benepickLogo.png"
          alt="logo"
          width={230}
          height={67}
          style={{ justifyContent: 'center', padding: '0 40% 0 40%' }}
        />
      </Box>
    ),
    buttons: {
      action: () => {
        isSecondModalToggle.toggle(); // 두 번째 모달 열기
      },
    },
  };

  const secondModalConfig = {
    open: isSecondModalToggle.isOpen,
    onClose: isSecondModalToggle.toggle,
    contents: <Typography>응모가 완료되었습니다.</Typography>,
  };
  return (
    <div>
      <Button
        style={{
          width: '400px',
          height: '45px',
          fontSize: '17px',
          backgroundColor: colors.primary,
          color: 'white',
        }}
        onClick={() => isFirstModalToggle.toggle()}
      >
        결과 돌려보기
      </Button>

      <BigCustomModal modalConfig={firstModalConfig} />
      <BigCustomModal modalConfig={secondModalConfig} />
    </div>
  );
};

export default RaffleResultButton;
