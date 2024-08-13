export interface CustomCardData {
  id: number; // 상품 ID
  image?: string;
  name?: string;
  category: string;
  amounts: number;
  raffleStartAt: string;
  raffleEndAt: string;
  count: number;
  price: number;
  discountPrice: number;
  description?: string;
  goodsStatus: string;
  wishlist?: boolean;
  children?: React.ReactNode;
}

export interface CustomCardProps {
  info: CustomCardData;
  style?: React.CSSProperties;
}

export interface HomeCardPageProps {
  goodsStatus: string;
  data: CustomCardData[];
}
