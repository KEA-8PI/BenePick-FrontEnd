import { CustomCardProps } from './CustomCard.types';
import { Box, Chip, CardMedia } from '@mui/material';
import colors from 'theme/variableColors';
import { convertGoodsStatus } from 'utils/convertResponse';

const getBackgroundColor = (goodsStatus: string) => {
  switch (goodsStatus) {
    case '진행':
      return colors.primary;
    case '예정':
      return colors.tertiary;
    case '종료':
      return colors.pinkGrey;
    default:
      return colors.primary;
  }
};

const CardImage: React.FC<CustomCardProps> = ({ info, style }) => {
  return (
    <Box sx={{ weight: '100%', height: '100%', position: 'relative', ...style }}>
      <CardMedia
        component="img"
        image={info.image}
        alt="card image"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: '10px',
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
        }}
      />
      <Chip
        label={convertGoodsStatus(info.goodsStatus)}
        sx={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          width: '50px',
          height: '25px',
          color: 'white',
          borderRadius: '4px',
          fontWeight: 'bold',
          fontSize: '13px', // Typo fix
          backgroundColor: getBackgroundColor(info.goodsStatus),
        }}
      />
    </Box>
  );
};

export default CardImage;
