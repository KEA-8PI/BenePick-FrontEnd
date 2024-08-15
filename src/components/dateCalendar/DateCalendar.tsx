import React, { useState } from 'react';
import * as S from './DateCalendar.styles';
import moment from 'moment';
import 'components/dateCalendar/DateCalendar.css';
import { GoodsInfoData } from 'pages/manageGoods/manageGoodsInfo/goodsInfo/GoodsInfo.types';

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
        raffleStartAt: e[0].toISOString().slice(0, 19),
        raffleEndAt: e[1].toISOString().slice(0, 19),
      }));
    } else {
      setStartDate(e[0].toISOString().slice(0, 19));
      setEndDate(e[1].toISOString().slice(0, 19));
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
