import React, { useState } from 'react';
import { InputLabel, MenuItem, FormControl, ListItemIcon, ListItemText } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Iconify from 'components/common/Iconify/Iconify';
import { SelectCategoryProps } from './SelectCategory.types';

const categoryList = [
  { label: '전체', icon: <Iconify icon="fluent:grid-circles-24-regular" /> },
  { label: '전자기기', icon: <Iconify icon="ph:laptop" /> },
  { label: '문화생활', icon: <Iconify icon="fluent-mdl2:my-movies-t-v" /> },
  { label: '여행/티켓', icon: <Iconify icon="ph:airplane" /> },
  { label: '헬스/건강식품', icon: <Iconify icon="solar:heart-pulse-2-broken" /> },
  { label: '문구/오피스', icon: <Iconify icon="ph:pencil" /> },
  { label: '기타', icon: <Iconify icon="ph:dots-three-circle" /> },
];
const SelectCategory: React.FC<SelectCategoryProps> = ({ onCategoryChange }) => {
  // HomeView로 전달할 카테고리 상태
  const [category, setCategory] = useState<string>('전체');

  const handleSelect = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value;
    setCategory(selectedValue);

    // 전체 선택 시 ''으로 변환해서 API에 전달
    const apiValue = selectedValue === '전체' ? '' : selectedValue;
    onCategoryChange(apiValue);
  };

  return (
    <FormControl sx={{ width: '140px', height: '62px' }} size="small">
      <InputLabel id="demo-select-small-label" style={{ color: 'black' }}>
        {category === '' && '카테고리'}
      </InputLabel>

      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={category}
        label="Category"
        onChange={handleSelect}
        sx={{
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
        }}
        renderValue={(selected) => <ListItemText primary={selected} />}
      >
        {categoryList.map((category) => (
          <MenuItem key={category.label} value={category.label}>
            <ListItemIcon>{category.icon}</ListItemIcon>
            <ListItemText primary={category.label} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectCategory;
