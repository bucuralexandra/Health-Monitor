import './common/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

import Login from "./common/Login";
import React from "react";
import HomePage from "./common/HomePage";
import NursePage from "./nurse/NursePage";
import DoctorPage from "./doctor/DoctorPage";
import ManageAppointments from "./doctor/ManageAppointments";
import MonitorPatients from "./nurse/MonitorPatients";
import SeeFiles from "./common/SeeFiles";
import PersonalizeAlerts from "./doctor/PersonalizeAlerts";
import SeeVitals from "./doctor/SeeVitals";
import Header from './common/Header';
import PdfViewer from './PdfViewer';
import FilePage from './common/FilePage';

function App() {

  return (
    <div>
        {false && <Header></Header>}
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/pdf" element={<PdfViewer />} />
                <Route path="/filePage" element={<FilePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/nurse" element={<NursePage />} />
                <Route path="/doctor" element={<DoctorPage/>} />
                <Route path="/doctor/manageAppointments" element={<ManageAppointments/>} />
                <Route path="/doctor/seeVitals" element={<SeeVitals/>} />
                <Route path="/doctor/seeFiles" element={<SeeFiles/>} />
                <Route path="/doctor/alerts" element={<PersonalizeAlerts/>} />
                <Route path="/nurse/monitor" element={<MonitorPatients/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );

}

export default App;
