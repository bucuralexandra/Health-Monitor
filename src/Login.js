import React from 'react';
import "./Login.css"
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
}
    from 'mdb-react-ui-kit';

import doctorLogo from "./images/doctor.svg"
import nurseLogo from "./images/nurse.svg"
import {useNavigate} from "react-router-dom";
import popover from "bootstrap/js/src/popover";


function Login() {

    const navigate = useNavigate();
    const doctor = {
        email: "ion.popescu@doctor.com",
        password: "123"
    }

    const nurse = {
        email: "ioana.popescu@nurse.com",
        password: "1234"
    }

    const doc = localStorage.getItem("isDoctor");
    if(doc == null)
        return null;
    let imgg, button;
    if(doc === "true" ){

        imgg = <img id="image" src={doctorLogo} alt={doctorLogo}/>
        button = <MDBBtn className='w-100 mb-4' id="doctorLogin" onClick={loginDoctor}>Login</MDBBtn>
        }
    else {
       imgg =  <img id="image" src={nurseLogo} alt={nurseLogo}/>
       button = <MDBBtn className='w-100 mb-4'  id="nurseLogin" onClick={loginNurse} >Login</MDBBtn>
    }

    function loginNurse(){
       const email = document.getElementById('form3');
       const password = document.getElementById('form4');
       if(email.value === nurse.email && password.value === nurse.password)
       {
           localStorage.setItem("nursep" , nurse.password);
           localStorage.setItem("nursee" , nurse.email);
           navigate('/nurse');
       }
       else{
           email.value = '';
           password.value = '';
           document.getElementById("errorLabel").innerHTML= 'Wrong credentials, try again';
           setTimeout(function() {
               document.getElementById('errorLabel').style.display = 'none';
           }, 2000);
       }
    }

    function loginDoctor(){
        var email = document.getElementById('form3');
        var password = document.getElementById('form4');
        console.log(email);
        console.log(password);
        if(email.value === doctor.email && password.value === doctor.password)
        {
            localStorage.setItem("doctorp" , doctor.password);
            localStorage.setItem("doctore" , doctor.email);
            navigate('/doctor');
        }else{
            email.value = '';
            password.value = '';
            document.getElementById("errorLabel").innerHTML= 'Wrong credentials, try again';
            setTimeout(function() {
                document.getElementById('errorLabel').style.display = 'none';
            }, 2000);
        }
    }
    return (
        <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden' >

            <MDBRow>

                <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

                    <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
                        The best app <br />
                        <span style={{color: 'hsl(218, 81%, 75%)'}}>for monitoring patient's health</span>
                    </h1>
                    {imgg}
                </MDBCol>

                <MDBCol md='6' className='position-relative'>

                    <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                    <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                    <MDBCard className='my-5 bg-glass'>
                        <MDBCardBody className='p-5'>

                            <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email'/>
                            <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password'/>

                            <label id="errorLabel"></label>
                            {button}

                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>

            </MDBRow>

        </MDBContainer>

    );
}

export default Login;