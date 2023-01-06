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
        localStorage.setItem("patients",JSON.stringify(patients));
    }
    

    const handleTextFieldChange = (id,event)=>
    {
        console.log(event.target.value);
        let newPatients= [...patients];
        console.log(event.target.name);
        newPatients[id][event.target.name]=parseFloat(event.target.value);
        setPatients(newPatients);
        localStorage.setItem("patients",JSON.stringify(patients));
        
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

/*let PATIENTS = [
    {
      id : "0",
      username : "drosca",
      name : "Diana Rosca",
      dateBirth : "08-10-1975",
      alergies : "none",
      recentCondition : "control",
      currentHeartRate : 109,
      images: [
        "prescription.png",
        "drug_doses.png"
      ],
      pdfs:[
        "dovada.pdf"
      ],
      minTemperature:36.5,
      maxTemperature:37.5,
      maxHeartRate:100,
      minHeartRate:60,
      minBreathRate:12,
      maxBreathRate:16,
      maxSystolic:120,
      maxDiastolic:80,
      minSystolic:90,
      minDiastolic:60,
      minGlucose:4,
      maxGlucose:6,
      followsMedicationPlan:true,
      systolicPressureCheck:true,
      diastolicPressureCheck:true,
      bloodGlucoseCheck:true,
      breathingRateCheck:true,
      temperatureCheck:false,
      heartRateCheck:true,
      systolicPressure:100,
      diastolicPressure:70,
      bloodGlucose:5,
      breathingRate:14,
      temperature:38,
      heartRate:120
    },
    {
      id : "1",
      username : "abucur",
      name : "Bucur Alexandra",
      dateBirth : "13-05-2000",
      alergies : "none",
      recentCondition : "headache",
      currentHeartRate : 109,
      images: [
        "prescription.png",
        "drug_doses.png"
      ],
      pdfs:[
        "dovada.pdf"
      ],
      minTemperature:36.5,
      maxTemperature:37.5,
      maxHeartRate:100,
      minHeartRate:60,
      minBreathRate:12,
      maxBreathRate:16,
      maxSystolic:120,
      maxDiastolic:80,
      minSystolic:90,
      minDiastolic:60,
      minGlucose:4,
      maxGlucose:6,
      followsMedicationPlan:true,
      systolicPressureCheck:true,
      diastolicPressureCheck:true,
      bloodGlucoseCheck:true,
      breathingRateCheck:true,
      temperatureCheck:false,
      heartRateCheck:true,
      systolicPressure:100,
      diastolicPressure:70,
      bloodGlucose:5,
      breathingRate:14,
      temperature:38,
      heartRate:120
      
    },
    {
      id : "2",
      username : "mpop",
      name : "Pop Mihai",
      dateBirth : "23-05-2001",
      alergies : "peanuts, rasberries",
      recentCondition : "CT",
      currentHeartRate : 161,
      images: [
        "prescription.png",
        "drug_doses.png"
      ],
      pdfs:[
        "dovada.pdf"
      ],
      minTemperature:36.5,
      maxTemperature:37.5,
      maxHeartRate:100,
      minHeartRate:60,
      minBreathRate:12,
      maxBreathRate:16,
      maxSystolic:120,
      maxDiastolic:80,
      minSystolic:90,
      minDiastolic:60,
      minGlucose:4,
      maxGlucose:6,
      followsMedicationPlan:true,
      systolicPressureCheck:true,
      diastolicPressureCheck:true,
      bloodGlucoseCheck:true,
      breathingRateCheck:true,
      temperatureCheck:false,
      heartRateCheck:true,
      systolicPressure:100,
      diastolicPressure:70,
      bloodGlucose:5,
      breathingRate:14,
      temperature:38,
      heartRate:120
    },
    {
      id : "3",
      username : "sgaga",
      name : "Sergiu Gaga",
      dateBirth : "13-05-2000",
      alergies : "none",
      recentCondition : "control",
      currentHeartRate : 110,
      images: [
        "prescription.png",
        "drug_doses.png"
      ],
      pdfs:[
        "dovada.pdf"
      ],
      minTemperature:36.5,
      maxTemperature:37.5,
      maxHeartRate:100,
      minHeartRate:60,
      minBreathRate:12,
      maxBreathRate:16,
      maxSystolic:120,
      maxDiastolic:80,
      minSystolic:90,
      minDiastolic:60,
      minGlucose:4,
      maxGlucose:6,
      followsMedicationPlan:true,
      systolicPressureCheck:true,
      diastolicPressureCheck:true,
      bloodGlucoseCheck:true,
      breathingRateCheck:true,
      temperatureCheck:false,
      heartRateCheck:true,
      systolicPressure:100,
      diastolicPressure:70,
      bloodGlucose:5,
      breathingRate:14,
      temperature:38,
      heartRate:120
    },
    {
      id : "4",
      username : "bpop",
      name : "Pop Bogdan",
      dateBirth : "13-05-2000",
      alergies : "none",
      recentCondition : "headache",
      currentHeartRate : 117,
      
      images: [
        "prescription.png",
        "drug_doses.png"
      ],
      pdfs:[
        "dovada.pdf"
      ],
      minTemperature:36.5,
      maxTemperature:37.5,
      maxHeartRate:100,
      minHeartRate:60,
      minBreathRate:12,
      maxBreathRate:16,
      maxSystolic:120,
      maxDiastolic:80,
      minSystolic:90,
      minDiastolic:60,
      minGlucose:4,
      maxGlucose:6,
      followsMedicationPlan:true,
      systolicPressureCheck:true,
      diastolicPressureCheck:true,
      bloodGlucoseCheck:true,
      breathingRateCheck:true,
      temperatureCheck:false,
      heartRateCheck:true,
      systolicPressure:100,
      diastolicPressure:70,
      bloodGlucose:5,
      breathingRate:14,
      temperature:38,
      heartRate:120
    },
    {
      id : "5",
      username : "mslav",
      name : "Monica Slavescu",
      dateBirth : "09-09-2000",
      alergies : "none",
      recentCondition : "headache",
      currentHeartRate : 100,
      images: [
        "prescription.png",
        "drug_doses.png"
      ],
      pdfs:[
        "dovada.pdf"
      ],
      minTemperature:36.5,
      maxTemperature:37.5,
      maxHeartRate:100,
      minHeartRate:60,
      minBreathRate:12,
      maxBreathRate:16,
      maxSystolic:120,
      maxDiastolic:80,
      minSystolic:90,
      minDiastolic:60,
      minGlucose:4,
      maxGlucose:6,
      followsMedicationPlan:true,
      systolicPressureCheck:true,
      diastolicPressureCheck:true,
      bloodGlucoseCheck:true,
      breathingRateCheck:true,
      temperatureCheck:false,
      heartRateCheck:true,
      systolicPressure:100,
      diastolicPressure:70,
      bloodGlucose:5,
      breathingRate:14,
      temperature:38,
      heartRate:120
    },
    {
      id : "6",
      username : "bhulpe",
      name : "Briana Hulpe",
      dateBirth : "13-06-2000",
      alergies : "milk",
      recentCondition : "eye stuff",
      currentHeartRate : 121,
      images: [
        "prescription.png",
        "drug_doses.png"
      ],
      pdfs:[
        "dovada.pdf"
      ],
      minTemperature:36.5,
      maxTemperature:37.5,
      maxHeartRate:100,
      minHeartRate:60,
      minBreathRate:12,
      maxBreathRate:16,
      maxSystolic:120,
      maxDiastolic:80,
      minSystolic:90,
      minDiastolic:60,
      minGlucose:4,
      maxGlucose:6,
      followsMedicationPlan:true,
      systolicPressureCheck:true,
      diastolicPressureCheck:true,
      bloodGlucoseCheck:true,
      breathingRateCheck:true,
      temperatureCheck:false,
      heartRateCheck:true,
      systolicPressure:100,
      diastolicPressure:70,
      bloodGlucose:5,
      breathingRate:14,
      temperature:38,
      heartRate:120
    }
  
  ]
  */

 
export default PersonalizeAlerts;