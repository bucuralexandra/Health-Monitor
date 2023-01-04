import './Login.css';
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import 'react-calendar/dist/Calendar.css';
import React, {useEffect, useState} from "react";
import Calendar from "react-calendar";
import AppointmentCard from "./AppointmentCard"
import {Button} from "react-bootstrap";


function ManageAppointments() {

    const [date, setDate] = useState(new Date());
    const [isVisible, setIsVisible] = useState(false);

    const onDateChange = (newDate) => {
        setDate( newDate);
        console.log("New date:" +newDate);
    }

    const handleVisibility = (e) => {
        console.log("Button is fucking clicked")
        setIsVisible(!isVisible);
    };

    const handleVisibleChange = (e) => {
        console.log(e);
    };

    return (
        <div className="AppointmentsPage">
            <Header></Header>
            <Button onClick={handleVisibility}>Button</Button>
            <Calendar locale="en-GB" onChange={onDateChange}
                      value={date}
                      onVisibleChange={handleVisibleChange}/>
           <AppointmentCard date={date}/>
        </div>
    );

}


export default ManageAppointments;
