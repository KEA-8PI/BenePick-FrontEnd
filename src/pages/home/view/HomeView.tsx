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
  const [keyword, setKeyword] = useState('');
  const [filter, setFilter] = useState('');

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
  // 카테고리와 키워드에 따라 API 호출
  useEffect(() => {
    GetSearchGoods('PROGRESS', 0, 20, 'END', keyword, category)
      .then((res) => {
        const response = res.data.result.goodsSearchDTOList || [];
        setData(response);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // 카테고리를 업데이트하는 함수
  const handleCategoryChange = (selectedCategory: string) => {
    setCategory(selectedCategory);
    console.log('선택된 카테고리:', selectedCategory);
  };

  // 검색어를 업데이트하는 함수
  const handleKeywordChange = (keyword: string) => {
    setKeyword(keyword);
    console.log('검색어:', keyword);
  };

  // 검색 결과를 업데이트하는 함수
  const handleSearchResult = (searchResult) => {
    setData(searchResult);
    console.log('검색 결과:', searchResult);
  };

  // HomeView 컴포넌트에서 filter 상태를 업데이트하는 함수
  const handleFilterChange = (filter: string) => {
    setFilter(filter);
  };

  return (
    <>
      <S.Wrapper>
        <S.Row>
          <SelectCategory onCategoryChange={handleCategoryChange} />
          {/* 검색 결과를 업데이트하는 함수 전달 */}
          <SearchBar
            data={data}
            category={category}
            onKeywordChange={handleKeywordChange}
            onSearchResult={handleSearchResult}
            filter={filter}
          />
        </S.Row>
        <CustomTab
          tabs={tabData}
          callGetAPI={[
            (sortBy) => GetSearchGoods('PROGRESS', 0, 20, sortBy, keyword, category),
            (sortBy) => GetSearchGoods('SCHEDULED', 0, 10, sortBy, keyword, category),
            (sortBy) => GetSearchGoods('COMPLETED', 0, 10, sortBy, keyword, category),
          ]}
          setState={[setData, setData, setData]}
          dtoName={['goodsSearchDTOList', 'goodsSearchDTOList', 'goodsSearchDTOList']}
          showTabTitle={showTabTitle}
          showFilter={showFilter}
          onFilterChange={handleFilterChange}
        />
      </S.Wrapper>
    </>
  );
};

export default HomeView;
