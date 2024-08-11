import { useEffect, useState } from 'react';
import { Button, Box, Typography, Card, Table, TableBody, TableContainer } from '@mui/material';
import colors from 'theme/variableColors';
import * as S from 'components/common/Components.styles';
import { HashInput } from 'components/bigCustomModal/bigCustomModal.styles';
import BigCustomModal from 'components/bigCustomModal/bigCustomModal';
import { IModalConfig } from 'components/bigCustomModal/bigCustomModal.types';
import TableHeader from 'components/CustomTable/TableHeader';
import CustomTableRow from 'components/CustomTable/CustomTableRow';
import { useToggle } from 'hooks/useToggle';
import { GetGoodsSeed } from 'api/goods.api';
import { GetDrawVerification } from 'api/draws.api';

const RaffleResultButton = ({ info }) => {
  const [seeds, setSeeds] = useState();
  const [hashValue, setHashValue] = useState('');
  const [result, setResult] = useState([]);
  const headList = [{ 아이디: 'id' }, { 이름: 'name' }, { '응모한 포인트': 'points' }];

  // 해시값 입력 시 상태 업데이트
  const handleInputChange = (e) => {
    setHashValue(e.target.value);
  };

  // 시드값 가져오기
  useEffect(() => {
    const getSeeds = async () => {
      const response = await GetGoodsSeed(info.id);
      setSeeds(response.data.result.seeds);
    };
    getSeeds();
  }, [info]);

  // 모달창 불러오기
  const isFirstModalToggle = useToggle();
  const isSecondModalToggle = useToggle();

  const firstModalConfig: IModalConfig = {
    open: isFirstModalToggle.isOpen,
    onClose: isFirstModalToggle.toggle,
    contents: (
      <Box display="flex" flexDirection="column" height="100%">
        <Typography style={{ fontSize: '17px', fontWeight: 'bold' }}>결과 돌려보기</Typography>
        <Box
          style={{
            fontSize: '17px',
            display: 'flex',
            flexDirection: 'row',
            paddingTop: '20px',
          }}
        >
          <Typography style={{ paddingRight: '70px', whiteSpace: 'nowrap' }}>설정된 해시 </Typography>
          <Box style={{ width: '350px', maxWidth: 'calc(100% - 50px)', wordBreak: 'break-word' }}>
            <Typography>{seeds}</Typography>
          </Box>
        </Box>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            fontSize: '17px',
            alignContent: 'center',
            alignItems: 'center',
            paddingTop: '20px',
          }}
        >
          <Typography style={{ paddingRight: '100px' }}>테스트</Typography>
          <HashInput placeholder="해시 값을 입력해주세요." value={hashValue} onChange={handleInputChange} />
        </Box>

        <img
          src="/images/benepickLogo.png"
          alt="logo"
          width={230}
          height={67}
          style={{ justifyContent: 'center', paddingTop: '30px', paddingLeft: '150px' }}
        />
      </Box>
    ),
    buttons: {
      action: () => {
        // GetDrawVerification(info.id, hashValue)
        // 데이터 값이 없어서 임시로 goodsId=3으로 설정
        GetDrawVerification(3, hashValue)
          .then((res) => {
            const response = res.data.result.drawsList;
            const winners = response
              .filter((item) => item.status === 'WINNER')
              .map((item) => ({
                id: item.memberId,
                name: item.memberName,
                // point: item.points,
              }));
            setResult(winners);
            console.log('추첨 검증 결과:', winners);
            isSecondModalToggle.toggle();
          })
          .catch((error) => {
            if (error.response) {
              console.error('응모 에러:', error.response.data);
            } else if (error.request) {
              console.error('응모 에러: 서버로부터 응답이 없습니다.', error.request);
            } else {
              console.error('응모 에러:', error.message);
            }
          });
      },
      label: '결과 돌려보기',
    },
  };

  const secondModalConfig: IModalConfig = {
    open: isSecondModalToggle.isOpen,
    onClose: isSecondModalToggle.toggle,
    contents: (
      <Box display="flex" flexDirection="column" width="90%" height="100%">
        <Typography style={{ fontSize: '17px', fontWeight: 'bold' }}>결과 돌려보기</Typography>
        <Typography style={{ fontSize: '17px', display: 'flex', flexDirection: 'row', paddingTop: '20px' }}>
          당첨자 목록
        </Typography>

        <S.Wrapper style={{ paddingTop: '20px', height: '70%', justifyContent: 'center', alignContent: 'center' }}>
          <Card sx={{ borderRadius: '10px', overflow: 'auto' }}>
            <TableContainer sx={{ overflow: 'auto', maxHeight: '100%', width: '100%' }}>
              <Table sx={{ minWidth: '520px' }}>
                <TableHeader
                  headLabel={headList.map((head) => {
                    const key = Object.keys(head)[0];
                    return { id: head[key], label: key };
                  })}
                />
                <TableBody>
                  {result.map((row, index) => (
                    <CustomTableRow
                      key={index}
                      index={index}
                      columns={headList.map((head) => {
                        const key = Object.keys(head)[0];
                        return { id: head[key], label: row[head[key] as keyof typeof row] };
                      })}
                    />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </S.Wrapper>
      </Box>
    ),
    buttons: {
      action: () => {
        isFirstModalToggle.toggle();
      },
      label: '재실행',
    },
  };
  return (
    <div>
      <Button
        style={{
          width: '400px',
          height: '45px',
          fontSize: '17px',
          backgroundColor: colors.primary,
          color: 'white',
        }}
        onClick={() => isFirstModalToggle.toggle()}
      >
        결과 돌려보기
      </Button>

      <BigCustomModal modalConfig={firstModalConfig} />
      <BigCustomModal modalConfig={secondModalConfig} />
    </div>
  );
};

export default RaffleResultButton;
