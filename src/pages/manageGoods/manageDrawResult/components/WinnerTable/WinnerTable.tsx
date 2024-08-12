import { Card, Table, TableBody, TableContainer, TablePagination } from '@mui/material';
import TableHeader from 'components/CustomTable/TableHeader';
import { useState } from 'react';
import WinnerTableRow from './WinnerTableRow';

const WinnerTable = ({
  rowData,
  setRowData,
  headList,
  drawIdList,
}: {
  rowData: { [key: string]: string | number }[];
  setRowData: React.Dispatch<React.SetStateAction<{ [key: string]: string | number }[]>>;
  headList: { [key: string]: string }[];
  drawIdList?: number[];
}) => {
  return (
    <Card sx={{ borderRadius: '10px' }}>
      <TableContainer sx={{ overflow: 'unset' }}>
        <Table sx={{ minWidth: 800 }}>
          <TableHeader
            headLabel={headList.map((head) => {
              const key = Object.keys(head)[0];
              return { id: head[key], label: key };
            })}
          />
          <TableBody>
            {rowData.map((row, index) => (
              <WinnerTableRow
                key={index}
                index={index}
                columns={headList.map((head) => {
                  const key = Object.keys(head)[0];
                  return { id: head[key], label: row[head[key] as keyof typeof row] };
                })}
                propsId={drawIdList[index]}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default WinnerTable;
