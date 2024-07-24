import { Avatar, Divider, Typography } from '@mui/material';
import { CustomModal } from 'components/CustomModal/CustomModal';
import CustomTable from 'components/CustomTable/CustomTable';
import * as S from 'components/common/Components.styles';
import Iconify from 'components/common/Iconify/Iconify';
import { useToggle } from 'hooks/useToggle';
import colors from 'theme/variableColors';

const MemberInfoPage = () => {
  const changePwdToggle = useToggle();
  const changePwdConfirmToggle = useToggle();

  const modalConfig = {
    open: changePwdToggle.isOpen,
    onClose: changePwdToggle.toggle,
    contents: <Typography>비밀번호가 변경되었습니다.</Typography>,
    buttons: { label: '닫기', action: changePwdToggle.toggle },
  };

  return (
    <div style={{ padding: '0 10%' }}>
      <S.Row width={100}>
        <S.ShadowBox width={31}>
          <Avatar
            src={'https://raw.githubusercontent.com/alexjskim/alexjskim/main/alexjskim.jpg '}
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
        <S.ShadowBox width={66}>
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
      />
      <Typography variant="h5" style={{ margin: '80px 0 15px 0' }}>
        패널티 내역
      </Typography>
      <CustomTable
        headList={[{ 날짜: 'date' }, { 내역: 'content' }, { 변동: 'change' }, { '잔여 패널티': 'totalPoint' }]}
      />
      <CustomModal modalConfig={modalConfig} />
    </div>
  );
};

export default MemberInfoPage;
