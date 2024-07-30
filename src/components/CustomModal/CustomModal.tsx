import { IModalConfig } from './CustomModal.types';
import { Container, Box, Button, IconButton, Stack, Modal, Typography, TextField } from '@mui/material';
import * as S from './CustomModal.styles';
import Iconify from 'components/common/Iconify/Iconify';

export const CustomModal = ({ modalConfig }: { modalConfig: IModalConfig }) => {
  const { buttons, size, open, onClose, contents } = modalConfig;

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
        <div style={{ display: 'flex', justifyContent: 'end', zIndex: 2 }}>
          <IconButton onClick={onClose} sx={{ mt: '5px', mr: '5px' }}>
            <Iconify icon="eva:close-fill" sx={{ width: '25px', height: '25px' }} />
          </IconButton>
        </div>
        <Box
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            // backgroundColor: 'grey',
            height: '63%',
          }}
        >
          {contents}
        </Box>
        {buttons ? (
          <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-around', padding: '0 7%' }}>
            <S.LeftButton onClick={onClose}>취소</S.LeftButton>
            <S.RightButton onClick={clickButton}>{buttons.label}</S.RightButton>
          </Stack>
        ) : (
          <div style={{ justifyContent: 'center', display: 'flex' }}>
            <S.RightButton onClick={onClose}>확인</S.RightButton>
          </div>
        )}
      </S.Wrapper>
    </Modal>
  );
};
