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
