import './Login.css';
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import 'react-calendar/dist/Calendar.css';
import React, {useEffect, useState} from "react";
import Calendar from "react-calendar";
import AppointmentCard from "./AppointmentCard"

function ManageAppointments(props) {

    const [date, setDate] = useState(new Date());
  


    const onDateChange = (newDate) => {
        setDate(newDate);
        console.log(newDate);
    }
    return (
        <div className="MainPage">
            <Header></Header>
            <Calendar locale="en-GB" onChange={onDateChange}
                      value={date}
                      showNeighboringMonth={false}/>
           <AppointmentCard date={date}/>
        </div>
    );

}


export default ManageAppointments;
