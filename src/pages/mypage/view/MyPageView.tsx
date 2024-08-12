import { useState } from 'react';
import * as S from 'components/common/Components.styles';
import CustomTab from 'components/tab/CustomTab';
import MemberInfoPage from './MemberInfoPage';
import MyRaffleListPage from './MyRaffleListPage';

const TabData = [
  { label: '사원 정보', content: <MemberInfoPage /> },
  { label: '응모 내역', content: <MyRaffleListPage /> },
];

const MyPageView = () => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (filter: string) => {
    setFilter(filter);
    console.log('HomeView filter:', filter);
  };

  return (
    <S.Wrapper style={{ height: 'auto' }}>
      <CustomTab tabs={TabData} onFilterChange={handleFilterChange} />
    </S.Wrapper>
  );
};

export default MyPageView;
