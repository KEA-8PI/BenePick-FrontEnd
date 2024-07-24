import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import colors from 'theme/variableColors';

const SelectTableToolbar = ({ numSelected }: { numSelected: number }) => {
  return (
    <>
      {numSelected > 0 && (
        <Typography component="div" variant="subtitle1" sx={{ color: colors.primary, margin: '10px 0 10px 20px' }}>
          {numSelected} selected
        </Typography>
      )}
    </>
  );
};

export default SelectTableToolbar;
