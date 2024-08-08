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
import { GetDrawsResultExport } from 'api/draws.api';

const ManageDrawResultPage = () => {
  const params = useParams();
  const goodsId = Number(params.id);

  const { goodsInfo, setGoodsInfo } = GoodsInfo();

  useEffect(() => {
    console.log('goodsId', goodsId);
    // 추첨 결과 api 호출
    GetGoodsInfo(goodsId)
      .then((res) => {
        console.log('상품정보', res.data.result);
        setGoodsInfo(res.data.result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [goodsId]);

  // const info = {
  //   id: 1,
  //   image: '/images/card/product1.png',
  //   name: 'MacBook Air 15 M2 CPU 8코어 GPU 10코어 8GB 256GB 미드나이트 MacBook Air 15 M2 CPU 8코어 GPU 10코어 8GB 256GB 미드나이트 MacBook Air 15 M2 CPU 8코어 GPU 10코어 8GB 256GB 미드나이트',
  //   category: '전자기기',
  //   amounts: 3,
  //   raffleStartAt: new Date('2024.7.17(수) 00:00'),
  //   raffleEndAt: new Date('2024.7.31(수) 13:00'),
  //   applicant: '100',
  //   price: 1300000,
  //   discountPrice: 999000,
  //   goodsStatus: 'SCHEDULED',
  //   count: 100,
  // };

  const [rowData, setRowData] = useState([
    { date: '2021-10-15 00:00:00', id: 'example@google.com', name: '홍길동', point: 1000, status: 1 },
    { date: '2021-10-15 00:00:00', id: 'example@google.com', name: '홍길동', point: 1000, status: 2 },
    { date: '2021-10-15 00:00:00', id: 'example@google.com', name: '홍길동', point: 1000, status: 2 },
    { date: '2021-10-15 00:00:00', id: 'example@google.com', name: '홍길동', point: 1000, status: 2 },
  ]);

  const [winnerData, setWinnerData] = useState([
    { date: '2021-10-15 00:00:00', id: 'althcjstk08@gahcon.ac.kr', name: '홍길동', point: 1000, status: 'CONFIRM' },
    { date: '2021-10-15 00:00:00', id: 'althcjstk08@gahcon.ac.kr', name: '홍길동', point: 1000, status: 'WINNER' },
    { date: '2021-10-15 00:00:00', id: 'exampleexample@google.com', name: '홍길동', point: 1000, status: 'CANCEL' },
    { date: '2021-10-15 00:00:00', id: 'exampleexample@google.com', name: '홍길동', point: 1000, status: 'NO_SHOW' },
  ]);

  const TabData = [
    {
      label: '응모자',
      content: (
        <CustomTable
          rowData={rowData}
          headList={[{ '응모 날짜': 'date' }, { 아이디: 'id' }, { 이름: 'name' }, { '사용 복지 포인트': 'point' }]}
          isPaging={true}
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
            { '응모 날짜': 'date' },
            { 아이디: 'id' },
            { 이름: 'name' },
            { '사용 복지 포인트': 'point' },
            { 상태: 'status' },
          ]}
        />
      ),
    },
    {
      label: '대기자',
      content: (
        <CustomTable
          rowData={rowData}
          headList={[
            { '응모 날짜': 'date' },
            { 아이디: 'id' },
            { 이름: 'name' },
            { '사용 복지 포인트': 'point' },
            { 상태: 'status' },
          ]}
          isPaging={true}
        />
      ),
    },
  ];

  const handleExport = () => {
    GetDrawsResultExport(goodsId)
      .then((res) => {
        console.log('내보내기 response:', res);
      })
      .catch((error) => {
        console.error('내보내기 error:', error);
      });
  };

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
        <CustomTab tabs={TabData} />
        <CustomButton style={{ marginTop: '20px' }} onClick={handleExport}>
          내보내기
        </CustomButton>
      </div>
    </div>
  );
};

export default ManageDrawResultPage;
