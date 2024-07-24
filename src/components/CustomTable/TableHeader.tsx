import React from 'react';
import Box from '@mui/material/Box';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';

import { visuallyHidden } from './utils';
import { TableHeadProps } from './CustomTable.types';
import colors from 'theme/variableColors';

const TableHeader: React.FC<TableHeadProps> = ({ headLabel }) => {
  return (
    <TableHead
      sx={{ bgcolor: colors.tableGrey, '& .MuiTableCell-root': { paddingTop: '10px', paddingBottom: '10px' } }}
    >
      <TableRow>
        <TableCell></TableCell>
        {headLabel.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align || 'center'}
            sx={{ width: headCell.width, minWidth: headCell.minWidth, fontWeight: 'bold' }}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
