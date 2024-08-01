import { useState } from 'react';
import * as S from 'components/common/Components.styles';
import { Button, Typography } from '@mui/material';
import colors from 'theme/variableColors';
import CustomTable from 'components/CustomTable/CustomTable';

const MyRaffleListPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [rowData, setRowData] = useState([
    {
      date: '2021-10-15',
      change: '-50',
      content: 'MacBook Pro 14',
      totalPoint: 950,
      category: '전자기기',
      point: 1000,
      result: '당첨',
    },
    {
      date: '2021-10-19',
      change: '+50',
      content: 'MacBook Pro 14',
      totalPoint: 1000,
      category: '여행/티켓',
      point: 512,
      result: '미당첨',
    },
    {
      date: '2021-10-10',
      change: '+500',
      content: 'MacBook Pro 14',
      totalPoint: 1000,
      category: '문화생활',
      point: 120,
      result: '노쇼',
    },
    {
      date: '2021-10-10',
      change: '+500',
      content: 'MacBook Pro 14',
      totalPoint: 1000,
      category: '문화생활',
      point: 120,
      result: '취소',
    },
  ]);

  const TabData = [
    {
      label: '진행',
      content: (
        <CustomTable
          headList={[{ 날짜: 'date' }, { 카테고리: 'category' }, { 내역: 'content' }, { '사용 복지 포인트': 'point' }]}
          isPaging={false}
          rowData={rowData}
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
          rowData={rowData}
        />
      ),
    },
  ];
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
