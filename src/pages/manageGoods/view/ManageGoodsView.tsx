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
  const [apiPage, setApiPage] = useState(0);
  const [page, setPage] = useState(0);

  const navigate = useNavigate();

  const deleteToggle = useToggle();
  const confirmToggle = useToggle();

  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<number[]>([]);

  const [rowDataNum, setRowDataNum] = useState(0);

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
        window.location.reload();
      })
      .catch((err) => {
        console.error('Post 상품 추가 error:', err);
        alert('상품 추가에 실패했습니다. 올바른 형식을 사용했는지 확인해주세요.');
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

  const fetchGoodsList = (apiPage: number, searchTerm = '') => {
    GetGoodsList(apiPage, 25, searchTerm)
      .then((res) => {
        console.log('Get 상품 목록 response:', res.data.result.goodsDTOList);
        const formattedData = formatData(res.data.result.goodsDTOList);

        if (apiPage === 0) {
          setRowData(formattedData);
          setRowDataNum(res.data.result.totalCnt);
        } else {
          setRowData((prev) => [...prev, ...formattedData]);
        }
      })
      .catch((err) => {
        console.error('Get 상품 목록 error:', err);
      });
  };

  useEffect(() => {
    fetchGoodsList(apiPage, search);
  }, [apiPage]);

  useEffect(() => {
    console.log('rowData:', rowData);
  }, [rowData]);

  const handleSearch = () => {
    setPage(0);
    setApiPage(0);
    fetchGoodsList(0, search);
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
          apiPage={apiPage}
          setApiPage={setApiPage}
          totalNum={rowDataNum}
          page={page}
          setPage={setPage}
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
