import React from "react";

function MenuItem ({text, svgImage}) {
    return <div className="menu-item">
        {svgImage}
        <div className="menu-item-text">{text}</div>
    </div>
}

export default MenuItem;
