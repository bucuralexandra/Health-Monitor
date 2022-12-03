import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

import Login from "./Login";
import React from "react";
import HomePage from "./HomePage";

function App() {

  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </BrowserRouter>
  );

}

export default App;
