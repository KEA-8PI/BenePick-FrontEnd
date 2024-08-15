import { Box, CardMedia } from '@mui/material';
import Iconify from 'components/common/Iconify/Iconify';
import { useEffect, useState } from 'react';
import colors from 'theme/variableColors';
import { GoodsInfoData } from '../../goodsInfo/GoodsInfo.types';
import { PostImage } from 'api/image.api';

const ModifyGoodsImage = ({
  imgUrl,
  setState,
}: {
  imgUrl?: string;
  setState: React.Dispatch<React.SetStateAction<GoodsInfoData>>;
}) => {
  const [img, setImg] = useState<string | undefined>(imgUrl);

  useEffect(() => {
    if (imgUrl) {
      setImg(imgUrl);
    }
  }, [imgUrl]);

  const handleClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function (event) {
      const target = event.target as HTMLInputElement;
      const file = target.files[0];
      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        setImg(URL.createObjectURL(file));
        PostImage(formData)
          .then((res) => {
            console.log(res);
            setState((prev) => ({ ...prev, image: res.data }));
          })
          .catch((err) => {
            console.error(err);
          });
      }
    };
    input.click();
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '300px',
        height: '216px',
        marginBottom: '15px',
        cursor: 'pointer',
        '&:hover': {
          opacity: 0.72,
        },
      }}
      onClick={() => handleClick()}
    >
      <CardMedia
        component="div"
        image={img || '/images/benepickLogo.png'}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: '10px',
          // backgroundPosition: 'top center',
          backgroundSize: img !== null ? 'cover' : 'contain',
          cursor: 'pointer',
          backgroundColor: img || 'white',
        }}
      />
      <Iconify
        icon="ph:pencil"
        sx={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          width: '25px',
          height: '25px',
          color: 'grey',
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default ModifyGoodsImage;
