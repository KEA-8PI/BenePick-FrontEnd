import * as S from 'components/common/Components.styles';
import CustomTab from 'components/tab/CustomTab';
import MemberInfoPage from './MemberInfoPage';

const tabData = [
  { label: '사원 정보', content: <MemberInfoPage /> },
  { label: '응모 내역', content: <div>Content for Tab 2</div> },
];

const MyPageView = () => {
  return (
    <S.Wrapper>
      <CustomTab tabs={tabData} />
    </S.Wrapper>
  );
};

export default MyPageView;
