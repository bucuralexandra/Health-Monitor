import './Login.css';
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import 'react-calendar/dist/Calendar.css';
import React, {useState} from "react";
import {TextField} from "@mui/material";
import ListPatients from "./ListPatients";


function SeeFiles() {

        const [inputText, setInputText] = useState("");
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        let inputHandler = (e) => {
            //convert input text to lower case
            var lowerCase = e.target.value.toLowerCase();
            setInputText(lowerCase);
        };

        return (
            <div>
                <Header/>
                <div className="seeFilesPage">
                    <div className="search">
                        <TextField
                            id="outlined-basic"
                            onChange={inputHandler}
                            variant="outlined"
                            fullWidth
                            label="Search"
                        />
                    </div>
                    <ListPatients input={inputText} />
                </div>
            </div>
        );
}

export default SeeFiles;
