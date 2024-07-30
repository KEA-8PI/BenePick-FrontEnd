import styled from '@emotion/styled';
import colors from 'theme/variableColors';

// Home & WishList
export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap; // flexbox의 width를 넘어가게 되면 여러 행에 나열
  width: 100%;
`;

export const Card = styled.div`
  width: 25%;
  padding: 1%;
  box-sizing: border-box;
  height: 300px;
  margin-bottom: 10%;
`;

export const CardContent = styled.div`
  padding: 10px;
`;

export const CardBoldFont = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  display: -webkit-box; /* 플렉스 박스로 설정 */
  -webkit-box-orient: vertical; /* 수직으로 쌓기 */
  -webkit-line-clamp: 2; /* 2줄로 제한 */
  overflow: hidden; /* 넘친 내용 숨김 */
  text-overflow: ellipsis; /* ...으로 표시 */
  white-space: normal; /* 여러 줄 허용 */
`;

export const CardLightFont = styled.div`
  font-size: 13px;
  color: ${colors.grey01};
`;
