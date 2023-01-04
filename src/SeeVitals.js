import './Login.css';
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import 'react-calendar/dist/Calendar.css';
import React, {useEffect, useState} from "react";
import userLogo from "./images/person-circle.svg";
import {Button} from "react-bootstrap";
import patients from "./Patients.json";
import bellLogoGreen from "./images/bell-fill-green.svg"
import bellLogoRed from "./images/bell-fill-red.svg"
function SeeVitals() {


    return (
        <div className="SeeVitalsPage">
            <Header></Header>
            <ul>
                {patients.map((item) => (
                    <li key={item.id} style={{listStyle: "none"}}>
                        <div className='p-2 flex-fill ' key={item.id} id="element" >
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                            <div id="container" style={{width: "92vw", padding: "17px"}}>
                                <img id="image" src={userLogo} alt={userLogo}/>
                                <Button variant="outline-dark" >Contact</Button>
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
        </div>
    );

}

export default SeeVitals;
