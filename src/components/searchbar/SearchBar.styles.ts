import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import colors from 'theme/variableColors';

export const OutlinedInput = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    height: '40px',
    '& fieldset': {
      borderColor: colors.primary,
      borderRadius: '50px',
      borderWidth: '2px',
    },

    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: colors.primary,
    },
    '&:hover fieldset': {
      borderColor: colors.secondary,
    },
    '& .MuiInputBase-input': {
      paddingLeft: '30px', // 원하는 padding 값을 설정합니다.
    },
  },
});
