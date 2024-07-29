import * as S from 'components/common/Components.styles';
import CustomTab from 'components/tab/CustomTab';
import { Typography } from '@mui/material';
import WishlistCardList from '../component/WishlistCardList';

const tabData = [
  { label: '진행중', content: <WishlistCardList goodsStatus="진행" />, tabTitle: '총 123개' },
  { label: '응모 예정', content: <WishlistCardList goodsStatus="예정" />, tabTitle: '총 123개' },
];

const WishlistView = () => {
  const showTabTitle = true; // 조건에 따라 동적으로 결정
  const showFilter = true; // 조건에 따라 동적으로 결정

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: '26px', paddingBottom: '32px' }}>위시리스트</Typography>
        <S.Wrapper>
          <CustomTab tabs={tabData} showTabTitle={showTabTitle} showFilter={showFilter} />
        </S.Wrapper>{' '}
      </div>
    </>
  );
};

export default WishlistView;
