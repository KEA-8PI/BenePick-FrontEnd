import React, { startTransition, useState } from 'react';
import { Divider, IconButton, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import colors from 'theme/variableColors';

const userId = 'example@dktechin.com';
// const userId = '';

const ProfilePopover = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const navigate = useNavigate();

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

  const handleLogoutClick = () => {
    handleClose();
    // user logout api 호출
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
        {userId ? <MenuItem>{userId}</MenuItem> : <MenuItem>로그인 후 사용해주세요!</MenuItem>}
        <Divider />
        {userId ? (
          <MenuItem onClick={handleLogoutClick} style={{ fontWeight: 'bold', color: colors.primary }}>
            로그아웃
          </MenuItem>
        ) : (
          <MenuItem onClick={handleLoginClick} style={{ fontWeight: 'bold' }}>
            로그인
          </MenuItem>
        )}
      </Menu>
    </div>
  );
};

export default ProfilePopover;
