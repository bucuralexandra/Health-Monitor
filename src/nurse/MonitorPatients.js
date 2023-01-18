import '../common/Login.css';
import Header from "../common/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"
import 'react-calendar/dist/Calendar.css';
import React, {useEffect, useRef, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import bellLogoGreen from "../images/bell-fill-green.svg"
import {TextareaAutosize} from "@mui/material";
import {TextField} from '@mui/material';


function MonitorPatients() {

    const [inputText, setInputText] = useState("");
    const [patients,setPatients]= useState([]);
    const [show, setShow] = useState(false);
    const [selecteduser, setSelecteduser] = useState({});
    const handleClose = () => setShow(false);
    
    const ref = useRef(null);

    const filteredData = patients.filter((el) => {
        //if no input the return the original
        if (inputText === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.name.toLowerCase().includes(inputText)
        }
    })

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
    
    
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);

    };

    const selectUser = (id) => {
        setSelecteduser(patients[id])
        setShow(true);
    }
    
    useEffect(() => {
        localStorage.setItem("Chat_list", CHAT_MESSAGES);
        setPatients(JSON.parse(localStorage.getItem("patients")));
    } , [CHAT_MESSAGES]);


    return (
        <div>
        <Header></Header>
        <div className="SeeVitalsPage">
            <div className="search">
                        <TextField
                            id="outlined-basic"
                            onChange={inputHandler}
                            variant="outlined"
                            fullWidth
                            label="Search"
                        />
             </div>
            <ul style={{padding:"0px"}}>
                {filteredData.map((item) => (
                    <li key={item.id}>
                            <div className="myContainer" >
                                <div className='row'>
                                <div className='col-md-4'>
                                <h1 style={{fontSize:"20px"}}>{item.name}</h1>
                                <h1 style={{fontSize:"16px"}}>Date of birth: {item.dateBirth}</h1>
                                <h1 style={{fontSize:"16px"}}>Condition: {item.recentCondition}</h1>
                                </div>
                                <div className='col-md-2' style={{margin:"auto"}}>
                                    <Button variant="outline-dark" onClick={ () => selectUser(item.id)}>Contact</Button>
                                </div>
                                <div className='col-md-3'> 
                                { 
                                item.temperature > item.maxTemperature || item.minTemperature< item.minTemperature 
                                ? <h1 hidden= {!item.temperatureCheck}  style={{fontSize:"16px", color:"red"}} ><strong>Body temperature </strong>{item.temperature}</h1>
                                : <h1 hidden= {!item.temperatureCheck}  style={{fontSize:"16px", color:"green"}} ><strong>Body temperature </strong>{item.temperature}</h1>
                                }
                                { 
                                item.currentHeartRate> item.maxHeartRate || item.currentHeartRate< item.minHeartRate  
                                ? <h1 hidden= {!item.heartRateCheck}  style={{fontSize:"16px", color:"red"}} ><strong>Heart rate </strong>{item.currentHeartRate}</h1>
                                : <h1 hidden= {!item.heartRateCheck}  style={{fontSize:"16px", color:"green"}} ><strong>Heart rate </strong>{item.currentHeartRate}</h1>
                                }
                               
                                { 
                                item.breathingRate> item.maxBreathRate || item.breathingRate< item.minBreathRate  
                                ? <h1 hidden= {!item.breathingRateCheck}  style={{fontSize:"16px", color:"red"}} ><strong>Breathing rate </strong>{item.breathingRate}</h1>
                                : <h1 hidden= {!item.breathingRateCheck} style={{fontSize:"16px", color:"green"}} ><strong>Breathing rate </strong>{item.breathingRate}</h1>
                                }
                                 { 
                                item.systolicPressure> item.maxSystolic || item.systolicPressure< item.minSystolic  
                                ? <h1 hidden= {!item.systolicPressureCheck}  style={{fontSize:"16px", color:"red"}} ><strong>Systolic blood pressure </strong>{item.systolicPressure}</h1>
                                : <h1 hidden= {!item.systolicPressureCheck}  style={{fontSize:"16px", color:"green"}} ><strong>Systolic blood pressure </strong>{item.systolicPressure}</h1>
                                }
                                </div>
                                <div className='col-md-3'>
                               
                                { 
                                item.diastolicPressure> item.maxDiastolic || item.diastolicPressure< item.minDiastolic  
                                ? <h1 hidden= {!item.diastolicPressureCheck}  style={{fontSize:"16px", color:"red"}} ><strong>Diastolic blood pressure </strong>{item.diastolicPressure}</h1>
                                : <h1 hidden= {!item.diastolicPressureCheck}  style={{fontSize:"16px", color:"green"}} ><strong>Diastolic blood pressure </strong>{item.diastolicPressure}</h1>
                                }    
                                { 
                                   item.bloodGlucose> item.maxGlucose || item.bloodGlucose< item.minGlucose  
                                ? <h1 hidden= {!item.bloodGlucoseCheck} style={{fontSize:"16px", color:"red"}} ><strong>Blood Glucose </strong>{item.bloodGlucose}</h1>
                                : <h1 hidden= {!item.bloodGlucoseCheck} style={{fontSize:"16px", color:"green"}} ><strong>Blood Glucose </strong>{item.bloodGlucose}</h1>
                                }
                                 
                                {
                                    item.followsMedicationPlan && 
                                    <h1 style={{fontSize:"16px",color:"orange", display:"flex-block"}} ><img style= {{marginTop:"-1%"}}src={bellLogoGreen}/><strong>Medication Reminder</strong></h1>                                
                                }


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
        </div>
    );
}

let CHAT_MESSAGES = [
    {
        id : "0",
        idUser : "-1",
        text : "Hi, I'm the nurse"
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

export default MonitorPatients;
