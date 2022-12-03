import React from 'react'
import healthlogo from "./images/health-logo.svg";
import "./Header.css"
import Menu from "./Menu.js"

function Header() {
    return (
        <div className="appHeader">
         <img src={healthlogo} alt={healthlogo} />
            <span> HealthMonitor </span>
            <Menu></Menu>
        </div>
    )
}

export default Header