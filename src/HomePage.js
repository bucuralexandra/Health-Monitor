import './Login.css';
import Header from "./Header";
import {useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import doctor from "./images/doctor.svg"
import nurse from "./images/nurse.svg"
import picture from "./images/picture.svg"

import React from "react";

function HomePage() {

    const navigate = useNavigate();

    const navigateLoginDoctor = () => {
        localStorage.setItem("isDoctor", true);
        navigate('/login');
    };

    const navigateLoginNurse = () => {
        localStorage.setItem("isDoctor", false);
        navigate('/login');
    };

    return (
        <div className="MainPage">
            <Header></Header>
            <div className="list">
                <div className="card" id="doctorcard" onClick={navigateLoginDoctor}>
                    <img className="card-img-top" src={doctor} alt={doctor} />
                    <div className="card-body">
                        <p className="card-text">Doctor</p>
                    </div>
                </div>
                <div className="card" id="nursecard" onClick={navigateLoginNurse}>
                    <img className="card-img-top" src={nurse} alt={nurse} />
                    <div className="card-body">
                        <p className="card-text">Nurse</p>
                    </div>
                </div>
            </div>
            <img id="picture" src={picture} alt={picture}/>
        </div>
    );

}

export default HomePage;
