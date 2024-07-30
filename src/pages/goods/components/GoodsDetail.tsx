import { ReactElement, useState } from 'react';
import * as S from 'components/common/Components.styles';

import LeftDetailContents from './detailContents/LeftDetailContents';
import RightDetailContents from './detailContents/RightDetailContents';

import ButtonView from './button/ButtonView';

import RaffleCurrentInformation from './tabContents/RaffleCurrentInformation';
import RaffleNotice from './tabContents/RaffleNotice';
import DrawOutcome from './tabContents/DrawOutcome';
import CustomTab from 'components/tab/CustomTab';

const tabData = [
  { label: '응모 현황 정보', content: <RaffleCurrentInformation />, tabTitle: '응모 현황 정보' },
  { label: '결과 발표', content: <RaffleNotice />, tabTitle: '결과 발표' },
  { label: '안내 사항', content: <DrawOutcome />, tabTitle: '안내 사항' },
];

const GoodsDetail = ({ goodsStatus, info }): ReactElement => {
  console.log('status', goodsStatus);
  console.log('info', info);

  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  console.log('상품 상태: ', goodsStatus);

  return (
    <S.Wrapper>
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

      <CustomTab tabs={tabData} />
    </S.Wrapper>
  );
};

export default GoodsDetail;
