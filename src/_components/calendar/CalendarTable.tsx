import {
  addDays,
  endOfMonth,
  endOfWeek,
  format,
  startOfMonth,
  startOfWeek
} from "date-fns";
import React, { useMemo } from "react";
import CalendarCell from "./CalendarCell";
import { CellCardTable } from "./type/schedule.types";

// CalendarTable로 이름 변경
const CalendarTable = ({
  currentMonth,
  cellCardTable
}: {
  currentMonth: Date;
  cellCardTable: CellCardTable;
}) => {
  // 이번 달의 시작 일자(요일 등 포함)
  const monthStart = startOfMonth(currentMonth);

  // 이번 달의 시작 일자 기준 주의 시작
  const dayStart = startOfWeek(monthStart);

  // 이번 달의 마지막 일자
  const monthEnd = endOfMonth(currentMonth);

  // 이번 달의 마지막 일자 기준 주의 마지막
  const dayEnd = endOfWeek(monthEnd);

  // dayStart ~ dayEnd 까지 7줄 씩 뿌려주면 됨

  const days: Date[] = useMemo(() => {
    const dayList = [];
    for (let i = dayStart; i <= dayEnd; i = addDays(i, 1)) {
      dayList.push(i);
    }
    console.log("dayList", dayList);
    return dayList;
  }, [currentMonth]);

  // const days = [];

  // for (let i = dayStart; i <= dayEnd; i = addDays(i, 1)) {
  //   days.push(i);
  // }
  // return convertScheduleDataToCellCardTable(scheduleList);

  return (
    <ul className="grid grid-cols-7">
      {days.map((day) => (
        <CalendarCell
          key={day.toISOString()}
          day={day}
          cellCardList={cellCardTable[format(day, "yyyy-MM-dd")]}
        />
      ))}
    </ul>
  );
};

export default CalendarTable;
