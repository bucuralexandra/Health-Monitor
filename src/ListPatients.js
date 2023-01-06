import { React ,useState} from 'react'
import data from "./Patients.json"
import {Button} from "react-bootstrap";
import userLogo from "./images/person-circle.svg";
import Modal from "react-bootstrap/Modal"
import {useNavigate} from "react-router-dom";

function ListPatients(props) {
    //create a new array by filtering the original array
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.name.toLowerCase().includes(props.input)
        }
    })
    const navigate = useNavigate();
    const seeFiles = (id)=>
    {
        localStorage.setItem("patientId",id);
        navigate('/filePage');
    }

    return (
        <div>
        <ul style={{padding:"0px"}}>
            {filteredData.map((item) => (
                <li key={item.id} style={{listStyle: "none"}}>
                    <div className='p-2 flex-fill ' key={item.id} id="element" >
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                        <div id="container" >
                            <img id="image" style={{margin:"auto"}} src={userLogo} alt={userLogo}/>
                            <Button style={{margin:"auto"}} variant="outline-dark" onClick={()=>seeFiles(item.id)} >See full data</Button>
                            <div className="product-details" >
                                <h1>{item.name}</h1>
                                <br></br>
                                <br></br>
                                <h1 style={{fontSize:"12px"}}>Date of birth: {item.dateBirth}</h1>
                                <br></br>
                                <h1 style={{fontSize:"15px"}}><strong>Alergies </strong> {item.alergies}</h1>
                                <br></br>
                                <h1 style={{fontSize:"15px"}}><strong>Recent condition </strong>{item.recentCondition}</h1>
                                <br></br>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
   
    </div>
    )
}

export default ListPatients;