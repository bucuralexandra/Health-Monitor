import React, {useState,useEffect} from "react";
import Header from "../common/Header";
import { TextField } from "@mui/material";
import Modal from 'react-bootstrap/Modal';
import {Button} from "@mui/material";
import Chart from './Chart'

function SeeVitals() {
    const [patients,setPatients]= useState([]);
    const [inputText, setInputText] = useState("");
    const [show, setShow] = useState(false);
    const [datasets,setDatasets]= useState([]);
    const [patient,setPatient]=useState({});
    
    const handleClose=()=>{
      setShow(false);
    };

    const handleShow=(id)=>{
        setShow(true);
        const patient = patients[id];
        setPatient(patient);
        setDatasets([  {
            label: 'minvalue',
            backgroundColor: 'rgba(255, 116, 161, 0.5)',
            borderColor: 'rgb(194, 116, 161)',
            data: [patient.minTemperature,patient.minHeartRate,patient.minBreathRate,patient.minSystolic,patient.minDiastolic, patient.minGlucose ],
          },
          {
            label: 'value',
            backgroundColor: 'rgba(105, 116, 194, 0.5)',
            borderColor: 'rgb(194, 116, 161)',
            data: [patient.temperature,patient.currentHeartRate,patient.breathingRate,patient.systolicPressure,patient.diastolicPressure, patient.bloodGlucose]
          },
          {
            label: 'maxValue',
            backgroundColor: 'rgba(71, 225, 167, 0.5)',
            borderColor: 'rgb(71, 225, 167)',
            data: [patient.maxTemperature,patient.maxHeartRate,patient.maxBreathRate,patient.maxSystolic,patient.maxDiastolic, patient.maxGlucose],
          }
        ]);
    };

    const inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);

    };

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

    useEffect(() => {   
        setPatients(JSON.parse(localStorage.getItem("patients")));
    } , []);

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
             {
                filteredData.map(item=>(
                    <div className="myContainer">
                        <div className="row">
                            <h1 style={{fontSize:"23px",textAlign:"center"}}>{item.name}</h1>
                            
                            <Button onClick={()=>handleShow(item.id)}>See Vitals Chart</Button>
                        </div>
                    </div>
                ))
             }
             <Modal show={show} onHide={handleClose} animation={false} dialogClassName="modal-size">
                    <Modal.Header closeButton>
                    <Modal.Title>Vitals Chart of {patient.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                    <Chart datasets= {datasets}></Chart>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
}

export default SeeVitals;
