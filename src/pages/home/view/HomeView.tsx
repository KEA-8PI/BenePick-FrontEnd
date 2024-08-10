import { useState, useEffect } from 'react';
import * as S from 'components/common/Components.styles';
import SelectCategory from 'components/selectCategory/SelectCategory';
import SearchBar from 'components/searchbar/SearchBar';
import CustomTab from 'components/tab/CustomTab';
import HomeCardList from 'pages/home/components/HomeCardList';
import { GetSearchGoods } from 'api/goods.api';

const HomeView = () => {
  // CustomTabTitle 표시 여부를 조정할 수 있는 로직을 추가
  const showTabTitle = true; // 조건에 따라 동적으로 결정
  const showFilter = true; // 조건에 따라 동적으로 결정

  const [data, setData] = useState([]);
  const [category, setCategory] = useState('');
  // const [search, setSearch] = useState('');

  const handleCategoryChange = (selectedCategory: string) => {
    setCategory(selectedCategory);
    console.log('선택된 카테고리:', selectedCategory);
  };

  // const handleSearchChange = (term: string) => {
  //   setSearch(term);
  // };

  const tabData = [
    { label: '진행중', content: <HomeCardList data={data} goodsStatus="진행" />, tabTitle: `총 ${data.length}개` },
    {
      label: '응모 예정',
      content: <HomeCardList data={data} goodsStatus="예정" />,
      tabTitle: `총 ${data.length}개`,
    },
    {
      label: '응모 종료',
      content: <HomeCardList data={data} goodsStatus="종료" />,
      tabTitle: `총 ${data.length}개`,
    },
  ];

  // 컴포넌트가 처음으로 렌더링될 때 API를 호출하도록 설정
  useEffect(() => {
    GetSearchGoods('PROGRESS', 0, 20, 'END')
      .then((res) => {
        const response = res.data.result.goodsSearchDTOList || [];
        setData(response);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <S.Wrapper>
        <S.Row>
          <SelectCategory onCategoryChange={handleCategoryChange} />
          <SearchBar />
        </S.Row>
        <CustomTab
          tabs={tabData}
          callGetAPI={[
            (sortBy) => GetSearchGoods('PROGRESS', 0, 20, sortBy),
            (sortBy) => GetSearchGoods('SCHEDULED', 0, 10, sortBy),
            (sortBy) => GetSearchGoods('COMPLETED', 2, 10, sortBy),
          ]}
          setState={[setData, setData, setData]}
          dtoName={['goodsSearchDTOList', 'goodsSearchDTOList', 'goodsSearchDTOList']}
          showTabTitle={showTabTitle}
          showFilter={showFilter}
        />
      </S.Wrapper>
    </>
  );
};

export default HomeView;
