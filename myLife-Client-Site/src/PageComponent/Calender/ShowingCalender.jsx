import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ShowingCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-full max-w-lg mx-auto">
        <Calendar
          onChange={handleChange}
          value={date}
          className="customCalender transBg rounded-md p-4"
        />
      </div>
    </div>
  );
};

export default ShowingCalendar;
