import '../common/Login.css';
import Header from "../common/Header";
import {useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"
import bell from "../images/bell-fill.svg"
import files from "../images/file-earmark-medical-fill.svg"
import picture from "../images/picture.svg"
import check from "../images/check.svg"


import React from "react";

function NursePage() {
    const navigate= useNavigate();

    const navigateSeeFiles= () => {
        navigate('/doctor/seeFiles');
    };
    const navigateMonitorPatients= () => {
        navigate('/nurse/monitor');
    };
    const navigateApproveMedication= () => {
        navigate('/nurse/approve');
    };

    return (
        <div className="UserPage">
            <Header></Header>
            <div className="list">
                <div className="card" id="doctorcard" onClick={navigateMonitorPatients}>
                    <img className="card-img-top" src={bell} alt={bell} />
                    <div className="card-body">
                        <p className="card-text">Monitor Patients</p>
                    </div>
                </div>
                <div className="card" id="nursecard"  onClick={navigateSeeFiles}>
                    <img className="card-img-top" src={files} alt={files} />
                    <div className="card-body">
                        <p className="card-text">See patients' files</p>
                    </div>
                </div>
                <div className="card" id="manageappointments"  onClick={navigateApproveMedication}>
                    <img className="card-img-top" src={check} alt={check} />
                    <div className="card-body">
                        <p className="card-text">Approve medication plan</p>
                    </div>
                </div>
            </div>
            <img id="picture" src={picture} alt={picture}/>
        </div>
    );

}

export default NursePage;
