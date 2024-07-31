import styled from '@emotion/styled';
import { Button } from '@mui/material';
import colors from 'theme/variableColors';

// Header.styles.ts
export const HeaderWrapper = styled.header`
  position: relative;
  z-index: 1000; // 높은 값으로 설정하여 다른 요소들보다 위에 보이도록 합니다.
  background-color: #fff;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ShadowBoxProps {
  width?: number;
  height?: number;
  padding?: string;
}

export const ShadowBox = styled.div<ShadowBoxProps>`
  display: flex;
  width: ${({ width }: { width?: number }) => (width ? `${width}%` : 'auto')};
  align-items: center;
  height: ${({ height }: { height?: number }) => (height ? `${height}%` : 'auto')};
  box-shadow: 0px 0px 10px 1px ${colors.tableGrey};
  border-radius: 10px;
  padding: ${({ padding }) => (padding ? padding : '30px')};
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: ${({ width }: { width?: number }) => (width ? `${width}%` : 'auto')};
`;

export const ColorBox = styled.div`
  width: 60px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 15px;
  background-color: ${({ color }: { color: string }) => color};
`;

export const CustomButton = styled(Button)`
  width: ${({ width }: { width?: string }) => (width ? `${width}` : '81px')};
  border-radius: 3px;
  background-color: ${colors.buttonPink};
  height: 28px;
  color: black;
`;
