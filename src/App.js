import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

import Login from "./Login";
import React from "react";
import HomePage from "./HomePage";
import NursePage from "./NursePage";
import DoctorPage from "./DoctorPage";
import ManageAppointments from "./ManageAppointments";

function App() {

  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/nurse" element={<NursePage />} />
                <Route path="/doctor" element={<DoctorPage/>} />
                <Route path="/doctor/manageAppointments" element={<ManageAppointments/>} />
            </Routes>
        </BrowserRouter>
  );

}

export default App;
