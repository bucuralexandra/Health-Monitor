import './Login.css';
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import 'react-calendar/dist/Calendar.css';
import React, {useEffect, useState} from "react";
import patientsData from "./Patients.json";
import { TextField } from '@mui/material';
import Button from "react-bootstrap/Button"
import { Checkbox } from '@mui/material';
function PersonalizeAlerts() {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);

    };
    const [patients,setPatients]=useState([]);
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

    const handleCheckBox = (id,event)=>
    {
        console.log(event.target.checked);
        let newPatients= [...patients];
        console.log(event.target.name);
        newPatients[id][event.target.name]=event.target.checked;
        setPatients(newPatients);
    }

    const handleTextFieldChange = (id,event)=>
    {
        console.log(event.target.value);
        let newPatients= [...patients];
        console.log(event.target.name);
        newPatients[id][event.target.name]=parseFloat(event.target.value);
        setPatients(newPatients);
    }

    useEffect(() => {    
        setPatients(patientsData);
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
                <ul style={{padding:"0px"}}>
                    {filteredData.map((item) => (
                        <div key={item.id}>
                            <li  style={{listStyle: "none"}}>
                                <div className='myContainer'>
                                    <h3 style={{textAlign:"center"}}>{item.name}</h3>
                                    <div className='row' style={{width:"100%"}}>
                                        <label className='col-md-3' style={{textAlign:"left",margin:"auto", marginLeft:"2em"}}>Body temperature (°C): </label> 
                                        <TextField name ="minTemperature" onChange={(e)=>handleTextFieldChange(item.id,e)} className='col-md-3' defaultValue={item.minTemperature} placeholder='minTemperature'></TextField>
                                        <TextField name ="maxTemperature" onChange={(e)=>handleTextFieldChange(item.id,e)} className='col-md-3' defaultValue={item.maxTemperature} placeholder='maxTemperature'></TextField>
                                        <Checkbox  name ="temperatureCheck" onChange={(e)=>handleCheckBox(item.id,e)} checked={item.temperatureCheck}  className='col'  style={{textAlign:"center", margin:"auto"}}  color="success"></Checkbox> 
                                    </div>
                                    <div className='row' style={{width:"100%"}}>
                                        <label className='col-md-3' style={{textAlign:"left", margin:"auto", marginLeft:"2em"}}>Pulse rate (bpm): </label> 
                                        <TextField name ="minHeartRate" onChange={(e)=>handleTextFieldChange(item.id,e)} className='col-md-3' defaultValue={item.minHeartRate} placeholder='minHeartRate'></TextField>
                                        <TextField name ="maxHeartRate" onChange={(e)=>handleTextFieldChange(item.id,e)} className='col-md-3' defaultValue={item.maxHeartRate} placeholder='maxHeartRate'></TextField>
                                        <Checkbox  name ="heartRateCheck" onChange={(e)=>handleCheckBox(item.id,e)}  checked={item.heartRateCheck} className='col'  style={{textAlign:"center", margin:"auto"}}  color="success"></Checkbox>
                                    </div>
                                    <div className='row' style={{width:"100%"}}>
                                        <label className='col-md-3' style={{textAlign:"left", margin:"auto", marginLeft:"2em"}}>Breathing rate (breaths pm): </label> 
                                        <TextField name ="minBreathRate" onChange={(e)=>handleTextFieldChange(item.id,e)} className='col-md-3' defaultValue={item.minBreathRate} placeholder='minBreathRate'></TextField>
                                        <TextField name ="maxBreathRate" onChange={(e)=>handleTextFieldChange(item.id,e)} className='col-md-3' defaultValue={item.maxBreathRate} placeholder='maxBreathRate'></TextField>
                                        <Checkbox  name ="breathingRateCheck" onChange={(e)=>handleCheckBox(item.id,e)}  checked={item.breathingRateCheck} className='col'  style={{textAlign:"center", margin:"auto"}}  color="success"></Checkbox>
                                    </div>
                                    <div className='row' style={{width:"100%"}}>
                                        <label className='col-md-3' style={{textAlign:"left", margin:"auto", marginLeft:"2em"}}>Systolic blood pressure (mmHg): </label> 
                                        <TextField  name ="minSystolic" onChange={(e)=>handleTextFieldChange(item.id,e)} className='col-md-3' defaultValue={item.minSystolic} placeholder='minSystolic'></TextField>
                                        <TextField name ="maxSystolic" onChange={(e)=>handleTextFieldChange(item.id,e)} className='col-md-3' defaultValue={item.maxSystolic} placeholder='maxSystolic'></TextField>
                                        <Checkbox  name ="systolicPressureCheck" onChange={(e)=>handleCheckBox(item.id,e)}  checked={item.systolicPressureCheck} className='col'  style={{textAlign:"center", margin:"auto"}}  color="success"></Checkbox>
                                    </div>
                                    <div className='row' style={{width:"100%"}}>
                                        <label className='col-md-3' style={{textAlign:"left", margin:"auto", marginLeft:"2em"}}>Diastolic blood pressure (mmHg): </label>
                                        <TextField name ="minDiastolic" onChange={(e)=>handleTextFieldChange(item.id,e)} className='col-md-3' defaultValue={item.minDiastolic} placeholder='minDiastolic'></TextField>
                                        <TextField name ="maxDiastolic" onChange={(e)=>handleTextFieldChange(item.id,e)} className='col-md-3' defaultValue={item.maxDiastolic} placeholder='maxDiastolic'></TextField>
                                        <Checkbox   name ="diastolicPressureCheck" onChange={(e)=>handleCheckBox(item.id,e)}  checked={item.diastolicPressureCheck} className='col'  style={{textAlign:"center", margin:"auto"}}  color="success"></Checkbox>
                                    </div>
                                    <div className='row' style={{width:"100%"}}>
                                        <label className='col-md-3' style={{textAlign:"left", margin:"auto", marginLeft:"2em"}}>Blood glucose (mmol/L): </label> 
                                        <TextField name ="minGlucose" onChange={(e)=>handleTextFieldChange(item.id,e)} className='col-md-3' defaultValue={item.minGlucose} placeholder='minGlucose'></TextField>
                                        <TextField name ="maxGlucose" onChange={(e)=>handleTextFieldChange(item.id,e)} className='col-md-3' defaultValue={item.maxGlucose} placeholder='maxGlucose'></TextField>
                                        <Checkbox  name ="bloodGlucoseCheck" onChange={(e)=>handleCheckBox(item.id,e)} checked={item.bloodGlucoseCheck} className='col'  style={{textAlign:"center", margin:"auto"}}  color="success"></Checkbox>
                                    </div>
                                    <div className='row' style={{width:"100%"}}>
                                        <label className='col-md-3' style={{textAlign:"left", margin:"auto", marginLeft:"2em"}}>Medication plan: </label> 
                                        <div className='col-md-6'></div>
                                        <Checkbox   name ="followsMedicationPlan" onChange={(e)=>handleCheckBox(item.id,e)} checked={item.followsMedicationPlan} className='col'  style={{textAlign:"center", margin:"auto"}}  color="success"></Checkbox>
                                    </div>
                                </div>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );

}


export default PersonalizeAlerts;