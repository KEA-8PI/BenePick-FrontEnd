export interface CustomCardData {
  id: number; // 상품 ID
  image?: string;
  name?: string;
  category: string;
  amounts: number;
  raffleStartAt: Date;
  raffleEndAt: Date;
  count: number;
  price: number;
  discountPrice: number;
  description?: string;
  children?: React.ReactNode;
}

export interface CustomCardProps {
  info: CustomCardData;
  goodsStatus: string;
  style?: React.CSSProperties; // 스타일 속성 추가
}

export interface HomeCardPageProps {
  goodsStatus: string;
}
