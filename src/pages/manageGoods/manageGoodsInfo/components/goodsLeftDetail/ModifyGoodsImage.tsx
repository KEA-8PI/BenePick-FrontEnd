import { Box, CardMedia } from '@mui/material';
import Iconify from 'components/common/Iconify/Iconify';
import { useEffect, useState } from 'react';
import colors from 'theme/variableColors';

const ModifyGoodsImage = ({ imgUrl }: { imgUrl?: string }) => {
  // useEffect(() => {
  //   console.log('info.image', imgUrl);
  // }, []);
  const [img, setImg] = useState(imgUrl || '');

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
        // PostImage(formData)
        //   .then((res) => {
        //     console.log(res);
        //     updateAccountInfo('profileImg', res.data);
        //   })
        //   .catch((err) => {
        //     console.error(err);
        //   });
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
        component="img"
        image={img}
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          borderRadius: '10px',
          objectFit: 'cover',
          backgroundColor: img ? 'transparent' : colors.blueGrey,
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
