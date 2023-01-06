import './Login.css';
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import 'react-calendar/dist/Calendar.css';
import React, {useState,useEffect} from "react";
import {TextField} from "@mui/material";
import ListPatients from "./ListPatients";
import patients from "./Patients.json";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { width } from '@mui/system';
import '@react-pdf-viewer/core/lib/styles/index.css';
// default layout plugin
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import styles of default layout plugin
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core';
// Import the main Viewer component
import { Viewer } from '@react-pdf-viewer/core';
import Select from 'react-select';



function FilePage() {   

        const [inputText, setInputText] = useState("");
        const [img, setImg]= useState('');
        const [show, setShow] = useState(false);
        const [pdfFile, setPdf]= useState('');
        const [showPdf, setShowPdf]=useState(false);
        const handleClose = () => 
        {
         setShow(false);
         setShowPdf(false);   
        }
        const defaultLayoutPluginInstance = defaultLayoutPlugin();
        
        const handleShow = (file) =>{
            setShow(true);
            if(file.value)
            {
              console.log(file.value)
              setPdf(pdfs[file.value]);
              setShowPdf(true);
            }
            else
            {
                setImg(file[1]);
            }
        } 

        let inputHandler = (e) => {
            //convert input text to lower case
            var lowerCase = e.target.value.toLowerCase();
            setInputText(lowerCase);
        };
        const allowedFiles = ['application/pdf','image/png','image/jpg','image/jpeg','image/svg+xml'];
        const handleFile = (e) =>{
            let selectedFile = e.target.files[0];
            if(selectedFile){
            if(selectedFile && allowedFiles.includes(selectedFile.type)){
               console.log(selectedFile);
            }
            else{
                setPdfError('Not a valid file: please select only images/PDFs');
            }
            }
            else{
            console.log('please select a PDF');
            }
        }

        function importAll(r) {
            let files = {};
            r.keys().map((item, index) => { files[item.replace('./', '')] = r(item); });
            return files;
        }
          
        const images = importAll(require.context('./patient_files', false, /\.(png|jpe?g|svg)$/));
        const pdfs= importAll(require.context('./patient_files', false, /\.(pdf)$/))
        const [pdfError, setPdfError]=useState('');
        const [patient,setPatient]= useState('');
        const [patientImages,setPatientImages]= useState([]);
        const [patientPdfs,setPatientPdfs]= useState([]);
        const [options, setOptions]= useState([]);

        useEffect(() => {
            //console.log(images);
            const id= parseInt(localStorage.getItem("patientId"));
            setPatient(patients[id]);
            let pimgs=patients[id].images.map((item)=>[item,images[item]]);
            let ppdfs=patients[id].pdfs.map((item)=>[item,pdfs[item]]);
            let options=[];
            patients[id].pdfs.map((item)=>{options.push({value:item,label:item})});
            setPatientImages(pimgs);
            setPatientPdfs(ppdfs);
            setOptions(options);
            console.log(options);
        }, []);

        return (
            <div>
            <Header/>
            <h3 style={{textAlign:"center"}}>The files of the patient: {patient?.name}</h3>
            <h6 style={{marginTop:"2%",marginLeft:"7.5%"}}>Click on a image to see it in detail: </h6>
            <div className="filePage">
                { patientImages && patientImages.map((item)=>(<div style={{marginRight:"2%"} } key={item[0]}>
                <label> {item[0]}</label>
                <br></br>
                <img src={item[1]} className="myImg" onClick={()=> handleShow(item)}></img>
                </div>))
                }
                </div>
                <br></br>
                <br></br>
                <div className='selectPdf'>
                <h6>Select a pdf file that you want to see: </h6>    
                {patientPdfs && <Select onChange={handleShow} options={options} ></Select>}
                <br></br>
                <br></br>
                <form>
                    <label><h5>Upload PDF</h5></label>
                    <br></br>
                    <input type='file' className="form-control"
                    onChange={handleFile}></input>

                    {/* we will display error message in case user select some file
                    other than pdf */}
                    {pdfError&&<span className='text-danger'>{pdfError}</span>}

                </form>
                </div>
                <Modal show={show} onHide={handleClose} animation={false} dialogClassName="modal-size">
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        { !showPdf && <img src= {img} className="modalImg"></img>}
                        { showPdf && <div className="viewer">
                                    {pdfFile&&(
                                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
                                        <Viewer fileUrl={pdfFile}
                                        plugins={[defaultLayoutPluginInstance]}></Viewer>
                                    </Worker>
                                    )}

                                    {/* render this if we have pdfFile state null   */}
                                    {!pdfFile&&<>No file is selected yet</>}

                                </div>
                        }

                    </Modal.Body>
                </Modal>
                
            
            </div>
        );
}

export default FilePage;
