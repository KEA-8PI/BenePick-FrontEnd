import React from 'react';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import { SelectTableRowProps } from './CustomSelectTable.types';
import { IconButton } from '@mui/material';
import Iconify from 'components/common/Iconify/Iconify';
import colors from 'theme/variableColors';

const UserTableRow: React.FC<SelectTableRowProps> = ({ selected, content, columns, handleClick, onRowClick }) => {
  return (
    <TableRow
      hover
      tabIndex={-1}
      role="checkbox"
      selected={selected}
      onClick={onRowClick}
      sx={{ '& .MuiTableCell-root': { paddingTop: '5px', paddingBottom: '5px' } }}
    >
      <TableCell padding="checkbox">
        <Checkbox
          disableRipple
          checked={selected}
          onChange={handleClick}
          sx={{
            '&.Mui-checked': {
              color: colors.primary,
            },
          }}
        />
      </TableCell>

      <TableCell sx={{ width: '25%' }}>{content}</TableCell>
      {columns.map((column) => (
        <TableCell key={column.label} sx={{ width: '25%' }}>
          {column.label}
        </TableCell>
      ))}
      <TableCell>
        <IconButton aria-label="modify" size="small">
          <Iconify icon="ph:pencil" width={20} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default UserTableRow;
