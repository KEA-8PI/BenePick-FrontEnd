import * as S from 'components/common/Components.styles';
import * as C from 'components/CustomCard/CustomCard.styles';
import Iconify from 'components/common/Iconify/Iconify';
import { Typography, IconButton, Button } from '@mui/material';
import colors from 'theme/variableColors';
import { CustomCardData } from 'components/CustomCard/CustomCard.types';

const RightDetailContents = ({
  info,
  like,
  handleLike,
}: {
  info: CustomCardData;
  like?: boolean;
  handleLike?: () => void;
}) => {
  return (
    <div>
      <C.CardLightFont style={{ fontSize: '15px' }}>#{info.category}</C.CardLightFont>
      <S.Row>
        <C.CardBoldFont style={{ fontSize: '25px', width: '350px' }}>{info.name}</C.CardBoldFont>
        {handleLike && (
          <div>
            <IconButton>
              <Iconify
                icon={like ? 'gridicons:heart' : 'gridicons:heart-outline'}
                onClick={handleLike}
                color={like ? colors.primary : colors.grey01}
                sx={{ width: '30px', height: '30px' }}
              />
            </IconButton>
          </div>
        )}
      </S.Row>
      <C.CardBoldFont
        style={{ fontSize: '20px', textDecoration: 'line-through', color: colors.grey01, marginBottom: '3px' }}
      >
        {info.price.toLocaleString()}원
      </C.CardBoldFont>
      <S.Row>
        <C.CardBoldFont style={{ fontSize: '20px' }}>{info.discountPrice.toLocaleString()}원</C.CardBoldFont>
        <Typography style={{ color: 'black', fontSize: '15px', paddingLeft: '150px' }}>{info.amounts}개</Typography>
      </S.Row>
      <S.Row style={{ justifyContent: 'flex-end' }}>
        <Button
          style={{
            width: '48px',
            height: '22px',
            fontSize: '15px',
            backgroundColor: colors.whiteGrey,
            color: colors.grey02,
            marginTop: '30px',
          }}
        >
          더보기
        </Button>
      </S.Row>
    </div>
  );
};

export default RightDetailContents;
