import { IModalConfig } from './ChangePwdModal.types';
import { Box, IconButton, Stack, Modal, Typography, InputAdornment } from '@mui/material';
import * as S from '../CustomModal/CustomModal.styles';
import { Row } from 'components/common/Components.styles';
import Iconify from 'components/common/Iconify/Iconify';
import colors from 'theme/variableColors';
import { useEffect, useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Container, PasswordInput } from './ChangePwdModal.styles';
import { PatchPassword } from 'api/members.api';
import { SHA256 } from 'crypto-js';

export const ChangePwdModal = ({ modalConfig }: { modalConfig: IModalConfig }) => {
  const { open, onClose, buttonAction } = modalConfig;

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [isValidatePassword, setIsValidatePassword] = useState(false);
  const [isValidatePasswordCheck, setIsValidatePasswordCheck] = useState(false);

  const handleClickShowPassword = (change: React.Dispatch<React.SetStateAction<boolean>>) => {
    return () => {
      change((prev) => !prev);
    };
  };

  const handlePwdChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>,
    checkState?: React.Dispatch<React.SetStateAction<boolean>>,
    checkPwd?: boolean,
  ) => {
    // console.log('비밀번호', e.target.value);
    const value = e.target.value;
    setState(value);
    // 비밀번호 특수문자 검사를 위한 정규식표현.
    const specialLetter = value.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
    // 영어, 숫자, 특수문자 정규식
    const passwordRegEx = /^[A-Za-z0-9`~!@@#$%^&*|₩₩₩'₩";:₩/?]{8,20}$/;
    // 특수문자 1자 이상, 전체 8자 이상일 것.
    const isValidPassword = value.length >= 8 && value.length <= 12 && specialLetter >= 1 && passwordRegEx.test(value);

    if (isValidPassword && (checkPwd === true ? password === value : true)) {
      checkState(true);
    } else {
      checkState(false);
    }
  };

  const clickConfirmButton = () => {
    // 비밀번호 재설정 api 호출
    PatchPassword(SHA256(password).toString()).then((res) => {
      console.log('비밀번호 변경 성공', res);
    });
    buttonAction();
    onClose();
  };

  if (!open) {
    return null;
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: 'flex' }}
    >
      <S.Wrapper>
        <div style={{ display: 'flex', justifyContent: 'end', zIndex: 2 }}>
          <IconButton onClick={onClose} sx={{ mt: '5px', mr: '5px' }}>
            <Iconify icon="eva:close-fill" sx={{ width: '25px', height: '25px' }} />
          </IconButton>
        </div>
        <Typography style={{ marginLeft: '6%', marginBottom: '1%', fontSize: '18px' }}>비밀번호 재설정</Typography>
        <Container>
          <Row width={90} style={{ alignItems: 'center' }}>
            <Typography style={{ fontSize: '13px', fontWeight: '600' }}>새 비밀번호</Typography>
            <div style={{ width: 'auto', alignItems: 'center', display: 'flex' }}>
              {password.length !== 0 && (
                <Iconify
                  icon={isValidatePassword ? 'icon-park-outline:check-one' : 'akar-icons:circle-x'}
                  color={isValidatePassword ? '#49CC92' : colors.primary}
                  sx={{ width: '18px', height: '18px', marginRight: '5px' }}
                />
              )}
              <PasswordInput
                // sx={{
                //   width: '70%',
                // }}
                type={showPassword ? 'text' : 'password'}
                size="small"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handlePwdChange(e, setPassword, setIsValidatePassword)
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword(setShowPassword)}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOff sx={{ width: '18px', height: '18px' }} />
                        ) : (
                          <Visibility sx={{ width: '18px', height: '18px' }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </Row>
          <Typography
            style={{ fontSize: '10px', color: colors.grey01, width: '90%', textAlign: 'right', marginBottom: 5 }}
          >
            * 영문, 숫자, 특수문자를 포함한 8~12자 이내
          </Typography>
          <Row width={90} style={{ alignItems: 'center' }}>
            <Typography style={{ fontSize: '13px', fontWeight: '600' }}>비밀번호 확인</Typography>
            <div style={{ width: 'auto', alignItems: 'center', display: 'flex' }}>
              {passwordCheck.length !== 0 && (
                <Iconify
                  icon={isValidatePasswordCheck ? 'icon-park-outline:check-one' : 'akar-icons:circle-x'}
                  color={isValidatePasswordCheck ? '#49CC92' : colors.primary}
                  sx={{ width: '18px', height: '18px', marginRight: '5px' }}
                />
              )}
              <PasswordInput
                // sx={{
                //   width: '70%',
                // }}
                type={showPasswordCheck ? 'text' : 'password'}
                size="small"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handlePwdChange(e, setPasswordCheck, setIsValidatePasswordCheck, true)
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword(setShowPasswordCheck)}
                        edge="end"
                      >
                        {showPasswordCheck ? (
                          <VisibilityOff sx={{ width: '18px', height: '18px' }} />
                        ) : (
                          <Visibility sx={{ width: '18px', height: '18px' }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </Row>
        </Container>
        <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-around', padding: '0 7%' }}>
          <S.LeftButton onClick={onClose}>취소</S.LeftButton>
          <S.RightButton onClick={clickConfirmButton} disabled={!isValidatePassword || !isValidatePasswordCheck}>
            확인
          </S.RightButton>
        </Stack>
      </S.Wrapper>
    </Modal>
  );
};
