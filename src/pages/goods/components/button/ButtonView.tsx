import RaffleButton from './RaffleButton';
import RaffleBeforeButton from './RaffleBeforeButton';
import RaffleResultButton from './RaffleResultButton';

const ButtonView = ({ info, goodsStatus, point }) => {
  return (
    <div>
      {goodsStatus === 'PROGRESS' && <RaffleButton info={info} point={point} />}
      {goodsStatus === 'SCHEDULED' && <RaffleBeforeButton />}
      {goodsStatus === 'COMPLETED' && <RaffleResultButton info={info} />}
    </div>
  );
};

export default ButtonView;
