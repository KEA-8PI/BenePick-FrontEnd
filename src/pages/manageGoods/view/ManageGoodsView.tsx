import { IconButton, InputAdornment, Typography } from '@mui/material';
import { DeleteGoods, GetGoodsList, PostGoodsUpload } from 'api/goodsAdmin.api';
import CustomModal from 'components/CustomModal/CustomModal';
import GoodsSelectTable from 'components/GoodsSelectTable/GoodsSelectTable';
import * as S from 'components/common/Components.styles';
import Iconify from 'components/common/Iconify/Iconify';
import { OutlinedInput } from 'components/searchbar/SearchBar.styles';
import UploadBox from 'components/uploadBox/UploadBox';
import { useToggle } from 'hooks/useToggle';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatData } from '../utils/formatData';

const ManageGoodsView = () => {
  const [rowData, setRowData] = useState([]);
  useEffect(() => {
    GetGoodsList(0, 25)
      .then((res) => {
        console.log('Get 상품 목록 response:', res.data.result.goodsDTOList);

        setRowData(formatData(res.data.result.goodsDTOList));
      })
      .catch((err) => {
        console.error('Get 상품 목록 error:', err);
      });
  }, []);
  const navigate = useNavigate();

  const deleteToggle = useToggle();
  const confirmToggle = useToggle();

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<number[]>([]);

  const modalConfig = {
    open: deleteToggle.isOpen,
    onClose: deleteToggle.toggle,
    contents: <Typography variant="h6">상품 {selected.length}개를 삭제하시겠습니까?</Typography>,
    buttons: { label: '확인', action: () => handleDeleteGoods() },
  };

  const confirmModalConfig = {
    open: confirmToggle.isOpen,
    onClose: confirmToggle.toggle,
    contents: <Typography variant="h6">삭제되었습니다.</Typography>,
  };

  const handleSubmit = (formData: FormData) => {
    PostGoodsUpload(formData)
      .then((res) => {
        console.log('Post 상품 추가 response:', res);
      })
      .catch((err) => {
        console.error('Post 상품 추가 error:', err);
      });
  };

  const handleDeleteGoods = () => {
    DeleteGoods(selected)
      .then((res) => {
        console.log('Delete 상품 response:', res);
        setRowData(rowData.filter((row) => !selected.includes(Number(row.id))));
        setSelected([]);
      })
      .catch((err) => {
        console.error('Delete 상품 error:', err);
      });

    confirmToggle.toggle();
  };

  const handleSearch = () => {
    GetGoodsList(0, 25, search)
      .then((res) => {
        console.log('Get 검색 결과 response:', res.data.result.goodsDTOList);

        setRowData(formatData(res.data.result.goodsDTOList));
      })
      .catch((err) => {
        console.error('Get 검색 결과 error:', err);
      });
  };

  return (
    <S.Wrapper style={{ height: 'auto' }}>
      <UploadBox title="상품 등록" buttonAction={handleSubmit} width={100} />

      <Typography
        style={{ marginTop: '90px', marginBottom: '20px', fontSize: '20px', fontWeight: 'bold', width: '100%' }}
      >
        상품 목록
      </Typography>
      <div style={{ width: '100%', alignItems: 'start' }}>
        <div style={{ width: '50%' }}>
          <OutlinedInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleSearch();
              }
            }}
            placeholder="상품을 입력하세요"
            style={{ marginBottom: '20px', width: '100%' }}
            sx={{
              '& .MuiOutlinedInput-root': {
                height: '40px',
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility" onClick={() => handleSearch()}>
                    <Iconify icon="eva:search-fill" sx={{ width: 25, height: 25, color: 'black' }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>

        <GoodsSelectTable
          headList={[{ 상품코드: 'id' }, { 상품: 'name' }, { '응모 기간': 'duration' }, { 결과: 'result' }]}
          rowData={rowData}
          setRowData={setRowData}
          selected={selected}
          setSelected={setSelected}
        />
        <S.Row style={{ width: '100%', justifyContent: 'flex-end', marginTop: '20px' }}>
          <S.CustomButton sx={{ mr: '1%' }} onClick={() => deleteToggle.toggle()} disabled={selected.length === 0}>
            상품 삭제
          </S.CustomButton>
          <S.CustomButton onClick={() => navigate('/manageGoodsInfo')}>상품 추가</S.CustomButton>
        </S.Row>
      </div>
      <CustomModal modalConfig={modalConfig} />
      <CustomModal modalConfig={confirmModalConfig} />
    </S.Wrapper>
  );
};

export default ManageGoodsView;
