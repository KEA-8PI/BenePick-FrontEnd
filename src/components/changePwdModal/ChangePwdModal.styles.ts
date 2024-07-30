import styled from '@emotion/styled';
import { Box, TextField } from '@mui/material';
import colors from 'theme/variableColors';

export const Container = styled(Box)`
  justify-content: center;
  align-items: center;
  display: flex;
  // background-color: grey;
  flex-direction: column;
  height: 50%;
  margin-bottom: 3%;
  padding: '0 5%';
`;

export const PasswordInput = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    // Class for the border around the input field

    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: colors.primary,
    },
    '&:hover fieldset': {
      borderColor: colors.secondary,
    },
  },
});
