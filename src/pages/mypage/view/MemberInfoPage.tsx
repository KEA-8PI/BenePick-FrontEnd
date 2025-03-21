import { Avatar, Divider, Typography } from '@mui/material';
import { GetMemberInfo } from 'api/members.api';
import { GetPenaltyHists } from 'api/penaltyHists.api';
import { GetPointHists } from 'api/pointHists.api';
import CustomModal from 'components/CustomModal/CustomModal';
import CustomTable from 'components/CustomTable/CustomTable';
import { ChangePwdModal } from 'components/changePwdModal/ChangePwdModal';
import * as S from 'components/common/Components.styles';
import Iconify from 'components/common/Iconify/Iconify';
import { useToggle } from 'hooks/useToggle';
import { useEffect, useState } from 'react';
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

  const [memberInfo, setMemberInfo] = useState({
    id: '',
    name: '',
    deptName: '',
    point: 0,
    penaltyCnt: 0,
  });

  const [pointHist, setPointHist] = useState([]);
  const [penaltyHist, setPenaltyHist] = useState([]);
  const [pointHistPage, setPointHistPage] = useState(0);
  const [penaltyHistPage, setPenaltyHistPage] = useState(0);
  const [pointHistTotal, setPointHistTotal] = useState(0);
  const [penaltyHistTotal, setPenaltyHistTotal] = useState(0);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetMemberInfo()
      .then((res) => {
        console.log(res);
        setMemberInfo(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false); // End loading after fetching data
      });
  }, []);

  useEffect(() => {
    GetPointHists(pointHistPage, 25)
      .then((res) => {
        console.log('포인트 내역', res);
        pointHistPage === 0
          ? setPointHist(res.data.result.pointHistDTOS)
          : setPointHist((prev) => [...prev, res.data.result.pointHistDTOS]);
        pointHistPage === 0 && setPointHistTotal(res.data.result.totalCnt);
      })
      .catch((err) => {
        console.log('포인트 내역 에러', err);
      });
  }, [pointHistPage]);

  useEffect(() => {
    GetPenaltyHists(penaltyHistPage, 25)
      .then((res) => {
        console.log('패널티 내역', res);
        penaltyHistPage === 0
          ? setPenaltyHist(res.data.result.penaltyResponseDTOList)
          : setPenaltyHist((prev) => [...prev, res.data.result.penaltyResponseDTOList]);
        penaltyHistPage === 0 && setPenaltyHistTotal(res.data.result.totalCnt);
      })
      .catch((err) => {
        console.log('패널티 내역 에러', err);
      });
  }, [penaltyHistPage]);

  if (loading) {
    return <div>Loading...</div>; // 로딩 화면 표시 필요
  }

  return (
    <div style={{ padding: '0 10%' }}>
      <S.Row width={100}>
        <S.ShadowBox width={25} padding={'3%'}>
          <Avatar src={'images/benepick-logo-s.png'} sx={{ width: 100, height: 100 }} />
          <div>
            <S.Row style={{ justifyContent: 'flex-start', marginTop: 20 }}>
              <Iconify icon="ph:user" width={20} sx={{ marginRight: '7%' }} />
              <div style={{ fontWeight: 'bold' }}>{memberInfo.name}</div>
            </S.Row>
            <S.Row style={{ justifyContent: 'flex-start' }}>
              <Iconify icon="ph:building-apartment-fill" width={20} sx={{ marginRight: '7%' }} />
              <div style={{ fontWeight: 'bold' }}>{memberInfo.deptName}</div>
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
                  {memberInfo.point}
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
                  {memberInfo.penaltyCnt}
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
        headList={[{ 날짜: 'createdAt' }, { 내역: 'content' }, { 변동: 'pointChange' }, { '총 포인트': 'totalPoint' }]}
        isPaging={true}
        rowData={pointHist}
        total={pointHistTotal}
        apiPage={pointHistPage}
        setApiPage={setPointHistPage}
      />
      {pointHistTotal === 0 && (
        <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center' }}>포인트 내역이 없습니다.</div>
      )}
      <Typography variant="h5" style={{ margin: '80px 0 15px 0' }}>
        패널티 내역
      </Typography>
      <CustomTable
        headList={[
          { 날짜: 'createdAt' },
          { 내역: 'content' },
          { 변동: 'penaltyCount' },
          { '잔여 패널티': 'totalPenalty' },
        ]}
        isPaging={true}
        rowData={penaltyHist}
        total={penaltyHistTotal}
        apiPage={penaltyHistPage}
        setApiPage={setPenaltyHistPage}
      />
      {penaltyHistTotal === 0 && (
        <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center' }}>패널티 내역이 없습니다.</div>
      )}
      <ChangePwdModal modalConfig={modalConfig} />
      <CustomModal modalConfig={confirmModalConfig} />
    </div>
  );
};

export default MemberInfoPage;
