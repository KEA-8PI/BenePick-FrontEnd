import { ReactElement, useRef, useState, useEffect } from 'react';
import * as S from 'components/common/Components.styles';
import LeftDetailContents from './detailContents/LeftDetailContents';
import RightDetailContents from './detailContents/RightDetailContents';
import ButtonView from './button/ButtonView';
import GoodsDetailTab from './tab/GoodsDetailTab';
import RaffleCurrentInfoView from './tab/raffleCurrentInfo/RaffleCurrentInfoView';
import RaffleNotice from './tab/raffleNotice/RaffleNotice';
import DrawOutcomeView from './tab/drawOutcome/DrawOutcomeView';
import { CustomCardData } from 'components/CustomCard/CustomCard.types';
import { GetGoodsInfo } from 'api/goods.api';
import { useParams } from 'react-router-dom';

const GoodsDetail = () => {
  const params = useParams();
  const goodsId = Number(params.id);

  const [goodsInfo, setGoodsInfo] = useState<CustomCardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 상품 정보를 가져오는 API 호출
    GetGoodsInfo(goodsId)
      .then((res) => {
        const goodsInfo = res.data.result;
        setGoodsInfo(res.data.result);
        setLoading(false); // 데이터 로딩이 완료되면 상태 변경

        console.log('goodsInfo:', goodsInfo);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // 데이터 로딩 실패 시 상태 변경
      });
  }, [goodsId]);

  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  const scrollRefs = useRef([]);

  // Ensure scrollRefs.current is an array
  if (!scrollRefs.current) {
    scrollRefs.current = [];
  }

  if (loading) {
    return <div>Loading...</div>; // 로딩 화면 표시 필요
  }

  if (!goodsInfo) {
    return <div>No data available</div>; // 404 화면 표시
  }

  return (
    <S.Wrapper>
      {/* 상품 이미지, 상품 정보 */}
      <S.Row style={{ justifyContent: 'flex-start' }}>
        <LeftDetailContents info={goodsInfo} />

        {/* 설명란 */}
        <div style={{ paddingLeft: '150px' }}>
          <RightDetailContents info={goodsInfo} like={like} handleLike={handleLike} />

          {/* 버튼 */}
          <S.Row style={{ paddingTop: '30px', justifyContent: 'flex-end' }}>
            <ButtonView info={goodsInfo} goodsStatus={goodsInfo.goodsStatus} />
          </S.Row>
        </div>
      </S.Row>

      {/* 탭 */}
      <GoodsDetailTab scrollRef={scrollRefs} />

      {/* 탭 내용 */}
      <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
        <RaffleCurrentInfoView
          ref={(el) => (scrollRefs.current[0] = el)}
          info={goodsInfo.id}
          goodsStatus={goodsInfo.goodsStatus}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
        <DrawOutcomeView
          ref={(el) => (scrollRefs.current[1] = el)}
          goodsStatus={goodsInfo.goodsStatus}
          info={goodsInfo}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
        <RaffleNotice ref={(el) => (scrollRefs.current[2] = el)} goodsStatus={goodsInfo.goodsStatus} />
      </div>
    </S.Wrapper>
  );
};

export default GoodsDetail;
