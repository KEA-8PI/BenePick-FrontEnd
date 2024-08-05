import React from 'react';

import { InputLabel, MenuItem, FormControl, ListItemIcon, ListItemText } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Iconify from 'components/common/Iconify/Iconify';

const categoryList = [
  ,
  { label: '전자기기', icon: <Iconify icon="ph:laptop" /> },
  { label: '문화생활', icon: <Iconify icon="fluent-mdl2:my-movies-t-v" /> },
  { label: '여행/티켓', icon: <Iconify icon="ph:airplane" /> },
  { label: '헬스/건강식품', icon: <Iconify icon="solar:heart-pulse-2-broken" /> },
  { label: '문구/오피스', icon: <Iconify icon="ph:pencil" /> },
  { label: '기타', icon: <Iconify icon="ph:dots-three-circle" /> },
];
const ModifyCategory = ({
  category,
  setCategory,
}: {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleSelect = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  return (
    <FormControl sx={{ width: '140px' }} size="small">
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

export default ModifyCategory;
