import RaffleButton from './RaffleButton';
import RaffleBeforeButton from './RaffleBeforeButton';
import RaffleResultButton from './RaffleResultButton';
import { useAccountStore } from 'store/useAccountStore';

const ButtonView = ({ info, goodsStatus, point }) => {
  const userRole = useAccountStore((state) => state.accountInfo.role);
  return (
    <div>
      {userRole === 'MEMBER' && goodsStatus === 'PROGRESS' && <RaffleButton info={info} point={point} />}
      {goodsStatus === 'SCHEDULED' && <RaffleBeforeButton />}
      {goodsStatus === 'COMPLETED' && <RaffleResultButton info={info} />}
    </div>
  );
};

export default ButtonView;
