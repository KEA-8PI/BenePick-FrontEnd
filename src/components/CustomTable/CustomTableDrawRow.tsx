import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { TableRowProps } from './CustomTable.types';
import { convertResponse } from 'utils/ConvertResponse';

const CustomTableDrawRow: React.FC<TableRowProps> = ({ columns, index }) => {
  return (
    <TableRow hover tabIndex={-1} sx={{ '& .MuiTableCell-root': { paddingTop: '10px', paddingBottom: '10px' } }}>
      <TableCell>{index + 1}</TableCell>
      {columns.map((column, idx) => (
        <TableCell key={idx} align={'center'}>
          {column.id === 'status' ? <span>{convertResponse(column.label?.toString() || '')}</span> : column.label}
        </TableCell>
      ))}
    </TableRow>
  );
};

export default CustomTableDrawRow;
