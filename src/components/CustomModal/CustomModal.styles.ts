import styled from '@emotion/styled';
import { Button } from '@mui/material';
import colors from 'theme/variableColors';

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${270 * 1.534}px;
  height: 270px;
  background-color: white;
  border-radius: 30px;
  align-items: center;
`;

export const LeftButton = styled(Button)`
  width: 25%;
  height: 30px;
  border: 3px solid ${colors.buttonPink};
  border-radius: 30px;
  color: black;
  font-size: 18px;
`;
export const RightButton = styled(Button)`
  width: 25%;
  height: 30px;
  background-color: ${colors.primary};
  border-radius: 30px;
  color: white;
  font-size: 18px;
`;
