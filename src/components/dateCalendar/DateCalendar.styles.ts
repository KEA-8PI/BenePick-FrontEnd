import styled from '@emotion/styled';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface CalendarWrapperProps {
  isOpen: boolean;
}

export const CalendarContainer = styled.div`
  position: relative;
  z-index: 999;
`;

export const CalendarWrapper = styled.div<CalendarWrapperProps>`
  // z-index: 11;
  position: absolute;
  top: 40px;
  right: 2px;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

export const StyledCalendar = styled(Calendar)``;
