import React from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import colors from '../theme/variableColors';

// 타입 정의
interface NavItem {
  title: string;
  path: string;
}

interface MemeberNavBarProps {
  navItems: NavItem[];
  memberNavItems: NavItem[];
  path: string;
}

// 컴포넌트 정의
const MemeberNavBar: React.FC<MemeberNavBarProps> = ({ navItems, memberNavItems, path }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav
      style={{
        backgroundColor: 'white',
        position: 'fixed',
        margin: 'auto',
        top: 0,
        left: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '110px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        justifyContent: 'space-between', // 양 끝으로 배치
      }}
    >
      <div
        style={{
          flex: 'justify-center',
          justifyItems: 'center',
          marginLeft: '33px',
        }}
      >
        <a href="/">
          <img src="/images/benepickLogo.png" alt="logo" width={230} height={67} />
        </a>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '40px',
            marginRight: '50px',
            alignItems: 'center',
          }}
        >
          {navItems.map((item) => {
            return (
              <a
                key={item.title}
                href={item.path}
                className="nav-item"
                style={{
                  color: path === item.path ? colors.primary : '#000000',
                }}
              >
                {item.title}
              </a>
            );
          })}
          {memberNavItems.map((item) => (
            <a
              key={item.title}
              href={item.path}
              className="nav-item"
              style={{
                color: path === item.path ? colors.primary : '#000000',
              }}
            >
              {item.title}
            </a>
          ))}
        </ul>
        <div
          style={{
            marginRight: '20px',
          }}
        >
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
            <MenuItem onClick={handleClose}>프로필</MenuItem>
            <MenuItem onClick={handleClose}>로그인</MenuItem>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default MemeberNavBar;
