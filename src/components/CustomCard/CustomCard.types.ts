export interface CustomCardData {
  id: number; // 상품 ID
  image?: string;
  name?: string;
  category: string;
  amounts: string;
  raffleStartAt: Date;
  raffleEndAt: Date;
  applicant: string;
  price: number;
  discountPrice: number;
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
