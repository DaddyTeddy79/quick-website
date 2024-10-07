import React from "react";
import { ReactComponent as MyQuickIcon } from "../images/myquick.svg";
import OrderButton from "./order-button";

function RightNavigation() {
    return <span className="right-navigation">
        <span><MyQuickIcon className="my-quick-icon" /></span>
        <span className="my-quick-label"> | MyQuick</span>
        <span><OrderButton /></span>
    </span>
}

export default RightNavigation;
