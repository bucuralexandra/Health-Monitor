import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

import Login from "./Login";
import React from "react";
import HomePage from "./HomePage";
import NursePage from "./NursePage";
import DoctorPage from "./DoctorPage";
import ManageAppointments from "./ManageAppointments";
import SeeVitals from "./SeeVitals";
import SeeFiles from "./SeeFiles";
import PersonalizeAlerts from "./PersonalizeAlerts";
import MonitorPatients from "./MonitorPatients";
import Header from './Header';
import PdfViewer from './PdfViewer';
import FilePage from './FilePage';

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
