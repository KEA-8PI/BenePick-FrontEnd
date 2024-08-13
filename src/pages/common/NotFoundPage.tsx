import { Box, Typography } from '@mui/material';
import colors from 'theme/variableColors';

const NotFoundPage = () => {
  return (
    <Box
      style={{
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
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

      <img src="/images/404.jpeg" width={600} />
      <Typography
        style={{ marginTop: '20px', textAlign: 'center', fontFamily: 'Courier New', fontSize: 40, fontWeight: 'bold' }}
      >
        Error
        <br />
        Not Found
      </Typography>
      <Typography variant="h6" style={{ marginTop: '20px', textAlign: 'center' }} color={colors.grey02}>
        해당 페이지를 찾을 수 없습니다.
      </Typography>
    </Box>
  );
};

export default NotFoundPage;
