import { Avatar, Typography } from '@mui/material';
import { CustomModal } from 'components/CustomModal/CustomModal';
import * as S from 'components/common/Components.styles';
import Iconify from 'components/common/Iconify/Iconify';
import { useToggle } from 'hooks/useToggle';

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
    <div>
      <S.Row width={100}>
        <S.ShadowBox width={30}>
          <Avatar
            src={'https://raw.githubusercontent.com/alexjskim/alexjskim/main/alexjskim.jpg '}
            sx={{ width: 100, height: 100 }}
          />
          <S.Row width={65} style={{ justifyContent: 'flex-start', margin: '20px 0 10px 0' }}>
            <Iconify icon="ph:user" width={20} sx={{ marginRight: '7%' }} />
            <div style={{ fontWeight: 'bold' }}>알렉스 (alex.js)</div>
          </S.Row>
          <S.Row width={65} style={{ justifyContent: 'flex-start' }}>
            <Iconify icon="ph:building-apartment-fill" width={20} sx={{ marginRight: '7%' }} />
            <div style={{ fontWeight: 'bold' }}>서비스개발팀</div>
          </S.Row>
        </S.ShadowBox>
        <S.ShadowBox width={60}>
          <h1>사원 정보</h1>
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
        }}
        onClick={() => changePwdToggle.toggle()}
      >
        비밀번호 재설정
      </Typography>
      <CustomModal modalConfig={modalConfig} />
    </div>
  );
};

export default MemberInfoPage;
