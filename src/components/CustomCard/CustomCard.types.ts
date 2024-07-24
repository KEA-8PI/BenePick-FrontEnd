export interface CustomCardData {
  image?: string;
  name?: string;
  category: string;
  amounts: string;
  raffleStartAt: Date;
  raffleEndAt: Date;
  applicant: string;
  children?: React.ReactNode;
}

export interface CustomCardProps {
  info: CustomCardData;
  goodsStatus: string;
}

export interface HomeCardPageProps {
  goodsStatus: string;
}
