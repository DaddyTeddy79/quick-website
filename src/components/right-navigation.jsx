import React from "react";
import { ReactComponent as MyQuickIcon } from "../images/myquick.svg";
import OrderButton from "./order-button";

function RightNavigation() {
    return <span>
        <span><MyQuickIcon className="my-quick-icon" /> | MyQuick</span>
        <span><OrderButton /></span>
    </span>
}

export default RightNavigation;
