import { Card, Table, TableBody, TableContainer, TablePagination } from '@mui/material';
import SelectTableHeader from './SelectTableHeader';
import { useState } from 'react';
import SelectTableToolbar from './SelectTableToolbar';
import SelectTableRow from './SelectTableRow';

const CustomSelectTable = ({
  headList,
  rowData,
  isModify,
  setIsModify,
  setRowData,
  selected,
  setSelected,
  totalNum,
  apiPage,
  setApiPage,
  page,
  setPage,
}: {
  headList: { [key: string]: string }[];
  rowData: { [key: string]: string | number }[];
  isModify: string;
  setIsModify: React.Dispatch<React.SetStateAction<string>>;
  setRowData: React.Dispatch<React.SetStateAction<{ [key: string]: string | number }[]>>;
  selected: any[];
  setSelected: React.Dispatch<React.SetStateAction<any[]>>;
  totalNum: number;
  apiPage: number;
  setApiPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  // const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rowData.filter((a) => a.id !== '').map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>, name: string | number) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name.toString());
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    if (newPage > page && (newPage + 1) * rowsPerPage >= rowData.length) {
      setApiPage(apiPage + 1);
    }
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const paginatedRowData = rowData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Card sx={{ borderRadius: '10px' }}>
      <SelectTableToolbar numSelected={selected.length} />
      <TableContainer sx={{ overflow: 'unset' }}>
        <Table sx={{ minWidth: 800 }}>
          <SelectTableHeader
            rowCount={isModify === 'null' ? rowData.length - 1 : rowData.length}
            numSelected={selected.length}
            onSelectAllClick={handleSelectAllClick}
            headLabel={headList.map((head) => {
              const key = Object.keys(head)[0];
              return { id: head[key], label: key };
            })}
          />
          <TableBody>
            {paginatedRowData.map((row) => (
              <SelectTableRow
                key={row.id}
                id={row.id}
                selected={selected.indexOf(row.id) !== -1}
                handleClick={(event: React.ChangeEvent<HTMLInputElement>) => handleClick(event, row.id)}
                columns={headList.map((head) => {
                  const key = Object.keys(head)[0];
                  return { id: head[key], label: row[head[key] as keyof typeof row] };
                })}
                isModify={isModify === 'null' ? row.id === '' : isModify === row.id}
                setIsModify={setIsModify}
                rowData={rowData}
                setRowData={setRowData}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        page={page}
        component="div"
        count={isModify === 'null' ? totalNum - 1 : totalNum}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Card>
  );
};

export default CustomSelectTable;
