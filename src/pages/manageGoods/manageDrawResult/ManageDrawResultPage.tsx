import CardImage from 'components/CustomCard/CardImage';
import * as S from 'components/common/Components.styles';
import { Helmet } from 'react-helmet-async';
import colors from 'theme/variableColors';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LeftDetailContents from 'pages/goods/components/detailContents/LeftDetailContents';
import RightDetailContents from 'pages/goods/components/detailContents/RightDetailContents';
import CustomTab from 'components/tab/CustomTab';
import CustomSelectTable from 'components/CustomTable/CustomTable';
import CustomTable from 'components/CustomTable/CustomTable';
import { CustomButton } from 'components/common/Components.styles';
import WinnerTable from './components/WinnerTable/WinnerTable';
import { convertResponse } from 'utils/ConvertResponse';
import { GetGoodsInfo } from 'api/goods.api';
import GoodsInfo from '../manageGoodsInfo/goodsInfo/GoodsInfo';
import { GetDrawsWaitList, GetDrawsWinnerList } from 'api/draws.api';
import { GetRafflesApplicantList } from 'api/raffles.api';

const ManageDrawResultPage = () => {
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const goodsId = Number(params.id);

  const { goodsInfo, setGoodsInfo } = GoodsInfo();

  useEffect(() => {
    if (!goodsId) return; // Prevent unnecessary calls when goodsId is not available

    setLoading(true);
    // 추첨 결과 api 호출
    GetGoodsInfo(goodsId)
      .then((res) => {
        console.log('상품정보', res.data.result);
        setGoodsInfo(res.data.result);
      })
      .catch((error) => {
        console.error(error);
      });

    GetRafflesApplicantList(goodsId)
      .then((res) => {
        console.log('응모자 리스트:', res.data.result.rafflesResponseByGoodsList);
        setRowData(res.data.result.rafflesResponseByGoodsList);
      })
      .catch((error) => {
        console.error('응모자 리스트 error:', error);
      })
      .finally(() => {
        setLoading(false); // End loading after fetching data
      });
  }, [goodsId]);

  const [rowData, setRowData] = useState([]);
  const [winnerData, setWinnerData] = useState([]);
  const [waitList, setWaitList] = useState([]);
  const [drawIdList, setDrawIdList] = useState([]);

  const TabData = [
    {
      label: '응모자',
      content: loading ? (
        <div>Loading...</div>
      ) : (
        <CustomTable
          rowData={rowData}
          headList={[
            { '응모 날짜': 'rafflesAt' },
            { 아이디: 'id' },
            { 이름: 'memberName' },
            { '사용 복지 포인트': 'point' },
          ]}
          isPaging={false}
        />
      ),
    },
    {
      label: '당첨자',
      content: (
        <WinnerTable
          rowData={winnerData}
          setRowData={setWinnerData}
          headList={[
            { '응모 날짜': 'rafflesAt' },
            { 아이디: 'memberId' },
            { 이름: 'memberName' },
            { '사용 복지 포인트': 'point' },
            { 상태: 'status' },
          ]}
          drawIdList={drawIdList}
        />
      ),
    },
    {
      label: '대기자',
      content: (
        <CustomTable
          rowData={waitList}
          headList={[
            { '응모 날짜': 'rafflesAt' },
            { 아이디: 'memberId' },
            { 이름: 'memberName' },
            { '사용 복지 포인트': 'point' },
            { 상태: 'status' },
          ]}
          isPaging={false}
        />
      ),
    },
  ];

  return (
    <div>
      <Helmet>
        <title>BenePick | 추첨 결과</title>
      </Helmet>
      <div style={{ padding: '0 13%' }}>
        <h2>추첨 결과</h2>
        <S.Row style={{ margin: '30px 0' }}>
          <LeftDetailContents info={goodsInfo} />
          <RightDetailContents info={goodsInfo} />
        </S.Row>
      </div>
      <div style={{ padding: '0 10%', alignItems: 'flex-end', display: 'flex', flexDirection: 'column' }}>
        <CustomTab
          tabs={TabData}
          callGetAPI={[
            () => GetRafflesApplicantList(goodsId),
            () => GetDrawsWinnerList(goodsId),
            () => GetDrawsWaitList(goodsId),
          ]}
          setState={[setRowData, setWinnerData, setWaitList]}
          dtoName={[
            'rafflesResponseByGoodsList',
            'drawsResponseByWinnerGoodsIdDTOS',
            'drawsResponseByWaitlistGoodsIdDTOS',
          ]}
          setDrawIdList={setDrawIdList}
        />

        <CustomButton
          style={{ marginTop: '20px' }}
          onClick={() => window.open(`http://benepick.kro.kr:10001/draws/download/${goodsId}`)}
        >
          내보내기
        </CustomButton>
      </div>
    </div>
  );
};

export default ManageDrawResultPage;
