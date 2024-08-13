import { useEffect, useState } from 'react';
import * as S from 'components/common/Components.styles';
import CustomTab from 'components/tab/CustomTab';
import { Typography } from '@mui/material';
import WishlistCardList from '../component/WishlistCardList';
import { GetWishlists } from 'api/wishlists.api';

const WishlistView = () => {
  const showTabTitle = true; // 조건에 따라 동적으로 결정
  const showFilter = true; // 조건에 따라 동적으로 결정
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');

  const tabData = [
    { label: '진행중', content: <WishlistCardList data={data} goodsStatus="진행" />, tabTitle: `총 ${data.length}개` },
    {
      label: '응모 예정',
      content: <WishlistCardList data={data} goodsStatus="예정" />,
      tabTitle: `총 ${data.length}개`,
    },
  ];

  useEffect(() => {
    GetWishlists('PROGRESS', 0, 20, 'END')
      .then((res) => {
        const response = res.data.result.wishlistDTOS;
        console.log('API 호출 결과:', response);

        setData(response);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // HomeView 컴포넌트에서 filter 상태를 업데이트하는 함수
  const handleFilterChange = (filter: string) => {
    setFilter(filter);
    console.log('WishlistView filter:', filter);
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: '26px', paddingBottom: '32px' }}>위시리스트</Typography>
        <S.Wrapper>
          <CustomTab
            tabs={tabData}
            callGetAPI={[
              (sortBy) => GetWishlists('PROGRESS', 0, 20, sortBy),
              (sortBy) => GetWishlists('SCHEDULED', 0, 10, sortBy),
            ]}
            setState={[setData, setData]}
            dtoName={['wishlistDTOS', 'wishlistDTOS']}
            showTabTitle={showTabTitle}
            showFilter={showFilter}
            onFilterChange={handleFilterChange}
          />
        </S.Wrapper>
      </div>
    </>
  );
};

export default WishlistView;
