import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useToggle } from 'hooks/useToggle';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, IconButton, InputAdornment, Button } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import colors from 'theme/variableColors';
import * as S from '../components/Login.styles';
import Login from './Login';
import { IModalConfig } from './Login.types';

import { PostLogin } from 'api/auth.api';
import { setUser } from 'reducer/userSlice';

const LoginEnter = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 비밀번호 보이기/숨기기
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = (change: React.Dispatch<React.SetStateAction<boolean>>) => {
    return () => {
      change((prev) => !prev);
    };
  };

  // 로그인 api 연결
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = async () => {
    try {
      const response = await PostLogin(id, password);
      console.log('로그인 성공', response.data);

      const { userID, role } = response.data.result;
      dispatch(setUser({ userID, role }));
      console.log('디스패치 성공: ', { userID, role });

      loginConfirmToggle.toggle();
    } catch (error) {
      console.error('로그인 실패:', error.message);
    }
  };

  // 로그인 확인 모달
  const loginConfirmToggle = useToggle();

  const loginConfirmToggleConfig: IModalConfig = {
    open: loginConfirmToggle.isOpen,
    onClose: loginConfirmToggle.toggle,
    contents: <Typography>로그인에 성공하셨습니다!</Typography>,
    buttons: { action: () => handleLogin() },
  };

  const handleLogin = () => {
    console.log('로그인 성공');

    // 역할과 함께 네비게이션 필요
    navigate('/');
  };

  return (
    <div
      style={{
        backgroundColor: 'white',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '460.2px',
        height: '300px',
        borderRadius: '30px',
      }}
    >
      <Box
        sx={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: '50px 0 0 44px',
          display: 'flex',
        }}
      >
        <Typography style={{ fontWeight: 'bold', fontSize: '20px' }}>로그인하기</Typography>
      </Box>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          alignContent: 'center',
          padding: '22px 0 0 44px',
        }}
      >
        <Typography style={{ fontWeight: 'bold', fontSize: '15px', paddingRight: '100px' }}>ID</Typography>
        <S.HashInput style={{ backgroundColor: colors.tableGrey }} onChange={(e) => setId(e.target.value)} />
      </Box>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          alignContent: 'center',
          padding: '20px 0 0 44px',
        }}
      >
        <Typography style={{ fontWeight: 'bold', fontSize: '15px', paddingRight: '45px' }}>Password</Typography>
        <S.HashInput
          style={{ backgroundColor: colors.tableGrey }}
          type={showPassword ? 'text' : 'password'}
          size="small"
          onChange={(e) => setPassword(e.target.value)}
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
      </Box>

      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          marginTop: '40px',
        }}
      >
        <Button
          style={{
            width: '210px',
            height: '35px',
            fontSize: '15px',
            backgroundColor: colors.primary,
            color: 'white',
            display: 'flex',
          }}
          onClick={handleLoginClick}
          // onClick={() => loginConfirmToggle.toggle()}
        >
          로그인
        </Button>
      </Box>

      <Login modalConfig={loginConfirmToggleConfig} />
    </div>
  );
};

export default LoginEnter;
