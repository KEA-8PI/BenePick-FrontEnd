import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import colors from 'theme/variableColors';
import { TableRowProps } from 'components/CustomTable/CustomTable.types';
import { ColorBox } from 'components/common/Components.styles';
import { MenuItem, Popover, Typography } from '@mui/material';
import { ConvertStatusColor, ConvertStatus } from 'utils/ConvertResponse';
import Iconify from 'components/common/Iconify/Iconify';
import CustomModal from 'components/CustomModal/CustomModal';
import { useToggle } from 'hooks/useToggle';

const WinnerTableRow: React.FC<TableRowProps> = ({ columns, index }) => {
  const [status, setStatus] = React.useState<string>(columns[columns.length - 1].label.toString());
  const changeToggle = useToggle();
  const confirmToggle = useToggle();

  const modalConfig = {
    open: changeToggle.isOpen,
    onClose: changeToggle.toggle,
    contents: (
      <>
        <Typography variant="h6" color={colors.primary}>
          {ConvertStatus(status)}
        </Typography>
        <Typography variant="h6">(으)로 변경하시겠습니까?</Typography>
      </>
    ),
    buttons: { label: '확인', action: () => changeStatus() },
  };

  const confirmModalConfig = {
    open: confirmToggle.isOpen,
    onClose: confirmToggle.toggle,
    contents: <Typography variant="h6">변경되었습니다.</Typography>,
  };

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeStatus = () => {
    // 당첨자 상태 관리 api 호출
    confirmToggle.toggle();
  };

  const handleButtonClick = (status: string) => {
    setStatus(status);
    handleClose();
    changeToggle.toggle();
  };

  const open = Boolean(anchorEl);

  return (
    <TableRow hover tabIndex={-1} sx={{ '& .MuiTableCell-root': { paddingTop: '10px', paddingBottom: '10px' } }}>
      <TableCell>{index + 1}</TableCell>
      {columns.map((column) => (
        <TableCell key={column.label} align={'center'}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {column.id === 'status' ? (
              <>
                <ColorBox
                  color={ConvertStatusColor(column.label.toString())}
                  onClick={handleClick}
                  style={{ cursor: 'pointer' }}
                >
                  {ConvertStatus(column.label.toString())}
                  <Iconify icon="iconamoon:arrow-down-2-fill" sx={{ ml: 0.5 }} />
                </ColorBox>
                <Popover
                  id={column.label.toString()}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                >
                  <MenuItem onClick={() => handleButtonClick('CONFIRM')} disabled={status === 'CONFIRM'}>
                    <>
                      <Iconify icon="codicon:circle-filled" sx={{ mr: 2, color: colors.mint }} />
                      확정
                    </>
                  </MenuItem>
                  <MenuItem onClick={() => handleButtonClick('WINNER')} disabled={status === 'WINNER'}>
                    <>
                      <Iconify icon="codicon:circle-filled" sx={{ mr: 2, color: colors.purple }} />
                      확정 대기
                    </>
                  </MenuItem>
                  <MenuItem onClick={() => handleButtonClick('CANCEL')} disabled={status === 'CANCEL'}>
                    <>
                      <Iconify icon="codicon:circle-filled" sx={{ mr: 2, color: colors.pinkGrey }} />
                      취소
                    </>
                  </MenuItem>
                  <MenuItem onClick={() => handleButtonClick('NO_SHOW')} disabled={status === 'NO_SHOW'}>
                    <>
                      <Iconify icon="codicon:circle-filled" sx={{ mr: 2, color: colors.buttonPink }} />
                      노쇼
                    </>
                  </MenuItem>
                </Popover>
              </>
            ) : (
              column.label
            )}
          </div>
        </TableCell>
      ))}
      <CustomModal modalConfig={modalConfig} />
      <CustomModal modalConfig={confirmModalConfig} />
    </TableRow>
  );
};

export default WinnerTableRow;
