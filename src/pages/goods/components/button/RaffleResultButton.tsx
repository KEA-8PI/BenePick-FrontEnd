import { Button } from '@mui/material';
import colors from 'theme/variableColors';

const RaffleResultButton = () => {
  return (
    <Button
      style={{
        width: '400px',
        height: '45px',
        fontSize: '17px',
        backgroundColor: colors.primary,
        color: 'white',
      }}
    >
      결과 돌려보기
    </Button>
  );
};

export default RaffleResultButton;
