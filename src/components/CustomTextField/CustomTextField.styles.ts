import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import colors from 'theme/variableColors';

export const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: colors.secondary,
      // backgroundColor: '#F7F7F7',
    },

    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: colors.primary,
    },
    '&:hover fieldset': {
      borderColor: colors.primary,
    },

    '& .MuiInputBase-input': {
      fontWeight: 400,
      fontSize: '0.875rem',
      textAlign: 'center',
    },
  },
});
