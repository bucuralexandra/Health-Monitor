import './Login.css';
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import 'react-calendar/dist/Calendar.css';
import React, {useEffect, useState} from "react";
import Calendar from "react-calendar";
import AppointmentCard from "./AppointmentCard"
import {Button} from "react-bootstrap";
import { margin } from '@mui/system';


function ManageAppointments() {

    const [date, setDate] = useState(new Date());

    const onDateChange = (newDate) => {
        setDate( newDate);
        console.log("New date:" +newDate);
    }

   


    return (
        <div>
        <Header></Header>
        <div className="AppointmentsPage">
            <div style={{width:"fit-content", margin:"auto", marginTop:"2%"}}>
            <Calendar 
                      locale="en-GB" onChange={onDateChange}
                      calendarType="US"
                      value={date}
                      />
            </div>
            <br></br>
            <br></br>
            
           <AppointmentCard date={date}/>
        </div>
        </div>
    );

}


export default ManageAppointments;
