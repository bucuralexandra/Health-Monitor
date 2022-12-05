import './Login.css';
import Header from "./Header";
import {useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"


import bell from "./images/bell-fill.svg"

import files from "./images/file-earmark-medical-fill.svg"
import picture from "./images/picture.svg"

import React from "react";

function NursePage() {


    return (
        <div className="UserPage">
            <Header></Header>
            <div className="list">
                <div className="card" id="doctorcard">
                    <img className="card-img-top" src={bell} alt={bell} />
                    <div className="card-body">
                        <p className="card-text">Monitor Patients</p>
                    </div>
                </div>
                <div className="card" id="nursecard" >
                    <img className="card-img-top" src={files} alt={files} />
                    <div className="card-body">
                        <p className="card-text">See patients' files</p>
                    </div>
                </div>
            </div>
            <img id="picture" src={picture} alt={picture}/>
        </div>
    );

}

export default NursePage;
