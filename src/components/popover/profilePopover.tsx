import React, { startTransition } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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

  const handleClick = () => {
    console.log('profilePopover');
  };

  const handleLoginClick = () => {
    handleClose();
    navigate('/login');
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
        <img src="/images/logoutImage.png" alt={'profile'} width={40} height={40} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClick}>프로필</MenuItem>
        <MenuItem onClick={handleLoginClick}>로그인</MenuItem>
      </Menu>
    </div>
  );
};

export default ProfilePopover;
