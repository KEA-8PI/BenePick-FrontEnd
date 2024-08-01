import React, { useState } from 'react';
import { OutlinedInput } from 'components/searchbar/SearchBar.styles';
import InputAdornment from '@mui/material/InputAdornment';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { IconButton } from '@mui/material';
import Iconify from 'components/common/Iconify/Iconify';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  return (
    <OutlinedInput
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          setQuery(search);
        }
      }}
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
