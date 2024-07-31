import styled from '@emotion/styled';
import colors from 'theme/variableColors';

export const FileLabel = styled.label<{ isActive: boolean }>`
  width: 100%;
  height: 150px;
  margin: auto;
  background-color: #fff;
  border-radius: 5px;
  border: 3px dashed ${({ isActive }) => (isActive ? '#111' : '#eee')};
  /* padding: 70px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? '#efeef3' : '#fff')};
  &:hover {
    border-color: ${colors.primary};
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const PreviewMessage = styled.p`
  font-weight: 400;
  font-size: 16px;
  margin: 20px 0 10px;
  color: ${colors.grey01};
`;

export const PreviewDescription = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${colors.grey01};
`;

export const PreviewInfo = styled.ul`
  width: 80%;
  list-style: none;
  padding: 0;
  gap: 14px;
  display: flex;
  flex-direction: column;
`;

export const InfoKey = styled.span`
  display: block;
  font-weight: 600;
  font-size: 12px;
`;

export const InfoValue = styled.span`
  font-size: 14px;
`;
