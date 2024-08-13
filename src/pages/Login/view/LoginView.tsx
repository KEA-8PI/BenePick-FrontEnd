import { Box } from '@mui/material';
import LoginEnter from '../components/LoginEnter';

const LoginView = () => {
  return (
    <Box
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '150px 12%',
        WebkitTapHighlightColor: 'transparent',
        zIndex: -1,
      }}
    >
      <nav
        style={{
          backgroundColor: 'transparent',
          position: 'fixed',
          margin: 'auto',
          top: 0,
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          height: '90px',
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
            <img src="/images/benepickLogo.png" alt="logo" width={180} height={52} />
          </a>
        </div>
      </nav>

      <LoginEnter />
    </Box>
  );
};

export default LoginView;
