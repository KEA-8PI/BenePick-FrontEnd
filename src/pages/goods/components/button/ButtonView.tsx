import RaffleButton from './RaffleButton';
import RaffleBeforeButton from './RaffleBeforeButton';
import RaffleResultButton from './RaffleResultButton';

const ButtonView = ({ info, goodsStatus }) => {
  return (
    <div>
      {goodsStatus === 'PROGRESS' && <RaffleButton />}
      {goodsStatus === 'SCHEDULED' && <RaffleBeforeButton />}
      {goodsStatus === 'COMPLETED' && <RaffleResultButton info={info} />}
    </div>
  );
};

export default ButtonView;
