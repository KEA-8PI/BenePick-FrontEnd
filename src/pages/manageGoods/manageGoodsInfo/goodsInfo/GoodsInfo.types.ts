export interface GoodsInfoData {
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
  description: string;
  goodsStatus: string;
}
