import { IconButton, InputAdornment, Typography } from '@mui/material';
import * as S from 'components/common/Components.styles';
import Iconify from 'components/common/Iconify/Iconify';
import UploadBox from 'components/uploadBox/UploadBox';
import { useEffect, useState } from 'react';
import { OutlinedInput } from 'components/searchbar/SearchBar.styles';
import CustomSelectTable from 'components/CustomSelectTable/CustomSelectTable';
import CustomModal from 'components/CustomModal/CustomModal';
import { useToggle } from 'hooks/useToggle';
import { PostMemberUpload, PostMemberPointUpload, GetMemberList, DeleteMember } from 'api/memberAdmin.api';

const ManageMemberView = () => {
  const deleteToggle = useToggle();
  const confirmToggle = useToggle();

  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState([]);
  const [isModify, setIsModify] = useState('');

  const [rowDataNum, setRowDataNum] = useState(0);

  const [rowData, setRowData] = useState([]);
  const [apiPage, setApiPage] = useState(0);

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

  const handlePointSubmit = (formData: FormData) => {
    PostMemberPointUpload(formData)
      .then((res) => {
        // console.log('Post 멤버 복지포인트 response:', res);
        window.location.reload();
      })
      .catch((err) => {
        console.error('Post 멤버 복지포인트 error:', err);
        alert('복지포인트 추가에 실패했습니다. 올바른 형식을 사용했는지 확인해주세요.');
      });
  };

  const handleMemberSubmit = (formData: FormData) => {
    PostMemberUpload(formData)
      .then((res) => {
        // console.log('Post 멤버 추가 response:', res);
        window.location.reload();
      })
      .catch((err) => {
        console.error('Post 멤버 추가 error:', err);
        alert('사원 업르드에 실패했습니다. 올바른 형식을 사용했는지 확인해주세요.');
      });
  };

  const handleAddMember = () => {
    //사원 추가
    setRowData([{ id: '', deptName: '', name: '', point: 0, penaltyCnt: 0 }, ...rowData]);
    setIsModify('null');
  };

  const handleDeleteMember = () => {
    //사원 삭제 api 호출
    DeleteMember(selected)
      .then((res) => {
        console.log('Delete 멤버 response:', res);
        setRowData(rowData.filter((row) => !selected.includes(row.id)));
        setSelected([]);
      })
      .catch((err) => {
        console.error('Delete 멤버 error:', err);
      });
    confirmToggle.toggle();
  };

  const fetchMemberList = (apiPage: number, searchTerm = '') => {
    GetMemberList(apiPage, 25, searchTerm)
      .then((res) => {
        console.log('Get 멤버 리스트 response:', res.data.result);
        // const newList = res.data.result.membersDetailResponseDTOList;
        apiPage === 0
          ? setRowData(res.data.result.membersDetailResponseDTOList)
          : setRowData((prevRowData) => [...prevRowData, ...res.data.result.membersDetailResponseDTOList]);
        apiPage === 0 && setRowDataNum(res.data.result.totalCnt);
      })
      .catch((err) => {
        console.error('Get 멤버 리스트 error:', err);
      });
  };

  useEffect(() => {
    fetchMemberList(apiPage, search);
  }, [apiPage, search]);

  const handleSearch = () => {
    setApiPage(0); // Reset to first apiPage on new search
    fetchMemberList(0, search);
  };

  return (
    <S.Wrapper style={{ height: 'auto' }}>
      <S.Row style={{ width: '100%', marginBottom: '90px' }}>
        <UploadBox title="복지 포인트 등록" buttonAction={handlePointSubmit} width={48} />
        <UploadBox title="사원 관리" buttonAction={handleMemberSubmit} width={48} />
      </S.Row>

      <Typography style={{ marginBottom: '15px', fontSize: '20px', fontWeight: 'bold', width: '100%' }}>
        사원 목록
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
            placeholder="성명을 입력하세요"
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
          totalNum={rowDataNum}
          apiPage={apiPage}
          setApiPage={setApiPage}
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
