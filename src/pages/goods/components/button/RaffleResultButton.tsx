import { Button, Box, Typography, Card, Table, TableBody, TableContainer } from '@mui/material';

import colors from 'theme/variableColors';
import * as S from 'components/common/Components.styles';
import { HashInput } from 'components/bigCustomModal/bigCustomModal.styles';
import BigCustomModal from 'components/bigCustomModal/bigCustomModal';
import { IModalConfig } from 'components/bigCustomModal/bigCustomModal.types';

import TableHeader from 'components/CustomTable/TableHeader';
import CustomTableRow from 'components/CustomTable/CustomTableRow';
import { useToggle } from 'hooks/useToggle';

const seeds = 13241342342798;

const headList = [{ 아이디: 'id' }, { 이름: 'name' }, { '응모한 포인트': 'points' }];

const rowData = [
  { id: 'example@google.com', name: '김미소', points: 600 },
  { id: 'example@google.com', name: '남소미', points: 650 },
  { id: 'example@google.com', name: '변상연', points: 120 },
  { id: 'benepick04', name: '박현서', points: 200 },
  { id: 'benepick05', name: '이소정', points: 100 },
];

const RaffleResultButton = () => {
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
          <Typography style={{ paddingRight: '70px' }}>설정된 해시 </Typography>
          <Typography>{seeds} </Typography>
        </Box>
        <S.Row style={{ fontSize: '17px', alignContent: 'center', alignItems: 'center', paddingTop: '20px' }}>
          <Typography style={{ paddingRight: '100px' }}>테스트</Typography>
          <HashInput placeholder="해시 값을 입력해주세요." />
        </S.Row>

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
        isSecondModalToggle.toggle();
      },
      label: '결과 돌려보기',
    },
  };

  const secondModalConfig: IModalConfig = {
    open: isSecondModalToggle.isOpen,
    onClose: isSecondModalToggle.toggle,
    contents: (
      <Box display="flex" flexDirection="column" height="100%">
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
                  {rowData.map((row, index) => (
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
