import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from '../../../components/common/Components.styles';
import * as C from '../../../components/CustomCard/CustomCard.styles';
import { CustomCardProps } from '../../../components/CustomCard/CustomCard.types';
import { Divider, IconButton } from '@mui/material';
import colors from 'theme/variableColors';
import Iconify from 'components/common/Iconify/Iconify';
import Date from 'components/date/Date';
import CardImage from '../../../components/CustomCard/CardImage';
import { useAccountStore } from 'store/useAccountStore';

const CustomCard: React.FC<CustomCardProps> = ({ info }) => {
  const userRole = useAccountStore((state) => state.accountInfo.role);
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        maxWidth: '300px',
        maxHeight: '450px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardImage info={info} style={{ paddingTop: '56.25%', flex: '0 0 60%' }} />
      <C.CardContent
        style={{ flex: '0 0 40%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
      >
        <div style={{ padding: '8px', flex: '1 1 auto' }}>
          <S.Row>
            {/* 일단 category가 null로 설정되어있으면 전체로 써져있게끔 변경 */}
            <C.CardLightFont>#{info.category ? info.category : '전체'}</C.CardLightFont>
            <C.CardBoldFont>{info.amounts}개</C.CardBoldFont>
          </S.Row>
          {/* 상품 아이디, 상태, 상품 정보 -> 상품 상세 페이지로 전달 */}
          <Link
            to={`/goods/${info.id}`}
            style={{ textDecoration: 'none', color: 'black', alignContent: 'center', alignItems: 'center' }}
            state={{ info }}
          >
            <C.CardBoldFont>{info.name}</C.CardBoldFont>
          </Link>

          <Date info={info} />
        </div>

        <Divider sx={{ backgroundColor: colors.cardGrey, marginTop: '10px' }} />
        <S.Row>
          {(userRole === 'MEMBER' || userRole === null) && (
            <IconButton>
              <Iconify
                icon={like ? 'gridicons:heart' : 'gridicons:heart-outline'}
                onClick={handleLike}
                color={like ? colors.primary : colors.grey01}
                sx={{ width: '20px', height: '20px' }}
              />
            </IconButton>
          )}
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Iconify
              icon="bi:person"
              sx={{ width: '20px', height: '20px', color: colors.grey01, paddingRight: '4px' }}
            />
            <C.CardLightFont style={{ fontWeight: 'bold' }}>{info.count}명</C.CardLightFont>
          </div>
        </S.Row>
      </C.CardContent>
    </div>
  );
};

export default CustomCard;
