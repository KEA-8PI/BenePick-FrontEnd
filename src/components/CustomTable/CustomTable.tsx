import { Card, Table, TableBody, TableContainer, TablePagination } from '@mui/material';
import TableHeader from './TableHeader';
import { useState } from 'react';
import SelectTableRow from './CustomTableRow';

const CustomSelectTable = ({ headList, isPaging }: { headList: { [key: string]: string }[]; isPaging?: boolean }) => {
  const [rowData, setRowData] = useState([
    { date: '2021-10-15', change: '-50', content: 'This is a test1', totalPoint: 950 },
    { date: '2021-10-19', change: '+50', content: 'This is a test2', totalPoint: 1000 },
    { date: '2021-10-10', change: '+500', content: 'This is a test3', totalPoint: 1000 },
  ]);
  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

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
              <SelectTableRow
                key={row.content}
                index={index}
                totalNum={rowData.length}
                columns={headList.map((head) => {
                  const key = Object.keys(head)[0];
                  return { id: head[key], label: row[head[key] as keyof typeof row] };
                })}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {isPaging && (
        <TablePagination
          page={page}
          component="div"
          count={rowData.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </Card>
  );
};

export default CustomSelectTable;
