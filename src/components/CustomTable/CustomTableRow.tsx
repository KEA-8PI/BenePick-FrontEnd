import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import colors from 'theme/variableColors';
import { TableRowProps } from './CustomTable.types';
import { ColorBox } from 'components/common/Components.styles';
import { convertResponse } from 'utils/ConvertResponse';
import { deleteDateT } from 'pages/manageGoods/utils/formatData';

const ResultColor = {
  WINNER: colors.mint,
  NON_WINNER: colors.pinkGrey,
  WAITLIST: colors.lemon,
  CANCEL: colors.pinkGrey,
  NO_SHOW: colors.buttonPink,
};

const CustomTableRow: React.FC<TableRowProps> = ({ columns, index, sequence, propsId }) => {
  return (
    <TableRow hover tabIndex={-1} sx={{ '& .MuiTableCell-root': { paddingTop: '10px', paddingBottom: '10px' } }}>
      <TableCell>{index + 1}</TableCell>
      {columns.map((column) => (
        <TableCell key={column.label} align={'center'}>
          {column.id === 'penaltyCount' ||
          column.id === 'pointChange' ||
          column.id === 'drawStatus' ||
          column.id === 'status' ||
          column.id === 'createdAt' ||
          column.id === 'goodsName' ||
          column.id === 'rafflesAt' ? (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {(column.id === 'penaltyCount' || column.id === 'pointChange') && (
                <ColorBox color={column.label?.toString().startsWith('-') ? colors.buttonPink : colors.mint}>
                  {column.label?.toString().startsWith('-') ? column.label : `+${column.label}`}
                </ColorBox>
              )}
              {column.id === 'drawStatus' && (
                <ColorBox color={ResultColor[column.label]}>
                  {convertResponse(column.label?.toString() || '')}
                  {column.label === 'WAITLIST' && ` ${sequence}순위`}
                </ColorBox>
              )}
              {column.id === 'status' && <ColorBox color={colors.lemon}>{column.label}순위</ColorBox>}
              {(column.id === 'rafflesAt' || column.id === 'createdAt') &&
                deleteDateT(column.label?.toString() || '', false)}
              {column.id === 'goodsName' && (
                <div
                  style={{
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    window.location.href = `/goods/${propsId}`;
                  }}
                >
                  {column.label}
                </div>
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
