import { IModalConfig } from './bigCustomModal.types';
import { Box, IconButton, Modal } from '@mui/material';
import * as S from './bigCustomModal.styles';
import Iconify from 'components/common/Iconify/Iconify';

const BigCustomModal = ({ modalConfig }: { modalConfig: IModalConfig }) => {
  const { buttons, open, onClose, contents } = modalConfig;

  if (!open) {
    return null;
  }

  const handleClickButton = () => {
    if (buttons?.action) {
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
        <div style={{ display: 'flex', justifyContent: 'end', zIndex: 2 }}>
          <IconButton onClick={onClose} sx={{ mt: '5px', mr: '5px' }}>
            <Iconify icon="eva:close-fill" sx={{ width: '25px', height: '25px' }} />
          </IconButton>
        </div>
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
          <S.StyledButton onClick={handleClickButton}>{buttons.label}</S.StyledButton>
        </div>
      </S.Wrapper>
    </Modal>
  );
};

export default BigCustomModal;
