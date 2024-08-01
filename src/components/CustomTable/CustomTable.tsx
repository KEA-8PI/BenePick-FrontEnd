import { Card, Table, TableBody, TableContainer, TablePagination } from '@mui/material';
import TableHeader from './TableHeader';
import { useState } from 'react';
import CustomTableRow from './CustomTableRow';

const CustomTable = ({
  rowData,
  headList,
  isPaging,
}: {
  rowData: { [key: string]: string | number }[];
  headList: { [key: string]: string }[];
  isPaging?: boolean;
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const paginatedRowData = rowData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

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
            {paginatedRowData.map((row, index) => (
              <CustomTableRow
                key={index} // Changed key to use index instead of row.content
                index={index}
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

export default CustomTable;
