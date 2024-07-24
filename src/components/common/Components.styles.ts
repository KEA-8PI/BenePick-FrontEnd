import styled from '@emotion/styled';
import colors from 'theme/variableColors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ShadowBoxProps {
  width?: number;
  height?: number;
}

export const ShadowBox = styled.div<ShadowBoxProps>`
  display: flex;
  width: ${({ width }: { width?: number }) => (width ? `${width}%` : 'auto')};
  align-items: center;
  height: ${({ height }: { height?: number }) => (height ? `${height}%` : 'auto')};
  box-shadow: 0px 0px 10px 1px ${colors.tableGrey};
  border-radius: 10px;
  padding: 30px 0;
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
  display: 'flex';
  justify-content: 'center';
  align-items: 'center';
  text-align: 'center';
  background-color: ${({ color }: { color: string }) => color};
`;
