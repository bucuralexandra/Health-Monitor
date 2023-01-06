import '../common/Login.css';
import Header from "../common/Header";
import {useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"
import calendar from "../images/calendar4-week.svg"
import arrow from "../images/graph-up-arrow.svg"
import bell from "../images/bell-fill.svg"
import picture from "../images/picture.svg"
import files from "../images/file-earmark-medical-fill.svg"
import React from "react";


function DoctorPage() {

    const navigate = useNavigate();

    const navigateManageAppointments = () => {
        navigate('/doctor/manageAppointments');
    };

    const navigateSeeVitals = () => {
        navigate('/doctor/seeVitals');
    };

    const navigateSeeFiles= () => {
        navigate('/doctor/seeFiles');
    };

    const navigatePersonalizeAlerts= () => {
        console.log("Am apasat aici si nu mergeeee pe pagina. UPDATE: merge:)")
        navigate('/doctor/alerts');
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
                {/*Aici am pus nurse card sau doctor card pentru ca au anumite stylinguri si le refolosesc:)*/}
                <div className="card" id="nursecard" onClick={navigateSeeFiles}>
                    <img className="card-img-top" src={files} alt={files} />
                    <div className="card-body">
                        <p className="card-text">See patients' files</p>
                    </div>
                </div>
                <div className="card" id="manageappointments"  onClick={navigatePersonalizeAlerts}>
                    <img className="card-img-top" src={bell} alt={bell}/>
                    <div className="card-body">
                        <p className="card-text">Personalize alerts</p>
                    </div>
                </div>
                <div className="card" id="seevitals" onClick={navigateSeeVitals}>
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
