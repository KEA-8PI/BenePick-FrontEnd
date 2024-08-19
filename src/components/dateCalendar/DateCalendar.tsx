import React from 'react';
import * as S from './DateCalendar.styles';
import moment from 'moment';
import 'components/dateCalendar/DateCalendar.css';
import { GoodsInfoData } from 'pages/manageGoods/manageGoodsInfo/goodsInfo/GoodsInfo.types';
import { formatDateObject } from 'pages/manageGoods/utils/formatData';

const DateCalendar = ({
  isOpen,
  setIsOpen,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  setState,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  startDate: string;
  setStartDate?: React.Dispatch<React.SetStateAction<string>>;
  endDate: string;
  setEndDate?: React.Dispatch<React.SetStateAction<string>>;
  setState?: React.Dispatch<React.SetStateAction<GoodsInfoData>>;
}) => {
  const changeDate = (e) => {
    if (setState) {
      setState((prev) => ({
        ...prev,
        raffleStartAt: formatDateObject(e[0].toString()),
        raffleEndAt: formatDateObject(e[1].toString()),
      }));
    } else {
      setStartDate(formatDateObject(e[0].toString()));
      setEndDate(formatDateObject(e[1].toString()));
      // console.log('raffleStartAt', formatDateObject(e[0].toString()));
      // console.log('raffleEndAt', formatDateObject(e[1].toString()));
    }
  };

  return (
    <S.CalendarContainer>
      <S.CalendarWrapper isOpen={isOpen}>
        <S.StyledCalendar
          onChange={changeDate}
          selectRange={true}
          formatDay={(locale, date) => moment(date).format('DD')}
        />
      </S.CalendarWrapper>
    </S.CalendarContainer>
  );
};

export default DateCalendar;
