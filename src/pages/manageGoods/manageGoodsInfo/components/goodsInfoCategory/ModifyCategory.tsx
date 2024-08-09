import React, { useEffect, useState } from 'react';

import { MenuItem, FormControl, ListItemIcon, ListItemText } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Iconify from 'components/common/Iconify/Iconify';
import { GoodsInfoData } from '../../goodsInfo/GoodsInfo.types';

const categoryList = [
  { label: '전자기기', icon: <Iconify icon="ph:laptop" /> },
  { label: '문화생활', icon: <Iconify icon="fluent-mdl2:my-movies-t-v" /> },
  { label: '여행/티켓', icon: <Iconify icon="ph:airplane" /> },
  { label: '헬스/건강식품', icon: <Iconify icon="solar:heart-pulse-2-broken" /> },
  { label: '문구/오피스', icon: <Iconify icon="ph:pencil" /> },
  { label: '기타', icon: <Iconify icon="ph:dots-three-circle" /> },
];

const ModifyCategory = ({
  category,
  setGoodsInfo,
}: {
  category: string;
  setGoodsInfo: React.Dispatch<React.SetStateAction<GoodsInfoData>>;
}) => {
  const handleSelect = (event: SelectChangeEvent) => {
    setGoodsInfo((prev) => ({ ...prev, category: event.target.value }));
  };

  return (
    <FormControl sx={{ width: '140px' }} size="small">
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={category || '전자기기'}
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
