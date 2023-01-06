import React, {useState} from 'react'
import healthlogo from "../images/health-logo.svg";
import "./Header.css"
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import {Logout} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import menuicon from "../images/menu.jpg"
import Calendar from "react-calendar";
function Header() {

    const navigate = useNavigate();
    const [hidden, setHidden] = useState("none");
    const doc = localStorage.getItem("isDoctor");
    const loggedDoc = localStorage.getItem("doctore");
    const loggedNurse = localStorage.getItem("nursee");

    const navigateManageAppointments = () => {
        navigate('/doctor/manageAppointments');
    };
    const navigateSeeVitals = () => {
        navigate('/doctor/seeVitals');
    };

    const navigateSeeFiles= () => {
        navigate('/doctor/seeFiles');
    };

    const navigatePersonalizeAlerts= () => {
        console.log("Am apasat aici si nu mergeeee pe pagina. UPDATE: merge:)")
        navigate('/doctor/alerts');
    };
    const navigateMonitorPatients= () => {

        navigate('/nurse/monitor');
    };
    const seeMenuItem = () => {
        console.log("Am apasat pe meniu")
        if(hidden === "none")
            setHidden("auto");
        else setHidden("none");
    }
    const logout = () => {
        localStorage.clear();
        setHidden("none")
        navigate("/")
    }
    return (
        <div className="appHeader">
         <img src={healthlogo} alt={healthlogo} />
            <span> HealthMonitor </span>
            <div className="menubutton">
                <img src={menuicon} alt={menuicon} onClick={seeMenuItem}/>
            </div>
            <Paper sx={{ width: 200, zIndex : "1", maxWidth: '100%' , position: "fixed",
                left: "85%", display: hidden }}>
                    <MenuList>
                        {loggedDoc === "ion.popescu@doctor.com" &&
                            <MenuItem onClick={navigateManageAppointments}>
                                <ListItemText className="menuitem">Manage Appointments</ListItemText>
                            </MenuItem>
                        }
                        {loggedDoc === "ion.popescu@doctor.com" &&
                            <MenuItem onClick={navigateSeeFiles}>
                                <ListItemText className="menuitem">Patient Files</ListItemText>
                            </MenuItem>
                        }
                        {loggedDoc === "ion.popescu@doctor.com" &&

                            <MenuItem onClick={navigateSeeVitals}>
                                <ListItemText className="menuitem">See Vitals</ListItemText>
                            </MenuItem>
                        }
                        {loggedDoc === "ion.popescu@doctor.com" &&
                            <MenuItem onClick={navigatePersonalizeAlerts}>
                            <ListItemText className="menuitem">Set Values</ListItemText>
                            </MenuItem>
                        }
                        {loggedNurse === "ioana.popescu@nurse.com" &&
                            <MenuItem onClick={navigateMonitorPatients}>
                                <ListItemText className="menuitem">Monitor Patients</ListItemText>
                            </MenuItem>
                        }
                        { loggedNurse === "ioana.popescu@nurse.com" &&
                            <MenuItem onClick={navigateSeeFiles}>
                            <ListItemText className="menuitem">Patient Files</ListItemText>
                            </MenuItem>
                        }
                        <Divider/>
                        <MenuItem onClick={logout}>
                            <ListItemIcon>
                                <Logout></Logout>
                            </ListItemIcon>
                            <ListItemText className="menuitem">Logout</ListItemText>
                        </MenuItem>
                </MenuList>
            </Paper>
        </div>
    )
}

export default Header