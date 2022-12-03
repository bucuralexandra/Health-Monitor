import React from 'react'
import menuicon from "./images/menu.jpg";
import "./Menu.css"
function Menu() {
    return (
        <div className="menuitem">
            <img src={menuicon} alt={menuicon} />
        </div>
    )
}

export default Menu