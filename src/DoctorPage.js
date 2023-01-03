import './Login.css';
import Header from "./Header";
import {useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import calendar from "./images/calendar4-week.svg"
import arrow from "./images/graph-up-arrow.svg"
import bell from "./images/bell-fill.svg"
import picture from "./images/picture.svg"
import files from "./images/file-earmark-medical-fill.svg"
import React from "react";



function DoctorPage() {

    const navigate = useNavigate();

    const navigateManageAppointments = () => {
        navigate('/doctor/manageAppointments');
    };

    return (
        <div className="UserPage">
            <Header></Header>
            <div className="list">
                <div className="card" id="doctorcard"  onClick={navigateManageAppointments}>
                    <img className="card-img-top" src={calendar} alt={calendar} />
                    <div className="card-body">
                        <p className="card-text">Manage Appointments</p>
                    </div>
                </div>
                <div className="card" id="nursecard" >
                    <img className="card-img-top" src={files} alt={files} />
                    <div className="card-body">
                        <p className="card-text">See patients' files</p>
                    </div>
                </div>
                <div className="card" id="manageappointments" >
                    <img className="card-img-top" src={bell} alt={bell} />
                    <div className="card-body">
                        <p className="card-text">Personalize alerts</p>
                    </div>
                </div>
                <div className="card" id="seevitals" >
                    <img className="card-img-top" src={arrow} alt={arrow} />
                    <div className="card-body">
                        <p className="card-text">See patients' vitals</p>
                    </div>
                </div>
            </div>
            <img id="picture" src={picture} alt={picture}/>
        </div>
    );

}

export default DoctorPage;
