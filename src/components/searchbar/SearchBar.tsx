import React, { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchBar = () => {
  const [search, setSearch] = useState('');

  return (
    <OutlinedInput
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="검색어를 입력하세요"
      sx={{
        marginLeft: '50px',
        marginBottom: '20px',
        paddingLeft: '26px',
        width: '671px',
        height: '62px',
        borderRadius: 50,
        border: '1px solid #F65351',
      }}
      endAdornment={
        <InputAdornment position="end">
          <SearchOutlinedIcon sx={{ width: 30, height: 30, color: 'text.disabled' }} />
        </InputAdornment>
      }
    />
  );
};

export default SearchBar;
