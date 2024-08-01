import { IconButton, InputAdornment, Typography } from '@mui/material';
import { CustomModal } from 'components/CustomModal/CustomModal';
import GoodsSelectTable from 'components/GoodsSelectTable/GoodsSelectTable';
import * as S from 'components/common/Components.styles';
import Iconify from 'components/common/Iconify/Iconify';
import { OutlinedInput } from 'components/searchbar/SearchBar.styles';
import UploadBox from 'components/uploadBox/UploadBox';
import { useToggle } from 'hooks/useToggle';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ManageGoodsView = () => {
  const navigate = useNavigate();

  const deleteToggle = useToggle();
  const confirmToggle = useToggle();

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState([]);

  const raffleStartAt = '2021-10-01';
  const raffleEndAt = '2021-10-31';

  const [rowData, setRowData] = useState([
    {
      id: '1',
      name: 'MacBook Pro 15 WIFI 256GB',
      duration: `${raffleStartAt}~${raffleEndAt}`,
      result: '응모중',
    },
    {
      id: '2',
      name: 'MacBook Air 15 M2 CPU 8코어 GPU 10코어 8GB 256GB 미드나이트',
      duration: `${raffleStartAt}~${raffleEndAt}`,
      result: '결과 보기',
    },
    {
      id: '5',
      name: 'MacBook Air 15 M2 CPU 8코어 GPU 10코어 8GB 256GB 미드나이트',
      duration: `${raffleStartAt}~${raffleEndAt}`,
      result: '응모중',
    },
    {
      id: '6',
      name: 'MacBook Pro 15 WIFI 256GB',
      duration: `${raffleStartAt}~${raffleEndAt}`,
      result: '응모중',
    },
    {
      id: '11',
      name: 'MacBook Air 15 M2 CPU 8코어 GPU 10코어 8GB 256GB 미드나이트',
      duration: `${raffleStartAt}~${raffleEndAt}`,
      result: '결과 보기',
    },
    {
      id: '15',
      name: 'MacBook Air 15 M2 CPU 8코어 GPU 10코어 8GB 256GB 미드나이트',
      duration: `${raffleStartAt}~${raffleEndAt}`,
      result: '응모중',
    },
  ]);

  const modalConfig = {
    open: deleteToggle.isOpen,
    onClose: deleteToggle.toggle,
    contents: <Typography variant="h6">상품 {selected.length}개를 삭제하시겠습니까?</Typography>,
    buttons: { label: '확인', action: () => handleDeleteMember() },
  };

  const confirmModalConfig = {
    open: confirmToggle.isOpen,
    onClose: confirmToggle.toggle,
    contents: <Typography variant="h6">삭제되었습니다.</Typography>,
  };

  const handleSubmit = () => {
    //서버에 파일 업로드
  };

  const handleAddGoods = () => {
    //상품 추가
  };

  const handleDeleteMember = () => {
    //상품 삭제 api 호출
    confirmToggle.toggle();
  };
  return (
    <S.Wrapper style={{ height: 'auto' }}>
      <UploadBox title="상품 등록" buttonAction={handleSubmit} width={100} />

      <Typography
        style={{ marginTop: '90px', marginBottom: '15px', fontSize: '20px', fontWeight: 'bold', width: '100%' }}
      >
        상품 목록
      </Typography>
      <div style={{ width: '80%' }}>
        <OutlinedInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              setQuery(search);
            }
          }}
          placeholder="상품을 입력하세요"
          style={{ marginBottom: '20px', width: '100%' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" onClick={() => setQuery(search)}>
                  <Iconify icon="eva:search-fill" sx={{ width: 25, height: 25, color: 'black' }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div style={{ width: '90%' }}>
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
