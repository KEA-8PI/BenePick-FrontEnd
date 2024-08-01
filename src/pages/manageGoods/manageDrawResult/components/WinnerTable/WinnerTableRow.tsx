import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import colors from 'theme/variableColors';
import { TableRowProps } from 'components/CustomTable/CustomTable.types';
import { ColorBox } from 'components/common/Components.styles';

const ResultJson = {
  WINNER: '당첨',
  WAITLIST: '확정대기', // 확인 필요
  CANCEL: '취소',
  NO_SHOW: '노쇼',
};

const ResultColor = {
  당첨: colors.mint,
  확정대기: colors.purple,
  취소: colors.pinkGrey,
  노쇼: colors.buttonPink,
};

const changeResult = () => {
  // 팝오버
};

const WinnerTableRow: React.FC<TableRowProps> = ({ columns, index }) => {
  return (
    <TableRow hover tabIndex={-1} sx={{ '& .MuiTableCell-root': { paddingTop: '10px', paddingBottom: '10px' } }}>
      <TableCell>{index + 1}</TableCell>
      {columns.map((column) => (
        <TableCell key={column.label} align={'center'}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {column.id === 'status' ? (
              <ColorBox color={ResultColor[column.label]} onClick={() => changeResult()} style={{ cursor: 'pointer' }}>
                {column.label}
              </ColorBox>
            ) : (
              column.label
            )}
          </div>
        </TableCell>
      ))}
    </TableRow>
  );
};

export default WinnerTableRow;
