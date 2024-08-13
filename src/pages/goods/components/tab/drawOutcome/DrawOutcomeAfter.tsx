import { forwardRef, useEffect, useState } from 'react';
import * as S from 'components/common/Components.styles';
import { DrawOutcomeProps } from '../TabContent.types';
import { Card, Table, TableBody, TableContainer } from '@mui/material';
import TableHeader from 'components/CustomTable/TableHeader';
import CustomTableRow from 'components/CustomTable/CustomTableRow';
import { GetDrawList } from 'api/draws.api';

const DrawOutcomeAfter = forwardRef<HTMLElement, DrawOutcomeProps>(({ info }) => {
  const headList = [{ 아이디: 'id' }, { 이름: 'name' }, { '응모한 포인트': 'points' }];
  const [result, setResult] = useState([]);

  useEffect(() => {
    const getDrawList = async () => {
      // 이것도 info.id로 해야하는데, 들어있는 데이터가 없어서 임시로 3으로 설정
      // GetDrawList(3)
      GetDrawList(info.id).then((res) => {
        const response = res.data.result.drawsResponseByGoodsDTOList;
        console.log('DrawOutcomeAfter response: ', response);
        const result = response

          .filter((item) => item.drawStatus === 'WINNER')
          .map((item) => ({
            id: item.memberId,
            name: item.memberName,
            points: item.point,
          }));
        setResult(result);
        console.log('DrawOutcomeAfter response: ', result);
      });
    };
    getDrawList();
  }, [info]);

  return (
    <S.Wrapper style={{ paddingTop: '20px', width: '100%', justifyContent: 'center' }}>
      <Card sx={{ borderRadius: '10px' }}>
        <TableContainer sx={{ overflow: 'unset' }}>
          <Table sx={{ minWidth: 800 }}>
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
  );
});

export default DrawOutcomeAfter;
