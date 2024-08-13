import { useState } from 'react';
import { InputLabel, MenuItem, FormControl, ListItemIcon, ListItemText } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Iconify from 'components/common/Iconify/Iconify';

const SelectCategory = ({ setCategory }) => {
  const categoryList = [
    { label: '전체', icon: <Iconify icon="material-symbols:grid-view-outline" /> },
    { label: '전자기기', icon: <Iconify icon="material-symbols:laptop-mac-outline" /> },
    { label: '문화생활', icon: <Iconify icon="mdi:movie-open-outline" /> },
    { label: '여행/티켓', icon: <Iconify icon="ph:airplane-bold" /> },
    { label: '헬스/건강식품', icon: <Iconify icon="mage:heart-health" /> },
    { label: '문구/오피스', icon: <Iconify icon="ph:pencil-duotone" /> },
    { label: '기타', icon: <Iconify icon="material-symbols:pending-outline" /> },
  ];
  const [selectCategory, setSelectcategory] = useState('전체');

  const handleSelect = (event: SelectChangeEvent) => {
    setSelectcategory(event.target.value);
  };

  setCategory(selectCategory);
  console.log('선택된 카테고리:', selectCategory);

  return (
    <FormControl sx={{ width: '140px', height: '55px' }} size="small">
      <InputLabel id="demo-select-small-label" style={{ color: 'black' }}>
        {selectCategory === '' && '카테고리'}
      </InputLabel>

      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={selectCategory}
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
