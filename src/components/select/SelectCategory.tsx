import { useState } from 'react';
import { InputLabel, MenuItem, FormControl, ListItemIcon, ListItemText } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Iconify from 'components/common/Iconify/Iconify';

const SelectCategory = () => {
  const categoryList = [
    { label: '전체', icon: <Iconify icon="material-symbols:grid-view-outline" /> },
    { label: '전자기기', icon: <Iconify icon="material-symbols:laptop-mac-outline" /> },
    { label: '문화생활', icon: <Iconify icon="mdi:movie-open-outline" /> },
    { label: '여행/티켓', icon: <Iconify icon="ph:airplane-bold" /> },
    { label: '헬스/건강식품', icon: <Iconify icon="mage:heart-health" /> },
    { label: '문구/오피스', icon: <Iconify icon="ph:pencil-duotone" /> },
    { label: '기타', icon: <Iconify icon="material-symbols:pending-outline" /> },
  ];
  const [category, setCategory] = useState('전체');

  const handleSelect = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
    // 카테고리 선택시 필터링 api 호출
  };

  return (
    <FormControl sx={{ width: '140px', height: '55px' }} size="small">
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
        inputProps={{
          MenuProps: {
            disableScrollLock: true,
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
