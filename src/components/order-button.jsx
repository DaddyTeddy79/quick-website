import React from "react";
import { ReactComponent as ClickHereIcon } from "../images/click-here-icon.svg";

function OrderButton() {
    return <span className="order-button">
        <ClickHereIcon className="click-here-icon"/>
        <span> | Commander</span>
    </span>
}

export default OrderButton;
