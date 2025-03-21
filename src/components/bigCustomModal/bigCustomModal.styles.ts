import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';
import colors from 'theme/variableColors';

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${400 * 1.534}px;
  height: 400px;
  background-color: white;
  border-radius: 30px;
  align-items: center;
`;

export const HashInput = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    // Class for the border around the input field
    width: '350px',
    height: '35px',

    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: colors.primary,
    },
    '&:hover fieldset': {
      borderColor: colors.secondary,
    },
  },
});

export const StyledButton = styled(Button)`
  width: 210px;
  height: 35px;
  font-size: 15px;
  background-color: ${colors.primary};
  color: white;
`;
