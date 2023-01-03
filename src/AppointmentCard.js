import React, {useEffect, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns'

function AppointmentCard(props)
{
    const [id, setId] = useState(0);
    const [show, setShow] = useState(false);
    const [approvedAppointments, SetApprovedAppointments] = useState([]);
    const [pendingAppointments, SetPendingAppointments] = useState([]);
    const [colors, setColors] = useState(new Map());

    const handleClose = () => setShow(false);

    const handleRemoveAppointment = () => {
        setShow(false)
        APPOINTMENTS= APPOINTMENTS.filter(item=>item.id!==id);
    }
    useEffect(() => {
        console.log("Date selected " +format(props.date, 'dd-MM-yyyy'));
        const newList = APPOINTMENTS.filter((item) => item.date == format(props.date, 'dd-MM-yyyy'));
        const approvedList= newList.filter(item=> item.status!=="pending");
        const pendingList= newList.filter(item=> item.status==="pending")
        SetApprovedAppointments(approvedList);
        SetPendingAppointments(pendingList);
        console.log(props.date)
    }, [props,APPOINTMENTS]);

    const handleApprove =(id)=>
    {
        let appointment=pendingAppointments.find(item=>item.id==id)
        const pendingList= pendingAppointments.filter(item=> item.id!==id);
        appointment.status="approved";
        let approvedList= approvedAppointments;
        approvedList.push(appointment);
        //const approvedList= approvedAppointments.push(appointment);
        SetPendingAppointments(pendingList);
        SetApprovedAppointments(approvedList);
    }
    const approve= (id) =>{
        setShow(false);
        handleApprove(id);
    }

    const deny= (id)=> {
        setShow(true);
        setId(id);
    }

    return(<div style={{display: "flex"}}>
                <div className="approvedAppointments">
                        {approvedAppointments && approvedAppointments.map((item) => (
                            <div>
                                <div className='d-flex flex-wrap justify-content-center appointment'> 
                                    <div className='p-2 flex-fill ' key={item.id} id="element" >
                                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                                        <div id="container">
                                            <div className="product-details" >
                                                <h1>{item.name}</h1>
                                                <br></br>
                                                <h1 style={{fontSize:"14px"}}>{item.motive}</h1>
                                                <br></br>
                                                <br></br>

                                                <div className="control" hidden={ item.status === "approved"}>
                                                    <Button variant="danger" size="sm" disabled={colors.get(item.id)==="rgba(255,130,130,0.6)"} style={{marginRight: "0.5em" }} onClick={() => deny(item.id)}>Deny</Button>
                                                    <Button variant="dark" size="sm" disabled={colors.get(item.id)==="rgba(255,130,130,0.6)"} onClick={() => approve(item.id)}>Approve</Button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                <div className="pendingAppointments">
                    {pendingAppointments && pendingAppointments.map((item)=>(
                            <div className='p-2 flex-fill ' key={item.id} id="element" >
                                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                                <div id="container">
                                    <div className="product-details" >
                                        <h1>{item.name}</h1>
                                        <br></br>
                                        <h1 style={{fontSize:"14px"}}>{item.motive}</h1>
                                        <br></br>
                                        <br></br>
                                        <div className="control" hidden={ item.status === "approved"}>
                                            <Button variant="danger" size="sm" disabled={colors.get(item.id)==="rgba(255,130,130,0.6)"} style={{marginRight: "0.5em" }} onClick={() => deny(item.id)}>Deny</Button>
                                            <Button variant="dark" size="sm" disabled={colors.get(item.id)==="rgba(255,130,130,0.6)"} onClick={() => approve(item.id)}>Approve</Button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                    ))}
                </div>
               
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cancel Appointment</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to cancel this appointment?</Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="danger"  onClick={handleRemoveAppointment}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
     )
}

let APPOINTMENTS = [
    {
        id: "1",
        date: "03-01-2023",
        time: "12:20",
        name : "Matei Pop",
        doctor : "Dr. Who",
        motive : "Control",
        status : "pending"
    },
    {
        id : "2",
        date: "03-01-2023",
        time: "12:20",
        name : "Bucur Alexandra",
        doctor : "Dr. Who",
        motive : "PreOp",
        status : "pending"
    },
    {
        id : "3",
        date: "03-01-2023",
        time: "12:20",
        name : "Sergiu Gaga",
        doctor : "Dr. Who",
        motive : "Control",
        status : "pending"
    },
    {
        id : "4",
        date: "03-01-2023",
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
    },
    {
        id : "6",
        date: "03-01-2023",
        time: "12:20",
        name : "Matei Pop approved",
        doctor : "Dr. Who",
        motive : "Control",
        status : "approved"
    },
    {
        id : "7",
        date: "03-01-2023",
        time: "12:20",
        name : "Bucur Alexandra approved",
        doctor : "Dr. Who",
        motive : "PreOp",
        status : "approved"
    },
    {
        id : "8",
        date: "03-01-2023",
        time: "12:20",
        name : "Sergiu Gaga approved",
        doctor : "Dr. Who",
        motive : "Control",
        status : "approved"
    },
    {
        id : "9",
        date: "03-01-2023",
        time: "12:20",
        name : "Mihai Pop approved",
        doctor : "Dr. Who",
        motive : "Control",
        status : "approved"
    },
    {
        id : "10",
        date: "03-01-2023",
        time: "12:20",
        name : "Maria Antoaneta approved",
        doctor : "Dr. Who",
        motive : "Control",
        status : "approved"
    }
]
export default AppointmentCard;