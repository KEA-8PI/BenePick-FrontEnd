import colors from 'theme/variableColors';

export const convertResponse = (response: string) => {
  const ResultJson = {
    WINNER: '당첨',
    WAITLIST: '대기',
    CANCEL: '취소',
    NO_SHOW: '노쇼',
    NON_WINNER: '미당첨',
    PROGRESS: '진행중',
    SCHEDULED: '예정',
    COMPLETED: '결과 보기',
  };
  return ResultJson[response];
};

export const convertResponseColor = (response: string) => {
  const ResultColor = {
    WINNER: colors.mint,
    NON_WINNER: colors.pinkGrey,
    WAITLIST: colors.lemon,
    CANCEL: colors.pinkGrey,
    NO_SHOW: colors.buttonPink,
  };
  return ResultColor[response];
};

export const convertStatus = (status: string) => {
  const StatusJson = {
    CONFIRM: '확정',
    WINNER: '확정대기',
    CANCEL: '취소',
    NO_SHOW: '노쇼',
  };
  return StatusJson[status];
};

export const convertStatusColor = (status: string) => {
  const StatusColor = {
    CONFIRM: colors.mint,
    WINNER: colors.purple,
    CANCEL: colors.pinkGrey,
    NO_SHOW: colors.buttonPink,
  };
  return StatusColor[status];
};

export const convertGoodsStatus = (status: string) => {
  const GoodsStatusJson = {
    PROGRESS: '진행',
    SCHEDULED: '예정',
    COMPLETED: '종료',
  };
  return GoodsStatusJson[status];
};

export const convertGoodsStatusColor = (status: string) => {
  switch (status) {
    case 'PROGRESS':
      return colors.primary;
    case 'SCHEDULED':
      return colors.tertiary;
    case 'COMPLETED':
      return colors.pinkGrey;
  }
};
