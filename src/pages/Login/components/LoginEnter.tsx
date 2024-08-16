import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, IconButton, InputAdornment, Button } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import colors from 'theme/variableColors';
import * as S from './Login.styles';
import { useAccountStore } from 'store/useAccountStore';
import { PostLogin } from 'api/auth.api';
import { SHA256 } from 'crypto-js';

const LoginEnter = () => {
  const navigate = useNavigate();
  const { setAccountInfo } = useAccountStore();
  const [showPassword, setShowPassword] = useState(false); // 비밀번호 보이기/숨기기

  const handleClickShowPassword = (change: React.Dispatch<React.SetStateAction<boolean>>) => {
    return () => {
      change((prev) => !prev);
    };
  };

  // 로그인 api 연결
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = async () => {
    if (!id || !password) {
      alert('아이디나 비밀번호를 입력해주세요');
      return; // 입력값이 없으면 로그인 요청을 보내지 않음
    }

    try {
      const response = await PostLogin(id, SHA256(password).toString());
      // const response = await PostLogin(id, password);
      const { userID, role } = response.data.result;
      setAccountInfo(userID, role);
      navigate('/'); // 역할과 함께 네비게이션 필요
    } catch (error) {
      if (error.message === 'Request failed with status code 400') {
        alert('아이디 또는 비밀번호가 잘못 되었습니다. 아이디와 비밀번호를 정확히 입력해 주세요.');
      } else if (error.response && error.response.status === 404) {
        alert('존재하지 않는 사원입니다.');
      } else {
        alert('로그인 중 문제가 발생했습니다. 다시 시도해 주세요.');
      }
    }
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
          padding: '20px 0 0 44px',
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
        <Typography style={{ fontWeight: 'bold', fontSize: '15px', paddingRight: '43.5px' }}>Password</Typography>
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
            height: '40px',
            fontSize: '15px',
            backgroundColor: colors.primary,
            color: 'white',
            display: 'flex',
            borderRadius: '30px',
          }}
          onClick={handleLoginClick}
        >
          로그인
        </Button>
      </Box>
    </div>
  );
};

export default LoginEnter;
