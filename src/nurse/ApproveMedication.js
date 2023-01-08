import React, {useState, useEffect, useRef} from "react";
import Header from "../common/Header";
import {TextareaAutosize, TextField} from "@mui/material";
import Modal from 'react-bootstrap/Modal';
//import {Button} from "@mui/material";
import Button from 'react-bootstrap/Button'

function SeeVitals() {
    const [patients,setPatients]= useState([]);
    const [inputText, setInputText] = useState("");
    const [show, setShow] = useState(false);
    const [patient,setPatient]=useState({});
    const [colors,setColors]= useState([]);
    const ref = useRef(null);

    const handleClose=()=>{
      setShow(false);
    };

  const handleShow = (id)=>
   {
    setPatient(patients[id]);
    setShow(true);
   }

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

    const handleButton = (color)=>
    {
        console.log(ref.current.value);
        let newColors= [...colors];
        newColors[patient.id]=color;
        setColors(newColors);
        setShow(false);
        console.log(newColors);

        let updatedPatient = patient;
        updatedPatient.recentMedicationPlan = document.getElementById("medication").value;
        setPatient(updatedPatient);
    }

    useEffect(() => {
        const patients= JSON.parse(localStorage.getItem("patients"));
        setPatients(patients);
        const colors= patients.map(item=>"white");
        setColors(colors);
        console.log(colors);
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
                    <div key={item.id}  className="myContainer" style={{background:colors[item.id]}} >
                        <div className="row">
                            <div class='col-md-9'>
                            <h1 style={{fontSize:"20px",textAlign:"left", marginLeft:"2%"}}>{item.name}</h1>
                            <h1 style={{fontSize:"16px",textAlign:"left", marginLeft:"2%"}}>Birthday: {item.dateBirth}</h1>
                            <h1 style={{fontSize:"16px",textAlign:"left", marginLeft:"2%"}}>Alergies: {item.alergies}</h1>
                            <h1 style={{fontSize:"16px",textAlign:"left", marginLeft:"2%"}}>Recent Condition: {item.recentCondition}</h1>

                            </div>
                            <div className='col-md-3'style={{margin:"auto"}} >
                            <Button variant="dark" onClick={()=>handleShow(item.id)}>See Recent Medication Plan</Button>
                            </div>
                        </div>
                    </div>
                ))
             }
             <Modal show={show} onHide={handleClose} animation={false} dialogClassName="modal-size" >
                    <Modal.Header closeButton>
                    <Modal.Title>Medication plan of {patient.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <TextareaAutosize
                            ref={ref} id="medication"
                        >{patient.recentMedicationPlan}</TextareaAutosize>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={()=>handleButton("rgba(171, 17, 40, 0.9)")} >Deny</Button>
                        <Button variant="success" onClick={()=>handleButton("#3C9336FF")}>Approve</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}

export default SeeVitals;
