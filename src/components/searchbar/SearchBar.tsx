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
  const allGoodsStatus = data.map((item) => item.goodsStatus);
  // const allGoodsSortBy = data.map((item) => item.sortBy);
  const allGoodsSortBy = filter;

  useEffect(() => {
    if (query) {
      console.log('검색어:', query); // 검색어 출력
      onKeywordChange(query); // query 값을 HomeView로 전달
    }

    // GetSearchGoods(allGoodsStatus[0], 0, 20, allGoodsSortBy, search);
  }, [query, onKeywordChange, allGoodsStatus, allGoodsSortBy, search]);

  const handleSearchClick = async (event) => {
    if (event.key === 'Enter') {
      setQuery(search);

      try {
        const response = await GetSearchGoods(allGoodsStatus[0], 0, 20, allGoodsSortBy, search);
        console.log('검색 결과:', response.data.result);
        setFilteredData(response.data.result.goodsSearchDTOList);
        onSearchResult(response.data.result.goodsSearchDTOList || []);
      } catch (error) {
        console.error('Error during search:', error);
      }
    }
  };

  useEffect(() => {
    console.log('allGoodsStatus:', allGoodsStatus);
    console.log('allGoodsSortBy:', allGoodsSortBy);
    console.log('search: ', search);
    console.log('filteredData:', filteredData);
  }, [allGoodsStatus, allGoodsSortBy, search, filteredData]);

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
