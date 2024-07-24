import * as S from 'components/common/Components.styles';
import CustomTab from 'components/tab/CustomTab';
import MemberInfoPage from './MemberInfoPage';
import MyRaffleListPage from './MyRaffleListPage';

const TabData = [
  { label: '사원 정보', content: <MemberInfoPage /> },
  { label: '응모 내역', content: <MyRaffleListPage /> },
];

const MyPageView = () => {
  return (
    <S.Wrapper style={{ height: 'auto' }}>
      <CustomTab tabs={TabData} />
    </S.Wrapper>
  );
};

export default MyPageView;
