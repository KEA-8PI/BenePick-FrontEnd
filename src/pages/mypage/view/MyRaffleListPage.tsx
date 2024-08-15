import { useEffect, useState } from 'react';
import * as S from 'components/common/Components.styles';
import { Button, Typography } from '@mui/material';
import colors from 'theme/variableColors';
import CustomTable from 'components/CustomTable/CustomTable';
import { GetMyRafflesList } from 'api/raffles.api';
import { GetMyDrawsList } from 'api/draws.api';

const MyRaffleListPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [progressList, setProgressList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);

  const [sequenceList, setSequenceList] = useState<number[]>([]);
  const [propsIdList, setPropsIdList] = useState<number[]>([]);

  const TabData = [
    {
      label: '진행',
      content: (
        <>
          <CustomTable
            headList={[
              { 날짜: 'rafflesAt' },
              { 카테고리: 'categoryName' },
              { 내역: 'goodsName' },
              { '사용 복지 포인트': 'point' },
            ]}
            isPaging={false}
            rowData={progressList}
            propsIdList={propsIdList}
          />
          {progressList.length === 0 && (
            <div style={{ display: 'flex', width: '100%', marginTop: '20px', justifyContent: 'center' }}>
              내역이 존재하지 않습니다.
            </div>
          )}
        </>
      ),
    },
    {
      label: '종료',
      content: loading2 ? (
        <div>Loading...</div>
      ) : (
        <>
          <CustomTable
            headList={[
              { 날짜: 'rafflesAt' },
              { 카테고리: 'categoryName' },
              { 내역: 'goodsName' },
              { '사용 복지 포인트': 'point' },
              { 결과: 'drawStatus' },
            ]}
            isPaging={false}
            rowData={completedList}
            propsIdList={propsIdList}
            etcNum={sequenceList}
          />
          {completedList.length === 0 && (
            <div style={{ display: 'flex', width: '100%', marginTop: '20px', justifyContent: 'center' }}>
              내역이 존재하지 않습니다.
            </div>
          )}
        </>
      ),
    },
  ];

  useEffect(() => {
    if (activeTab === 0) {
      GetMyRafflesList()
        .then((res) => {
          setProgressList(res.data.result.rafflesResponseByMembersList);
          setPropsIdList(res.data.result.rafflesResponseByMembersList.map((raffle: any) => raffle.goodsId));
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    } else if (activeTab === 1) {
      GetMyDrawsList()
        .then((res) => {
          setCompletedList(res.data.result.drawsResponseByMembersList);
          const sequence = res.data.result.drawsResponseByMembersList.map((draw: any) => draw.sequence);
          setSequenceList(sequence);
          setPropsIdList(res.data.result.drawsResponseByMembersList.map((draw: any) => draw.goodsId));
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading2(false);
        });
    }
  }, [activeTab]);

  if (loading) {
    return <div>Loading...</div>; // 로딩 화면 표시 필요
  }

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
      <div>{TabData[activeTab]?.content || 'No content available'}</div>
    </div>
  );
};

export default MyRaffleListPage;
