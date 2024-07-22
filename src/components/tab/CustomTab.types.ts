// Tabs와 TabPanel을 구성하는 데이터를 props로 받아서 렌더링하는 방식
export interface TabData {
  label: string;
  content: React.ReactNode;
}

export interface CustomTabsProps {
  tabs: TabData[];
}

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
