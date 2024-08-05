import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import colors from 'theme/variableColors';
import { TableRowProps } from './CustomTable.types';
import { ColorBox } from 'components/common/Components.styles';
import { ConvertResponse } from 'utils/ConvertResponse';

const ResultColor = {
  WINNER: colors.mint,
  NON_WINNER: colors.pinkGrey,
  WAITLIST: colors.lemon,
  CANCEL: colors.pinkGrey,
  NO_SHOW: colors.buttonPink,
};

const CustomTableRow: React.FC<TableRowProps> = ({ columns, index }) => {
  return (
    <TableRow hover tabIndex={-1} sx={{ '& .MuiTableCell-root': { paddingTop: '10px', paddingBottom: '10px' } }}>
      <TableCell>{index + 1}</TableCell>
      {columns.map((column) => (
        // label이 상품일 시 상품명을 클릭하면 상품 상세 페이지로 이동하게 추가
        <TableCell key={column.label} align={'center'}>
          {column.id === 'change' || column.id === 'result' || column.id === 'status' ? (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {column.id === 'change' && (
                <ColorBox color={column.label[0] === '-' ? colors.buttonPink : colors.mint}>{column.label}</ColorBox>
              )}
              {column.id === 'result' && (
                <ColorBox color={ResultColor[column.label]}>{ConvertResponse(column.label.toString())}</ColorBox>
              )}
              {column.id === 'status' && <ColorBox color={colors.lemon}>{column.label}순위</ColorBox>}
            </div>
          ) : (
            column.label
          )}
        </TableCell>
      ))}
    </TableRow>
  );
};

export default CustomTableRow;
