import { Box } from "@mui/material";
import React from "react";
import ReactCalendar from "react-calendar";

export default function Calendar() {
  return (
    <Box>
      <ReactCalendar
        className="react-calendar p-2"
        minDate={new Date()}
        maxDate={new Date(2023, 11, 31)}
        onClickDay={(date) => console.log(date)}
        view="month"
      />
    </Box>
  );
}
