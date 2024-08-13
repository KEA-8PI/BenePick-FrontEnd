import { Box, Modal } from '@mui/material';
import * as S from './Login.styles';
import { IModalConfig } from './Login.types';

const Login = ({ modalConfig }: { modalConfig: IModalConfig }) => {
  const { buttons, open, onClose, contents } = modalConfig;

  if (!open) {
    return null;
  }

  const clickButton = () => {
    if (buttons) {
      buttons.action();
    }
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: 'flex' }}
    >
      <S.Wrapper>
        <Box
          sx={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingLeft: '44px',
            display: 'flex',
            height: '63%',
          }}
        >
          {contents}
        </Box>
        <div style={{ justifyContent: 'center', display: 'flex', paddingTop: '40px' }}>
          <S.StyledButton onClick={clickButton}>확인</S.StyledButton>
        </div>
      </S.Wrapper>
    </Modal>
  );
};

export default Login;
