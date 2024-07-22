import React from 'react';

import { InputLabel, MenuItem, FormControl, ListItemIcon, ListItemText } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {
  GridViewOutlined,
  LaptopMacOutlined,
  MovieCreationOutlined,
  AirplanemodeActiveOutlined,
  MonitorHeartOutlined,
  CreateOutlined,
  PendingOutlined,
} from '@mui/icons-material';

const SelectCategory = () => {
  const categoryList = [
    { label: '전체', icon: <GridViewOutlined /> },
    { label: '전자기기', icon: <LaptopMacOutlined /> },
    { label: '문화생활', icon: <MovieCreationOutlined /> },
    { label: '여행/티켓', icon: <AirplanemodeActiveOutlined /> },
    { label: '헬스/건강식품', icon: <MonitorHeartOutlined /> },
    { label: '문구/오피스', icon: <CreateOutlined /> },
    { label: '기타', icon: <PendingOutlined /> },
  ];
  const [category, setCategory] = React.useState('');
  const handleSelect = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  return (
    <FormControl sx={{ width: '140px', height: '62px' }} size="small">
      <InputLabel id="demo-select-small-label" style={{ color: 'black' }}>
        카테고리
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
