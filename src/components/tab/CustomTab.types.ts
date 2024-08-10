// Tabs와 TabPanel을 구성하는 데이터를 props로 받아서 렌더링하는 방식
export interface TabData {
  label: string;
  content: React.ReactNode;
  tabTitle?: string; // 탭 하단에 제목을 표시하기 위한 prop 추가
}

export interface TabsProps {
  tabs: TabData[];
  showTabTitle?: boolean; // HomeFilter 표시 여부를 결정하는 prop 추가
  showFilter?: boolean;
  callGetAPI?: Array<(sortBy: string) => Promise<any>>; // 인자를 받는 함수 타입으로 수정 (sortBy: 이중 필터 구현 시 사용)
  setState?: React.Dispatch<React.SetStateAction<any>>[];
  dtoName?: string[];
}

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  showTabTitle?: boolean; // HomeFilter 표시 여부를 결정하는 prop 추가
  showFilter?: boolean;
  title?: string;
  onFilterChange?: (filter: string) => void;
  selectedFilter?: string;
}

// 탭 하단에 제목 부분
export interface TabTitleProps {
  title: string;
}
