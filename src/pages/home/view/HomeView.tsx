import { useState, useEffect } from 'react';
import * as S from 'components/common/Components.styles';
import SelectCategory from 'components/selectCategory/SelectCategory';
import SearchBar from 'components/searchbar/SearchBar';
import CustomTab from 'components/tab/CustomTab';
import HomeCardList from 'pages/home/components/HomeCardList';
import { GetSearchGoods } from 'api/goods.api';
import { useInView } from 'react-intersection-observer';

const HomeView = () => {
  // CustomTabTitle 표시 여부를 조정할 수 있는 로직을 추가
  const showTabTitle = true; // 조건에 따라 동적으로 결정
  const showFilter = true; // 조건에 따라 동적으로 결정

  // 탭별 데이터 및 상태
  const [progressData, setProgressData] = useState([]);
  const [scheduledData, setScheduledData] = useState([]);
  const [completedData, setCompletedData] = useState([]);

  // 탭별 페이지 상태
  const [progressPage, setProgressPage] = useState(0);
  const [scheduledPage, setScheduledPage] = useState(0);
  const [completedPage, setCompletedPage] = useState(0);

  // 탭별 totalCnt 상태
  const [progressTotalCnt, setProgressTotalCnt] = useState(0);
  const [scheduledTotalCnt, setScheduledTotalCnt] = useState(0);
  const [completedTotalCnt, setCompletedTotalCnt] = useState(0);

  // 현재 탭 상태
  const [currentTab, setCurrentTab] = useState(0);

  // 카테고리, 키워드, 필터 상태
  const [category, setCategory] = useState('');
  const [keyword, setKeyword] = useState('');
  const [filter, setFilter] = useState('END');

  // inView 상태
  const [progressRef, progressInView] = useInView();
  const [scheduledRef, scheduledInView] = useInView();
  const [completedRef, completedInView] = useInView();

  const tabData = [
    {
      label: '진행중',
      content: (
        <>
          <HomeCardList data={progressData} goodsStatus="진행" />
          <div ref={progressRef} />
        </>
      ),
      tabTitle: `총 ${progressTotalCnt}개`,
    },
    {
      label: '응모 예정',
      content: (
        <>
          <HomeCardList data={scheduledData} goodsStatus="예정" />
          <div ref={scheduledRef} />
        </>
      ),
      tabTitle: `총 ${scheduledTotalCnt}개`,
    },
    {
      label: '응모 종료',
      content: (
        <>
          <HomeCardList data={completedData} goodsStatus="종료" />
          <div ref={completedRef} />
        </>
      ),
      tabTitle: `총 ${completedTotalCnt}개`,
    },
  ];

  // 컴포넌트가 처음으로 렌더링될 때 API를 호출하도록 설정
  // 카테고리와 키워드에 따라 API 호출
  const fetchGoods = (goodsStatus, page, setData, setTotalCnt) => {
    GetSearchGoods(goodsStatus, page, 16, filter, keyword, category)
      .then((res) => {
        const response = res.data.result.goodsSearchDTOList || [];
        const totalCnt = res.data.result.totalCnt || 0;

        setTotalCnt(totalCnt);
        setData((prevData) => {
          // 새로운 데이터에서 중복된 항목을 제거
          const newData = response.filter(
            (newItem) => !prevData.some((existingItem) => existingItem.id === newItem.id),
          );
          return [...prevData, ...newData];
        });
      })
      .catch((error) => {
        console.error(`Error fetching ${goodsStatus} data:`, error);
      });
  };

  // 무한 스크롤을 통해 데이터를 추가로 불러오는 로직
  useEffect(() => {
    if (progressInView) {
      fetchGoods('PROGRESS', progressPage, setProgressData, setProgressTotalCnt);
      setProgressPage((prevPage) => prevPage + 1);
    }

    if (scheduledInView) {
      fetchGoods('SCHEDULED', scheduledPage, setScheduledData, setScheduledTotalCnt);
      setScheduledPage((prevPage) => prevPage + 1);
    }

    if (completedInView) {
      fetchGoods('COMPLETED', completedPage, setCompletedData, setCompletedTotalCnt);
      setCompletedPage((prevPage) => prevPage + 1);
    }
  }, [progressInView, scheduledInView, completedInView]);

  // 카테고리, 키워드, 필터가 변경될 때마다 데이터 초기화 및 새로 불러오기
  useEffect(() => {
    setProgressPage(0);
    setScheduledPage(0);
    setCompletedPage(0);

    setProgressData([]);
    setScheduledData([]);
    setCompletedData([]);

    fetchGoods('PROGRESS', 0, setProgressData, setProgressTotalCnt);
    fetchGoods('SCHEDULED', 0, setScheduledData, setScheduledTotalCnt);
    fetchGoods('COMPLETED', 0, setCompletedData, setCompletedTotalCnt);
  }, [category, keyword, filter]);

  // 탭 변경 시 데이터 초기화 및 페이지 번호 초기화
  useEffect(() => {
    switch (currentTab) {
      case 0:
        setProgressPage(0);
        setProgressData([]);
        fetchGoods('PROGRESS', 0, setProgressData, setProgressTotalCnt);
        break;
      case 1:
        setScheduledPage(0);
        setScheduledData([]);
        fetchGoods('SCHEDULED', 0, setScheduledData, setScheduledTotalCnt);
        break;
      case 2:
        setCompletedPage(0);
        setCompletedData([]);
        fetchGoods('COMPLETED', 0, setCompletedData, setCompletedTotalCnt);
        break;
      default:
        break;
    }
  }, [currentTab]);

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
    setProgressData(searchResult);
    // 검색 결과가 1개일 때 검색어 업데이트 방지
    if (searchResult.length !== 1) {
      setKeyword('');
    }
    console.log('검색 결과:', searchResult);
  };

  // HomeView 컴포넌트에서 filter 상태를 업데이트하는 함수
  const handleFilterChange = (selectedFilter: string) => {
    setFilter(selectedFilter);
  };

  return (
    <>
      <S.Wrapper>
        <S.Row>
          <SelectCategory onCategoryChange={handleCategoryChange} />
          {/* 검색 결과를 업데이트하는 함수 전달 */}
          <SearchBar
            data={progressData}
            category={category}
            onKeywordChange={handleKeywordChange}
            onSearchResult={handleSearchResult}
            filter={filter}
          />
        </S.Row>
        <CustomTab
          tabs={tabData}
          showTabTitle={showTabTitle}
          showFilter={showFilter}
          onFilterChange={handleFilterChange}
        />
      </S.Wrapper>
    </>
  );
};

export default HomeView;
