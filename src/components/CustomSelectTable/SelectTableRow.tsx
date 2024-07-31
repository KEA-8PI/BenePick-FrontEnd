import React, { useState, useEffect } from 'react';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import { SelectTableRowProps } from './CustomSelectTable.types';
import { IconButton } from '@mui/material';
import Iconify from 'components/common/Iconify/Iconify';
import colors from 'theme/variableColors';
import { CustomButton } from 'components/common/Components.styles';
import { CustomTextField } from 'components/CustomTextField/CustomTextField.styles';

const SelectTableRow: React.FC<SelectTableRowProps> = ({
  id,
  selected,
  columns,
  handleClick,
  isModify,
  setIsModify,
  rowData,
  setRowData,
}) => {
  const [inputValues, setInputValues] = useState(() => {
    const initialState = {};
    columns.forEach((column) => {
      initialState[column.id] = column.label;
    });
    return initialState;
  });

  useEffect(() => {
    if (id !== '') {
      const newInputValues = {};
      columns.forEach((column) => {
        newInputValues[column.id] = column.label;
      });
      setInputValues(newInputValues);
    }
  }, [id, columns]);

  const handleInputChange = (columnId, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [columnId]: value,
    }));
  };

  const handleCancel = () => {
    if (id === '') {
      setRowData((prev) => prev.filter((a: { id: string }) => a.id !== ''));
    }
    setIsModify('');
  };

  const handleModify = () => {
    const newRowData = [...rowData];
    if (id === '') {
      newRowData[0] = inputValues;
      // 추가 api 호출
    } else {
      const rowIndex = newRowData.findIndex((row) => row.id === id);
      newRowData[rowIndex] = { ...newRowData[rowIndex], ...inputValues };
      // 수정 api 호출
    }
    console.log('수정', newRowData);
    setRowData(newRowData);
    setIsModify('');
  };

  const isFormValid = () => {
    return Object.values(inputValues).every((value) => {
      value = value.toString();
      return value !== '';
    });
  };

  return (
    <TableRow
      hover
      tabIndex={-1}
      role="checkbox"
      selected={selected}
      sx={{
        '& .MuiTableCell-root': { paddingTop: '5px', paddingBottom: '5px' },
      }}
    >
      <TableCell padding="checkbox">
        {id !== '' && !isModify && (
          <Checkbox
            disableRipple
            checked={selected}
            onChange={handleClick}
            sx={{
              '&.Mui-checked': {
                color: colors.primary,
              },
            }}
          />
        )}
      </TableCell>
      {columns.map((column) => (
        <TableCell key={column.id} align={'center'}>
          {isModify ? (
            <CustomTextField
              defaultValue={inputValues[column.id]}
              size="small"
              sx={{ fontSize: '0.875rem' }}
              onChange={(e) => handleInputChange(column.id, e.target.value)}
            />
          ) : (
            column.label
          )}
        </TableCell>
      ))}
      <TableCell align={'right'} style={{ width: '105px' }}>
        {isModify ? (
          <>
            <CustomButton
              width={'50px'}
              style={{
                marginRight: '2%',
                backgroundColor: 'white',
                border: `2px solid ${colors.buttonPink}`,
                minWidth: '50px',
              }}
              onClick={handleCancel}
            >
              취소
            </CustomButton>
            <CustomButton width={'50px'} style={{ minWidth: '50px' }} onClick={handleModify} disabled={!isFormValid()}>
              완료
            </CustomButton>
          </>
        ) : (
          <IconButton aria-label="modify" size="small" onClick={() => setIsModify(id.toString())}>
            <Iconify icon="ph:pencil" width={20} />
          </IconButton>
        )}
      </TableCell>
    </TableRow>
  );
};

export default SelectTableRow;
