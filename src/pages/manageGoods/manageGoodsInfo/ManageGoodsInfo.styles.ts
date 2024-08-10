import { TextField } from '@mui/material';
import styled from '@emotion/styled';
import colors from 'theme/variableColors';

export const ColumnBox = styled.div`
  width: 127px;
  height: ${({ height }: { height?: number }) => (height ? `${height}px` : '49px')};
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  background-color: ${colors.tablePink};
  margin-bottom: 10px;
`;

export const GoodsInfoTextField = styled(TextField)({
  width: '550px',
  height: '49px',
  marginBottom: '10px',

  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#D9D9D9',
      borderRadius: '2px',
    },

    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: colors.primary,
    },
    '&:hover fieldset': {
      borderColor: colors.secondary,
    },
  },
});

export const CategoryContainer = styled.div`
  width: 550px;
  height: 54px;
  margin-bottom: 10px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  &:hover {
    border-color: ${colors.primary};
  }
`;
