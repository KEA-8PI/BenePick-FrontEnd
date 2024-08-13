import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import { GoodsSelectTableRowProps } from './GoodsSelectTable.types';
import { IconButton } from '@mui/material';
import Iconify from 'components/common/Iconify/Iconify';
import colors from 'theme/variableColors';
import { ColorBox } from 'components/common/Components.styles';
import { useNavigate } from 'react-router-dom';
import { convertResponse } from 'utils/ConvertResponse';

const GoodsSelectTableRow: React.FC<GoodsSelectTableRowProps> = ({
  id,
  selected,
  columns,
  handleClick,
  rowData,
  setRowData,
}) => {
  const navigate = useNavigate();
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
      </TableCell>
      {columns.map((column, index) => (
        <TableCell key={column.id} align={index === 1 ? 'left' : 'center'}>
          {column.id === 'result' ? (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ColorBox
                color={column.label === 'PROGRESS' || column.label === 'SCHEDULED' ? colors.buttonPink : colors.mint}
                style={{ width: '80px', cursor: 'pointer' }}
                onClick={() => navigate(`/manageDrawResult/${columns[0].label}`)}
              >
                {convertResponse(column.label.toString())}
              </ColorBox>
            </div>
          ) : (
            column.label
          )}
        </TableCell>
      ))}
      <TableCell align={'right'}>
        <IconButton aria-label="modify" size="small" onClick={() => navigate(`/manageGoodsInfo/${columns[0].label}`)}>
          <Iconify icon="ph:pencil" width={20} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default GoodsSelectTableRow;
