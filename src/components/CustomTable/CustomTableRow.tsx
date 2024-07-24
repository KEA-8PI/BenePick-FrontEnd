import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import colors from 'theme/variableColors';
import { TableRowProps } from './CustomTable.types';
import { ColorBox } from 'components/common/Components.styles';

const CustomTableRow: React.FC<TableRowProps> = ({ columns, index, totalNum }) => {
  return (
    <TableRow hover tabIndex={-1} sx={{ '& .MuiTableCell-root': { paddingTop: '10px', paddingBottom: '10px' } }}>
      <TableCell>{totalNum - index}</TableCell>
      {columns.map((column) => (
        // label이 상품일 시 상품명을 클릭하면 상품 상세 페이지로 이동하게 추가
        <TableCell key={column.label} sx={{ width: '25%' }} align={'center'}>
          {column.id === 'change' ? <ColorBox color={colors.buttonPink}>{column.label}</ColorBox> : column.label}
        </TableCell>
      ))}
    </TableRow>
  );
};

export default CustomTableRow;
