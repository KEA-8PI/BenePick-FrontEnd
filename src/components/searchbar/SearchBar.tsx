import { useState, useEffect } from 'react';
import { OutlinedInput } from 'components/searchbar/SearchBar.styles';
import InputAdornment from '@mui/material/InputAdornment';
import { IconButton } from '@mui/material';
import Iconify from 'components/common/Iconify/Iconify';
import { GetSearchGoods } from 'api/goods.api';

const SearchBar = ({ data, onKeywordChange, onSearchResult, filter }) => {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [allGoodsStatus, setAllGoodsStatus] = useState([]);
  const allGoodsSortBy = filter;

  useEffect(() => {
    // data가 변경될 때 allGoodsStatus를 업데이트합니다.
    setAllGoodsStatus(data.map((item) => item.goodsStatus));
  }, [data]);

  useEffect(() => {
    // query가 변경되면 HomeView로 검색어를 전달합니다.
    if (query !== '') {
      onKeywordChange(query);
    } else {
      onKeywordChange('');
    }
  }, [query, onKeywordChange]);

  const handleSearchClick = async (event) => {
    if (event.key === 'Enter') {
      if (search.trim() === '') {
        setQuery(''); // search가 빈 값일 때 query 초기화
        onSearchResult([]); // 빈 검색 결과를 전달
        fetchInitialData(); // 초기 데이터를 가져와 화면에 표시
      } else {
        setQuery(search);

        // 데이터 상태가 업데이트된 후 API 호출
        const fetchSearchResults = async () => {
          try {
            const response = await GetSearchGoods(allGoodsStatus[0], 0, 20, allGoodsSortBy, search);
            console.log('검색 결과:', response.data.result);
            setFilteredData(response.data.result.goodsSearchDTOList);
            onSearchResult(response.data.result.goodsSearchDTOList || []);
          } catch (error) {
            console.error('Error during search:', error);
          }
        };

        // 모든 상태가 업데이트된 후 검색 결과를 가져옵니다.
        fetchSearchResults();

        // try {
        //   const response = await GetSearchGoods(allGoodsStatus[0], 0, 20, allGoodsSortBy, search);
        //   console.log('검색 결과:', response.data.result);
        //   setFilteredData(response.data.result.goodsSearchDTOList);
        //   onSearchResult(response.data.result.goodsSearchDTOList || []);
        // } catch (error) {
        //   console.error('Error during search:', error);
        // }
      }
    }
  };

  const fetchInitialData = async () => {
    try {
      const response = await GetSearchGoods(allGoodsStatus[0], 0, 20, allGoodsSortBy, '');
      const goodsData = response.data.result.goodsSearchDTOList;
      setFilteredData(goodsData);
      onSearchResult(goodsData || []); // 데이터를 HomeView로 전달
    } catch (error) {
      console.error('Error fetching initial data:', error);
    }
  };

  // useEffect(() => {
  //   console.log('allGoodsStatus:', allGoodsStatus);
  //   console.log('allGoodsSortBy:', allGoodsSortBy);
  //   console.log('search: ', search);
  //   console.log('filteredData:', filteredData);
  // }, [allGoodsStatus, allGoodsSortBy, search, filteredData]);

  return (
    <OutlinedInput
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={handleSearchClick}
      placeholder="검색어를 입력하세요"
      style={{
        marginBottom: '20px',
        paddingLeft: '25px',
        width: '671px',
        height: '50px',
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" onClick={() => setQuery(search)}>
              <Iconify icon="eva:search-fill" sx={{ width: 25, height: 25, color: 'black' }} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
