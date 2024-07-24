import * as S from 'components/common/Components.styles';
import SelectCategory from 'components/select/SelectCategory';
import SearchBar from 'components/searchbar/SearchBar';
import CustomTab from 'components/tab/CustomTab';
import HomeCardList from 'pages/home/components/HomeCardList';

const tabData = [
  { label: '진행중', content: <HomeCardList goodsStatus="진행" />, tabTitle: '총 123개' },
  { label: '응모 예정', content: <HomeCardList goodsStatus="예정" />, tabTitle: '총 123개' },
  { label: '응모 종료', content: <HomeCardList goodsStatus="종료" />, tabTitle: '총 123개' },
];

const HomeView = () => {
  // CustomTabTitle 표시 여부를 조정할 수 있는 로직을 추가
  const showTabTitle = true; // 조건에 따라 동적으로 결정
  const showFilter = true; // 조건에 따라 동적으로 결정

  return (
    <>
      <S.Wrapper>
        <S.Row>
          <SelectCategory />
          <SearchBar />
        </S.Row>
        <CustomTab tabs={tabData} showTabTitle={showTabTitle} showFilter={showFilter} />
      </S.Wrapper>
    </>
  );
};

export default HomeView;
