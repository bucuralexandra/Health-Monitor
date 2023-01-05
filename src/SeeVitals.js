import './Login.css';
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import 'react-calendar/dist/Calendar.css';
import React, {useEffect, useRef, useState} from "react";
import userLogo from "./images/person-circle.svg";
import {Button, Modal} from "react-bootstrap";
import patients from "./Patients.json";
import bellLogoGreen from "./images/bell-fill-green.svg"
import bellLogoRed from "./images/bell-fill-red.svg"
import * as PropTypes from "prop-types";
import {TextareaAutosize} from "@mui/material";
import data from "bootstrap/js/src/dom/data";
import {Label} from "@mui/icons-material";

function Popup(props) {
    return null;
}

function SeeVitals() {


    const [show, setShow] = useState(false);
    const [selecteduser, setSelecteduser] = useState({});
    const handleClose = () => setShow(false);

    const ref = useRef(null);

    const sendChat = event => {
        console.log(ref.current.value);

        let newChat = {};
        newChat.id = CHAT_MESSAGES.length;
        newChat.idUser = selecteduser.id;
        newChat.text =  document.getElementById("message").value;
        console.log(newChat);
        document.getElementById("message").value = "";
        CHAT_MESSAGES.push(newChat);
        var ul = document.getElementById("lista_mesaje");
        var li = document.createElement("li")
        li.innerHTML = "<div class='div-chat'><label class='label-chat' " + ">" + newChat.text + "</label><br/><br/></div>";
        ul.appendChild(li);
    };

    const selectUser = (id) => {
        setSelecteduser(patients[id])
        setShow(true);
    }

    useEffect(() => {
        localStorage.setItem("Chat_list", CHAT_MESSAGES);
    } , [CHAT_MESSAGES]);
    return (
        <div className="SeeVitalsPage">
            <Header></Header>
            <ul>
                {patients.map((item) => (
                    <li key={item.id}>
                        <div className='p-2 flex-fill ' key={item.id} id="element" >
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                            <div id="container" style={{width: "92vw", padding: "17px"}}>
                                <img id="image" src={userLogo} alt={userLogo}/>
                                <Button variant="outline-dark" onClick={ () => selectUser(item.id)}>Contact</Button>
                                <img  hidden={item.currentHeartRate > item.maxHeartRate} id="image" src={bellLogoGreen} alt={bellLogoGreen} style={{ height: "30%"}}/>
                                <img hidden={item.currentHeartRate < item.maxHeartRate} id="image" src={bellLogoRed} alt={bellLogoRed} style={{ height: "30%"}}/>
                                <div className="product-details" >
                                    <h1>{item.name}</h1>
                                    <br></br>
                                    <h1 style={{fontSize:"12px"}}>Date of birth: {item.dateBirth}</h1>
                                    <br></br><br></br>
                                    <h1 style={{fontSize:"16px"}}><strong>Heart rate </strong>{item.currentHeartRate}</h1>
                                    <br></br>
                                    <h1 style={{fontSize:"16px"}}><strong>Max allowed heart rate </strong>{item.maxHeartRate}</h1>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Chat with {selecteduser.name} </Modal.Title>
                </Modal.Header>
                <Modal.Body style = {{ display: "inline-flex",
                    flexDirection : "row-reverse"}}>
                    <ul id="lista_mesaje">
                        {CHAT_MESSAGES.map((message) => (
                            <li key={message.id} style={{listStyle: "none"}}>
                                {

                                    (message.idUser == -1 || message.idUser ===
                                    selecteduser.id) &&
                                    <div className="div-chat">
                                    <label className="label-chat">{message.text}</label>
                                    <br/><br/>
                                    </div>
                                }
                            </li>
                            ))}
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <TextareaAutosize style={{ width: "80%"}}
                                      ref={ref} id="message"
                                      name="message">
                    </TextareaAutosize >
                    <Button variant="dark" onClick={sendChat}>
                        Send
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}

let CHAT_MESSAGES = [
    {
        id : "0",
        idUser : "-1",
        text : "Hi, I'm the doctor"
    },
    {
        id: "1",
        idUser: "4",
        text: "Ti-am scris ca sa vorbim..."
    },
    {
        id : "2",
        idUser : "2",
        text : "Nu uita de paracetamol"
    }
]

export default SeeVitals;
