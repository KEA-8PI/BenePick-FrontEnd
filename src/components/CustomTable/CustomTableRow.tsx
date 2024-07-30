import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import colors from 'theme/variableColors';
import { TableRowProps } from './CustomTable.types';
import { ColorBox } from 'components/common/Components.styles';

const ResultJson = {
  WINNING: '당첨',
  WAITLIST: '대기',
  CANCEL: '취소',
  NO_SHOW: '노쇼',
};

const ResultColor = {
  당첨: colors.mint,
  대기: colors.lemon,
  취소: colors.pinkGrey,
  노쇼: colors.buttonPink,
};

const CustomTableRow: React.FC<TableRowProps> = ({ columns, index, totalNum }) => {
  return (
    <TableRow hover tabIndex={-1} sx={{ '& .MuiTableCell-root': { paddingTop: '10px', paddingBottom: '10px' } }}>
      <TableCell>{totalNum - index}</TableCell>
      {columns.map((column) => (
        // label이 상품일 시 상품명을 클릭하면 상품 상세 페이지로 이동하게 추가
        <TableCell key={column.label} align={'center'}>
          {column.id === 'change' || column.id === 'result' ? (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {column.id === 'change' ? (
                <ColorBox color={column.label[0] === '-' ? colors.buttonPink : colors.mint}>{column.label}</ColorBox>
              ) : (
                <ColorBox color={ResultColor[column.label]}>{column.label}</ColorBox>
              )}
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
