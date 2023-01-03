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
    const [appointments, SetAppointments] = useState([]);
    const [colors, setColors] = useState(new Map());

    const handleClose = () => setShow(false);

    const handleRemoveAppointment = () => {
        setShow(false)
        const newList = appointments.filter((item) => item.id !== id);
        SetAppointments(newList);
    }
    useEffect(() => {

        console.log("Date selected " +format(props.date, 'dd-MM-yyyy'));
        const newList = props.appointments.filter((item) => item.date == format(props.date, 'dd-MM-yyyy'));
        SetAppointments(newList);
    }, [props]);


    function approve(id) {
        setShow(true);

    }

    function deny(id) {
        setShow(false);
    }

    return(
        <div className='d-flex flex-wrap justify-content-center appointment'>

            {appointments && appointments.map((item) => (
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
                                <Button variant="danger" size="sm" disabled={colors.get(item.id)==="rgba(255,130,130,0.6)"} style={{marginRight: "0.5em" }} onClick={() => approve(item.id)}>Deny</Button>
                                <Button variant="dark" size="sm" disabled={colors.get(item.id)==="rgba(255,130,130,0.6)"} onClick={() => deny(item.id)}>Approve</Button>
                            </div>

                        </div>
                    </div>
                </div>
            ))}
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
export default AppointmentCard;