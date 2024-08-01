import { IconButton, InputAdornment, Typography } from '@mui/material';
import * as S from 'components/common/Components.styles';
import Iconify from 'components/common/Iconify/Iconify';
import UploadBox from 'components/uploadBox/UploadBox';
import { useState } from 'react';
import { OutlinedInput } from 'components/searchbar/SearchBar.styles';
import CustomSelectTable from 'components/CustomSelectTable/CustomSelectTable';
import CustomModal from 'components/CustomModal/CustomModal';
import { useToggle } from 'hooks/useToggle';

const ManageMemberView = () => {
  const deleteToggle = useToggle();
  const confirmToggle = useToggle();

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState([]);
  const [isModify, setIsModify] = useState('');

  const [rowData, setRowData] = useState([
    { id: 'alex.js', deptName: '서비스 개발팀', name: '김밤비', point: 5, penaltyCnt: 0 },
    { id: 'bamb.kim', deptName: '서비스 개발팀', name: '김감기', point: 5, penaltyCnt: 2 },
    { id: 'hello.js', deptName: '서비스 개발팀', name: '김미소', point: 5, penaltyCnt: 3 },
  ]);

  const modalConfig = {
    open: deleteToggle.isOpen,
    onClose: deleteToggle.toggle,
    contents: <Typography variant="h6">사원 {selected.length}명을 삭제하시겠습니까?</Typography>,
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

  const handleAddMember = () => {
    //사원 추가
    setRowData([{ id: '', deptName: '', name: '', point: 0, penaltyCnt: 0 }, ...rowData]);
    setIsModify('null');
  };

  const handleDeleteMember = () => {
    //사원 삭제 api 호출
    confirmToggle.toggle();
  };

  return (
    <S.Wrapper style={{ height: 'auto' }}>
      <S.Row style={{ width: '100%', marginBottom: '90px' }}>
        <UploadBox title="복지 포인트 등록" buttonAction={handleSubmit} width={48} />
        <UploadBox title="사원 관리" buttonAction={handleSubmit} width={48} />
      </S.Row>

      <Typography style={{ marginBottom: '15px', fontSize: '20px', fontWeight: 'bold', width: '100%' }}>
        사원 목록
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
          placeholder="성명을 입력하세요"
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
        <CustomSelectTable
          headList={[
            { 아이디: 'id' },
            { 부서: 'deptName' },
            { 성명: 'name' },
            { 복지포인트: 'point' },
            { 잔여패널티: 'penaltyCnt' },
          ]}
          rowData={rowData}
          isModify={isModify}
          setIsModify={setIsModify}
          setRowData={setRowData}
          selected={selected}
          setSelected={setSelected}
        />
        <S.Row style={{ width: '100%', justifyContent: 'flex-end', marginTop: '20px' }}>
          <S.CustomButton sx={{ mr: '1%' }} onClick={() => deleteToggle.toggle()} disabled={selected.length === 0}>
            사원 삭제
          </S.CustomButton>
          <S.CustomButton onClick={() => handleAddMember()} disabled={isModify === 'null'}>
            사원 추가
          </S.CustomButton>
        </S.Row>
      </div>
      <CustomModal modalConfig={modalConfig} />
      <CustomModal modalConfig={confirmModalConfig} />
    </S.Wrapper>
  );
};

export default ManageMemberView;
