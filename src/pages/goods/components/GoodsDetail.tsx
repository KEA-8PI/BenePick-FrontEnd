import { ReactElement, useRef, useState, useEffect } from 'react';
import * as S from 'components/common/Components.styles';
import LeftDetailContents from './detailContents/LeftDetailContents';
import RightDetailContents from './detailContents/RightDetailContents';
import ButtonView from './button/ButtonView';
import GoodsDetailTab from './tab/GoodsDetailTab';
import RaffleCurrentInfoView from './tab/raffleCurrentInfo/RaffleCurrentInfoView';
import RaffleNotice from './tab/raffleNotice/RaffleNotice';
import DrawOutcomeView from './tab/drawOutcome/DrawOutcomeView';

const GoodsDetail = ({ goodsStatus, info }): ReactElement => {
  useEffect(() => {
    console.log('status', goodsStatus);
    console.log('info', info);
    console.log('상품 상태: ', goodsStatus);
  }, [goodsStatus, info]);

  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  // Initialize scrollRef as an array of refs
  const scrollRef = useRef<(HTMLElement | null)[]>([]);

  // Function to assign refs to the array
  const setRef = (index: number) => (element: HTMLElement | null) => {
    scrollRef.current[index] = element;
  };

  return (
    <S.Wrapper>
      {/* 상품 이미지, 상품 정보 */}
      <S.Row style={{ justifyContent: 'flex-start' }}>
        <LeftDetailContents goodsStatus={goodsStatus} info={info} />

        {/* 설명란 */}
        <div style={{ paddingLeft: '150px' }}>
          <RightDetailContents info={info} like={like} handleLike={handleLike} />

          {/* 버튼 */}
          <S.Row style={{ paddingTop: '30px', justifyContent: 'flex-end' }}>
            <ButtonView goodsStatus={goodsStatus} />
          </S.Row>
        </div>
      </S.Row>

      {/* 탭 */}
      <GoodsDetailTab scrollRef={scrollRef} />

      {/* 탭 내용 */}
      <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
        <RaffleCurrentInfoView ref={setRef(0)} goodsStatus={goodsStatus} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
        <DrawOutcomeView ref={setRef(1)} goodsStatus={goodsStatus} info={info} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
        <RaffleNotice ref={setRef(2)} goodsStatus={goodsStatus} />
      </div>
    </S.Wrapper>
  );
};

export default GoodsDetail;
