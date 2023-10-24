import React, { Component, useState } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css"; // Import calendar styles
// import './Calender.css'; // Import custom calendar styles

function Cal() {
  // Create a state variable to store the selected date
  const [date, setDate] = useState(new Date());

  // Define a function to handle date changes
  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <><h2>MY CALENDAR</h2>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Calendar onChange={onChange} value={date} className={"calendar-comp"}/>
      <calendar />
      {/* <div className="calendar-container">
      
    </div> */}
    </>
  );
}

export default Cal;