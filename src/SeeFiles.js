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
        let inputHandler = (e) => {
            //convert input text to lower case
            var lowerCase = e.target.value.toLowerCase();
            setInputText(lowerCase);
        };

        return (
            <div className="seeFilesPage">
                <Header/>
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
        );
}

export default SeeFiles;
