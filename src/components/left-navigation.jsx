import React from "react";
import hamburgerMenuIcon from "../images/hamburger-menu-icon.jpg";

function LeftNavigation() {
    return <span className="left-navigation">
        <img src={hamburgerMenuIcon} width="50px" height="50px"></img>
        <span>Nos produits</span>
        <span>Nos restaurants</span>
        <span>Nos deals</span>
    </span>
}

export default LeftNavigation;
