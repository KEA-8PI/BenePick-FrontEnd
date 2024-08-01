import { Avatar, Divider, Typography } from '@mui/material';
import { CustomModal } from 'components/CustomModal/CustomModal';
import CustomTable from 'components/CustomTable/CustomTable';
import { ChangePwdModal } from 'components/changePwdModal/ChangePwdModal';
import * as S from 'components/common/Components.styles';
import Iconify from 'components/common/Iconify/Iconify';
import { useToggle } from 'hooks/useToggle';
import { useState } from 'react';
import colors from 'theme/variableColors';

const MemberInfoPage = () => {
  const changePwdToggle = useToggle();
  const changePwdConfirmToggle = useToggle();

  const modalConfig = {
    open: changePwdToggle.isOpen,
    onClose: changePwdToggle.toggle,
    buttonAction: changePwdConfirmToggle.toggle,
  };

  const confirmModalConfig = {
    open: changePwdConfirmToggle.isOpen,
    onClose: changePwdConfirmToggle.toggle,
    contents: <Typography>비밀번호가 변경되었습니다.</Typography>,
  };

  const [rowData, setRowData] = useState([
    {
      date: '2021-10-15',
      change: '-50',
      content: 'MacBook Pro 14',
      totalPoint: 950,
      category: '전자기기',
      point: 1000,
      result: '당첨',
    },
    {
      date: '2021-10-19',
      change: '+50',
      content: 'MacBook Pro 14',
      totalPoint: 1000,
      category: '여행/티켓',
      point: 512,
      result: '미당첨',
    },
    {
      date: '2021-10-10',
      change: '+500',
      content: 'MacBook Pro 14',
      totalPoint: 1000,
      category: '문화생활',
      point: 120,
      result: '노쇼',
    },
    {
      date: '2021-10-10',
      change: '+500',
      content: 'MacBook Pro 14',
      totalPoint: 1000,
      category: '문화생활',
      point: 120,
      result: '취소',
    },
  ]);

  return (
    <div style={{ padding: '0 10%' }}>
      <S.Row width={100}>
        <S.ShadowBox width={25} padding={'3%'}>
          <Avatar
            src={'https://img.khan.co.kr/news/2017/01/02/l_2017010301000210000020622.jpg'}
            sx={{ width: 100, height: 100 }}
          />
          <div>
            <S.Row style={{ justifyContent: 'flex-start', margin: '20px 0 10px 0' }}>
              <Iconify icon="ph:user" width={20} sx={{ marginRight: '7%' }} />
              <div style={{ fontWeight: 'bold' }}>알렉스 (alex.js)</div>
            </S.Row>
            <S.Row style={{ justifyContent: 'flex-start' }}>
              <Iconify icon="ph:building-apartment-fill" width={20} sx={{ marginRight: '7%' }} />
              <div style={{ fontWeight: 'bold' }}>서비스개발팀</div>
            </S.Row>
          </div>
        </S.ShadowBox>
        <S.ShadowBox width={60}>
          <S.Row width={70} style={{ height: '100%', alignItems: 'center' }}>
            <div style={{ alignItems: 'center', width: '30%', display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6" sx={{ mb: '15%' }}>
                복지 포인트
              </Typography>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Typography variant="h3" color="#FFCD2A" sx={{ mr: '10px', fontWeight: 'bold' }}>
                  1500
                </Typography>
                <Typography variant="h6">점</Typography>
              </div>
            </div>
            <Divider orientation="vertical" flexItem />
            <div style={{ alignItems: 'center', width: '30%', display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6" sx={{ mb: '15%' }}>
                잔여 패널티
              </Typography>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Typography variant="h3" color={colors.primary} sx={{ mr: '10px', fontWeight: 'bold' }}>
                  3
                </Typography>
                <Typography variant="h6">회</Typography>
              </div>
            </div>
          </S.Row>
        </S.ShadowBox>
      </S.Row>
      <Typography
        variant="subtitle2"
        sx={{
          fontSize: '13px',
          color: '#9E9797',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
          textAlign: 'right',
          mt: '10px',
        }}
        onClick={() => changePwdToggle.toggle()}
      >
        비밀번호 재설정
      </Typography>
      <Typography variant="h5" style={{ margin: '50px 0 15px 0' }}>
        복지 포인트 내역
      </Typography>
      <CustomTable
        headList={[{ 날짜: 'date' }, { 내역: 'content' }, { 변동: 'change' }, { '총 포인트': 'totalPoint' }]}
        isPaging={true}
        rowData={rowData}
        setRowData={setRowData}
      />
      <Typography variant="h5" style={{ margin: '80px 0 15px 0' }}>
        패널티 내역
      </Typography>
      <CustomTable
        headList={[{ 날짜: 'date' }, { 내역: 'content' }, { 변동: 'change' }, { '잔여 패널티': 'totalPoint' }]}
        isPaging={true}
        rowData={rowData}
        setRowData={setRowData}
      />
      <ChangePwdModal modalConfig={modalConfig} />
      <CustomModal modalConfig={confirmModalConfig} />
    </div>
  );
};

export default MemberInfoPage;
