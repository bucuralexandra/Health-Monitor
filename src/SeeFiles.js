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

        function importAll(r) {
            let images = {};
            r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
            return images;
        }
          
          const images = importAll(require.context('./patient_files', false, /\.(png|jpe?g|svg)$/));
          
        return (
            <div className="seeFilesPage">
                <Header/>
                <img src={images['patient1_file1.png']} width="10%" /> 
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
