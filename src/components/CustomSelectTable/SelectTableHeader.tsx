import React from 'react';
import Box from '@mui/material/Box';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';

import { visuallyHidden } from '../CustomTable/utils';
import { SelectTableHeadProps } from './CustomSelectTable.types';
import colors from 'theme/variableColors';

const SelectTableHeader: React.FC<SelectTableHeadProps> = ({ rowCount, headLabel, numSelected, onSelectAllClick }) => {
  return (
    <TableHead sx={{ bgcolor: colors.tableGrey, '& .MuiTableCell-root': { paddingTop: '7px', paddingBottom: '7px' } }}>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            sx={{
              '&.MuiCheckbox-indeterminate': {
                color: colors.primary,
              },
              '&.Mui-checked': {
                color: colors.primary,
              },
            }}
          />
        </TableCell>

        {headLabel.map((headCell) => (
          <TableCell key={headCell.id} align={'center'} sx={{ width: headCell.width, minWidth: headCell.minWidth }}>
            {headCell.label}
          </TableCell>
        ))}
        <TableCell> </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default SelectTableHeader;
