import { Card, Table, TableBody, TableContainer, TablePagination } from '@mui/material';
import TableHeader from './TableHeader';
import { useState } from 'react';
import CustomTableRow from './CustomTableRow';

const CustomTable = ({
  rowData,
  headList,
  isPaging,
  total,
  apiPage,
  setApiPage,
  etcNum,
  propsIdList,
}: {
  rowData: { [key: string]: string | number }[];
  headList: { [key: string]: string }[];
  isPaging?: boolean;
  total?: number;
  apiPage?: number;
  setApiPage?: React.Dispatch<React.SetStateAction<number>>;
  propsIdList?: number[];
  etcNum?: number[];
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    if (newPage > page && (newPage + 1) * rowsPerPage >= rowData.length && total >= (newPage + 1) * rowsPerPage) {
      setApiPage(apiPage + 1);
    }
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const paginatedRowData = Array.isArray(rowData)
    ? rowData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    : [];

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
            {isPaging
              ? paginatedRowData.map((row, index) => (
                  <CustomTableRow
                    key={index} // Changed key to use index instead of row.content
                    index={index}
                    columns={headList.map((head) => {
                      const key = Object.keys(head)[0];
                      return { id: head[key], label: row[head[key] as keyof typeof row] };
                    })}
                    propsId={propsIdList ? propsIdList[index] : undefined}
                    sequence={etcNum ? etcNum[index] : undefined}
                  />
                ))
              : rowData.map((row, index) => (
                  <CustomTableRow
                    key={index} // Changed key to use index instead of row.content
                    index={index}
                    columns={headList.map((head) => {
                      const key = Object.keys(head)[0];
                      return { id: head[key], label: row[head[key] as keyof typeof row] };
                    })}
                    propsId={propsIdList ? propsIdList[index] : undefined}
                    sequence={etcNum ? etcNum[index] : undefined}
                  />
                ))}
          </TableBody>
        </Table>
      </TableContainer>
      {isPaging && total !== 0 && (
        <TablePagination
          page={page}
          component="div"
          count={total}
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
