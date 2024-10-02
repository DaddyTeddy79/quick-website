import React from "react";

function MenuItem ({text, svgImage}) {
    return <div className="menu-item">
        <div className="menu-item-image">{svgImage}</div>
        <div className="menu-item-text">{text}</div>
    </div>
}

export default MenuItem;
