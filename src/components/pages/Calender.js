import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Box } from "@mui/material";

import React from "react";
const Calender = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          // maxWidth: 300, // Decrease the maximum width as needed
          maxHeight: 300, // Decrease the maximum height as needed
          mx: "auto",
          my: 2,
          p: 2,
          bgcolor: "background.paper",
          boxShadow: 3,
          borderRadius: 10,
        }}
      >
        <DateCalendar
          sx={{
            "& .Mui-selected": {
              bgcolor: "success.main",
              color: "white",
            },
            "& .MuiPickersDay-today": {
              border: "1px solid",
              bgcolor: "success.main",
            },
        
          }}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default Calender;
