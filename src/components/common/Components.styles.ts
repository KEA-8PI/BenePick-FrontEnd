import styled from '@emotion/styled';
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

// // Home & WishList
// export const CardContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap; // flexbox의 width를 넘어가게 되면 여러 행에 나열
//   width: 100%;
// `;

// export const Card = styled.div`
//   width: 25%;
//   padding: 1%;
//   box-sizing: border-box;
//   height: 300px;
//   margin-bottom: 10%;
// `;

// export const CardContent = styled.div`
//   padding: 10px;
// `;

// export const CardBoldFont = styled.div`
//   font-size: 14px;
//   font-weight: bold;
//   margin-bottom: 10px;
//   display: -webkit-box; /* 플렉스 박스로 설정 */
//   -webkit-box-orient: vertical; /* 수직으로 쌓기 */
//   -webkit-line-clamp: 2; /* 2줄로 제한 */
//   overflow: hidden; /* 넘친 내용 숨김 */
//   text-overflow: ellipsis; /* ...으로 표시 */
//   white-space: normal; /* 여러 줄 허용 */
// `;

// export const CardLightFont = styled.div`
//   font-size: 13px;
//   color: ${colors.grey01};
// `;

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
