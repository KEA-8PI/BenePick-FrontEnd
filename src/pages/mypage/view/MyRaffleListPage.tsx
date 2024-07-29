import { act, useState } from 'react';
import * as S from 'components/common/Components.styles';
import { Button, Typography } from '@mui/material';
import colors from 'theme/variableColors';
import CustomTable from 'components/CustomTable/CustomTable';

const TabData = [
  {
    label: '진행',
    content: (
      <CustomTable
        headList={[{ 날짜: 'date' }, { 카테고리: 'category' }, { 내역: 'content' }, { '사용 복지 포인트': 'point' }]}
        isPaging={false}
      />
    ),
  },
  {
    label: '종료',
    content: (
      <CustomTable
        headList={[
          { 날짜: 'date' },
          { 카테고리: 'category' },
          { 내역: 'content' },
          { '사용 복지 포인트': 'point' },
          { 결과: 'result' },
        ]}
        isPaging={false}
      />
    ),
  },
];
const MyRaffleListPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <S.Wrapper style={{ height: 'auto' }}>
      <Typography variant="h5" style={{ margin: '20px 0 15px 0' }}>
        나의 응모 내역
      </Typography>
      <S.Row width={80}>
        {TabData.map((tab, index) => (
          <Button
            key={index} // Add key prop here
            onClick={() => setActiveTab(index)}
            sx={{
              width: '50%',
              height: '64px',
              mb: '24px',
              backgroundColor: activeTab === index ? colors.buttonPink : colors.tableGrey,
              '&:hover': {
                backgroundColor: colors.tertiary,
              },
              color: activeTab === index ? colors.primary : 'black',
              fontSize: '20px',
              fontWeight: activeTab === index ? 'bold' : 'normal',
            }}
          >
            {tab.label}
          </Button>
        ))}
      </S.Row>
      <div style={{ padding: '0 10%' }}>{TabData[activeTab].content}</div>
    </S.Wrapper>
  );
};

export default MyRaffleListPage;
