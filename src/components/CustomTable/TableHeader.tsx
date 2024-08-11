import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';

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
            sx={{
              width: headCell.width,
              minWidth: headCell.minWidth,
              fontWeight: 'bold',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
