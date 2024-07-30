import { useState } from 'react';
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
    <div style={{ padding: '0 5%' }}>
      <Typography variant="h5" style={{ margin: '20px 0 30px 0' }}>
        나의 응모 내역
      </Typography>
      <S.Wrapper>
        <S.Row width={80}>
          {TabData.map((tab, index) => (
            <Button
              key={tab.label}
              onClick={() => setActiveTab(index)}
              sx={{
                width: '60%',
                height: '62px',
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
      </S.Wrapper>
      <div>{TabData[activeTab].content}</div>
    </div>
  );
};

export default MyRaffleListPage;
