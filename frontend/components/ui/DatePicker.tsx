"use client";

import React, { useState, useRef } from "react";

interface CustomDatePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  value,
  onChange,
}) => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(value || today);
  const [currentMonth, setCurrentMonth] = useState(selectedDate.getMonth());
  const [currentYear, setCurrentYear] = useState(selectedDate.getFullYear());
  const datepickerRef = useRef<HTMLDivElement>(null);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const handleDayClick = (day: number) => {
    const newDate = new Date(currentYear, currentMonth, day);
    setSelectedDate(newDate);
    if (onChange) onChange(newDate);
  };

  const handleMonthChange = (offset: number) => {
    let newMonth = currentMonth + offset;
    let newYear = currentYear;

    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }

    const maxDays = getDaysInMonth(newMonth, newYear);
    const newDay = Math.min(selectedDate.getDate(), maxDays);

    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
    setSelectedDate(new Date(newYear, newMonth, newDay));
  };

  return (
    <div className="relative w-full font-roboto" ref={datepickerRef}>
      <div className="relative w-full bg-white border border-gray-300 rounded-md shadow-lg p-4 z-50">
        {/* Month & Year */}
        <div className="flex justify-between items-center mb-2">
          <button
            onClick={() => handleMonthChange(-1)}
            className="p-2 text-gray-600 hover:bg-gray-200 rounded-sm w-10"
          >
            ◀
          </button>
          <span className="text-gray-800 font-semibold">
            {months[currentMonth]} {currentYear}
          </span>
          <button
            onClick={() => handleMonthChange(1)}
            className="p-2 text-gray-600 hover:bg-gray-200 rounded-sm w-10"
          >
            ▶
          </button>
        </div>

        {/* Day Labels */}
        <div className="grid grid-cols-7 text-center text-gray-600 text-sm">
          {days.map((day) => (
            <div key={day} className="py-1 font-medium">
              {day}
            </div>
          ))}
        </div>

        {/* Days of the Month */}
        <div className="grid grid-cols-7 text-center">
          {Array.from({
            length: new Date(currentYear, currentMonth, 1).getDay(),
          }).map((_, index) => (
            <div key={`empty-${index}`} className="py-2"></div>
          ))}

          {Array.from({
            length: getDaysInMonth(currentMonth, currentYear),
          }).map((_, day) => (
            <div
              key={day + 1}
              onClick={() => handleDayClick(day + 1)}
              className={`py-2 cursor-pointer rounded-sm font-medium ${
                selectedDate.getDate() === day + 1 &&
                selectedDate.getMonth() === currentMonth &&
                selectedDate.getFullYear() === currentYear
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200 text-gray-800"
              }`}
            >
              {day + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomDatePicker;
