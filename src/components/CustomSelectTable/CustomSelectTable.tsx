// @ts-nocheck

import { Card, Table, TableBody, TableContainer, TablePagination } from '@mui/material';
import SelectTableHeader from './SelectTableHeader';
import { useState } from 'react';
import SelectTableToolbar from './SelectTableToolbar';
import SelectTableRow from './SelectTableRow';

const CustomSelectTable = () => {
  const [rowData, setRowData] = useState([
    { id: 'alex.js', date: '2021-10-10', point: 5, content: 'This is a test1' },
    { id: 'bamb.kim', date: '2021-10-10', point: 5, content: 'This is a test2' },
    { id: 'hello.js', date: '2021-10-10', point: 5, content: 'This is a test3' },
  ]);
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState<'asc' | 'desc'>('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSort = (event: React.MouseEvent<unknown>, id: string) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rowData.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
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
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  return (
    <Card>
      <SelectTableToolbar numSelected={selected.length} />
      <TableContainer sx={{ overflow: 'unset' }}>
        <Table sx={{ minWidth: 800 }}>
          <SelectTableHeader
            order={order}
            orderBy={orderBy}
            rowCount={rowData.length}
            numSelected={selected.length}
            onRequestSort={handleSort}
            onSelectAllClick={handleSelectAllClick}
            headLabel={[
              { id: 'content', label: 'Content' },
              { id: 'id', label: '아이디' },
              { id: 'date', label: 'Date' },
              { id: 'point', label: 'Point', align: 'center' },
            ]}
          />
          <TableBody>
            {rowData.map((row) => (
              <SelectTableRow
                key={row.id}
                content={row.content}
                selected={selected.indexOf(row.id) !== -1}
                handleClick={(event) => handleClick(event, row.id)}
                columns={[
                  { id: '아이디', label: row.id, type: 'string' },
                  { id: 'date', label: row.date, type: 'string' },
                  { id: 'point', label: row.point, type: 'number' },
                ]}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        page={page}
        component="div"
        count={rowData.length}
        // count={5}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Card>
  );
};

export default CustomSelectTable;
