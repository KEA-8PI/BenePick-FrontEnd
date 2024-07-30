import RaffleButton from './RaffleButton';
import RaffleBeforeButton from './RaffleBeforeButton';
import RaffleResultButton from './RaffleResultButton';

const ButtonView = ({ goodsStatus }) => {
  return (
    <div>
      {goodsStatus === '진행' && <RaffleButton />}
      {goodsStatus === '예정' && <RaffleBeforeButton />}
      {goodsStatus === '종료' && <RaffleResultButton />}
    </div>
  );
};

export default ButtonView;
