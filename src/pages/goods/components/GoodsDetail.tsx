import { ReactElement, useRef, useState, useEffect } from 'react';
import * as S from 'components/common/Components.styles';
import LeftDetailContents from './detailContents/LeftDetailContents';
import RightDetailContents from './detailContents/RightDetailContents';
import ButtonView from './button/ButtonView';
import GoodsDetailTab from './tab/GoodsDetailTab';
import RaffleCurrentInfoView from './tab/raffleCurrentInfo/RaffleCurrentInfoView';
import RaffleNotice from './tab/raffleNotice/RaffleNotice';
import DrawOutcomeView from './tab/drawOutcome/DrawOutcomeView';

const GoodsDetail = ({ info }): ReactElement => {
  useEffect(() => {
    console.log('status', info.goodsStatus);
    console.log('info', info);
    console.log('상품 상태: ', info.goodsStatus);
  }, [info]);

  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  const scrollRefs = useRef([]);

  // Ensure scrollRefs.current is an array
  if (!scrollRefs.current) {
    scrollRefs.current = [];
  }

  return (
    <S.Wrapper>
      {/* 상품 이미지, 상품 정보 */}
      <S.Row style={{ justifyContent: 'flex-start' }}>
        <LeftDetailContents info={info} />

        {/* 설명란 */}
        <div style={{ paddingLeft: '150px' }}>
          <RightDetailContents info={info} like={like} handleLike={handleLike} />

          {/* 버튼 */}
          <S.Row style={{ paddingTop: '30px', justifyContent: 'flex-end' }}>
            <ButtonView goodsStatus={info.goodsStatus} />
          </S.Row>
        </div>
      </S.Row>

      {/* 탭 */}
      <GoodsDetailTab scrollRef={scrollRefs} />

      {/* 탭 내용 */}
      <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
        <RaffleCurrentInfoView ref={(el) => (scrollRefs.current[0] = el)} goodsStatus={info.goodsStatus} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
        <DrawOutcomeView ref={(el) => (scrollRefs.current[1] = el)} goodsStatus={info.goodsStatus} info={info} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
        <RaffleNotice ref={(el) => (scrollRefs.current[2] = el)} goodsStatus={info.goodsStatus} />
      </div>
    </S.Wrapper>
  );
};

export default GoodsDetail;
