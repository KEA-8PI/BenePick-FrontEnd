import React, { startTransition, useState } from 'react';
import { Divider, IconButton, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import colors from 'theme/variableColors';
import { useAccountStore } from 'store/useAccountStore';
import { PostLogout } from 'api/auth.api';

const ProfilePopover = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const userID = useAccountStore((state) => state.accountInfo.id);
  const userRole = useAccountStore((state) => state.accountInfo.role);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    startTransition(() => {
      setAnchorEl(null);
    });
  };

  const handleLoginClick = () => {
    handleClose();
    navigate('/login');
  };

  const { resetAccountInfo } = useAccountStore();

  const handleLogoutClick = async () => {
    handleClose();

    // user logout api 호출
    try {
      const response = await PostLogout();
      console.log('로그아웃 성공', response.data);
      console.log('userID:', userID);
      console.log('userRole:', userRole);
    } catch (error) {
      console.error('로그아웃 실패:', error.message);
    }
    window.location.href = '/';
    resetAccountInfo();
  };

  return (
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <img src="/images/logoutImage.png" alt={'profile'} width={35} height={35} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* <MenuItem key="loginPrompt">로그인 후 사용해주세요!</MenuItem>
        <Divider key="divider2" />
        <MenuItem key="login" onClick={handleLoginClick} style={{ fontWeight: 'bold' }}>
          로그인
        </MenuItem> */}
        {userID
          ? [
              <MenuItem key="userId">이메일: {userID}</MenuItem>,
              <Divider key="divider1" />,
              <MenuItem key="logout" onClick={handleLogoutClick} style={{ fontWeight: 'bold', color: colors.primary }}>
                로그아웃
              </MenuItem>,
            ]
          : [
              <MenuItem key="loginPrompt">로그인 후 사용해주세요!</MenuItem>,
              <Divider key="divider2" />,
              <MenuItem key="login" onClick={handleLoginClick} style={{ fontWeight: 'bold' }}>
                로그인
              </MenuItem>,
            ]}
      </Menu>
    </div>
  );
};

export default ProfilePopover;
