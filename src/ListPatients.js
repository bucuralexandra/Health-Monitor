import { React ,useState} from 'react'
import data from "./Patients.json"
import {Button} from "react-bootstrap";
import userLogo from "./images/person-circle.svg";
import Modal from "react-bootstrap/Modal"
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
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
        <ul>
            {filteredData.map((item) => (
                <li key={item.id} style={{listStyle: "none"}}>
                    <div className='p-2 flex-fill ' key={item.id} id="element" >
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                        <div id="container" style={{width: "92vw", padding: "17px"}}>
                            <img id="image" src={userLogo} alt={userLogo}/>
                            <Button variant="outline-dark" onClick={handleShow} >See full data</Button>
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
        <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                     </Modal.Footer>
                </Modal>
    </div>
    )
}

export default ListPatients;