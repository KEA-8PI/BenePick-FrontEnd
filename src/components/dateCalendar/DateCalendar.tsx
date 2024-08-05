import React, { useState } from 'react';
import * as S from './DateCalendar.styles';
import moment from 'moment';
import 'components/dateCalendar/DateCalendar.css';

const DateCalendar = ({
  isOpen,
  setIsOpen,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  startDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  endDate: Date;
  setEndDate: React.Dispatch<React.SetStateAction<Date>>;
}) => {
  const changeDate = (e) => {
    setStartDate(e[0]);
    setEndDate(e[1]);
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
