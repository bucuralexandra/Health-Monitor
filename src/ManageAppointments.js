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
    const [approvedAppointments, setApprovedAppointments] = useState(APPROVED_APPOINTMENTS);


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
            <div style={{display: "flex"}}>
                <div className="pendingAppointments">
                    <AppointmentCard date={date} appointments={PENDING_APPOINTMENTS}/>
                </div>
                <div className="approvedAppointments">
                    <AppointmentCard date={date} appointments={APPROVED_APPOINTMENTS}/>
                </div>
            </div>
        </div>
    );

}

const PENDING_APPOINTMENTS = [
    {
        id : "1",
        date: "03-01-2023",
        time: "12:20",
        name : "Matei Pop",
        doctor : "Dr. Who",
        motive : "Control",
        status : "pending"
    },
    {
        id : "2",
        date: "12-12-2022",
        time: "12:20",
        name : "Bucur Alexandra",
        doctor : "Dr. Who",
        motive : "PreOp",
        status : "pending"
    },
    {
        id : "3",
        date: "12-12-2022",
        time: "12:20",
        name : "Sergiu Gaga",
        doctor : "Dr. Who",
        motive : "Control",
        status : "pending"
    },
    {
        id : "4",
        date: "12-12-2022",
        time: "12:20",
        name : "Mihai Pop",
        doctor : "Dr. Who",
        motive : "Control",
        status : "pending"
    },
    {
        id : "5",
        date: "03-01-2023",
        time: "12:20",
        name : "Maria Antoaneta",
        doctor : "Dr. Who",
        motive : "Control",
        status : "pending"
    }
]

const APPROVED_APPOINTMENTS = [
    {
        id : "1",
        date: "03-01-2023",
        time: "12:20",
        name : "Matei Pop approved",
        doctor : "Dr. Who",
        motive : "Control",
        status : "approved"
    },
    {
        id : "2",
        date: "12-12-2022",
        time: "12:20",
        name : "Bucur Alexandra approved",
        doctor : "Dr. Who",
        motive : "PreOp",
        status : "approved"
    },
    {
        id : "3",
        date: "12-12-2022",
        time: "12:20",
        name : "Sergiu Gaga approved",
        doctor : "Dr. Who",
        motive : "Control",
        status : "approved"
    },
    {
        id : "4",
        date: "12-12-2022",
        time: "12:20",
        name : "Mihai Pop approved",
        doctor : "Dr. Who",
        motive : "Control",
        status : "approved"
    },
    {
        id : "5",
        date: "12-12-2022",
        time: "12:20",
        name : "Maria Antoaneta approved",
        doctor : "Dr. Who",
        motive : "Control",
        status : "approved"
    }
]


export default ManageAppointments;
