import { Button } from '@mui/material';
import colors from 'theme/variableColors';

const RaffleBeforeButton = () => {
  return (
    <Button
      style={{
        width: '400px',
        height: '45px',
        fontSize: '17px',
        backgroundColor: colors.pinkGrey,
        color: 'white',
      }}
    >
      응모 예정
    </Button>
  );
};

export default RaffleBeforeButton;
