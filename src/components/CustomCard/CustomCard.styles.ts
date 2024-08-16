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
  height: 300px;
  padding: 1%;
  box-sizing: border-box;
  margin-bottom: 10%;
`;

export const CardContent = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; // 제목과 내용 사이 간격을 균일하게 분배
`;

export const CardBoldFont = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 20px;
  display: -webkit-box; /* 플렉스 박스로 설정 */
  -webkit-box-orient: vertical; /* 수직으로 쌓기 */
  -webkit-line-clamp: 2; /* 2줄로 제한 */
  text-overflow: ellipsis; /* ...으로 표시 */
  white-space: normal; /* 여러 줄 허용 */
  max-width: 100%; /* 최대 너비 */
  overflow: hidden;
  display: flex;
  align-items: start; /* 수직 중앙 정렬 */
  height: 34.5px; /* 두 줄의 높이로 설정 */
  line-height: 1.2; /* 줄 간격 설정 */
`;

export const GoodsTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 20px;
  display: -webkit-box; /* 플렉스 박스로 설정 */
  -webkit-box-orient: vertical; /* 수직으로 쌓기 */
  white-space: normal; /* 여러 줄 허용 */
  max-width: 100%; /* 최대 너비 */
  overflow: hidden;
  display: flex;
`;

export const CardLightFont = styled.div`
  font-size: 13px;
  color: ${colors.grey01};
`;
