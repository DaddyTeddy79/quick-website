import React from "react";
import { ReactComponent as QuickLogo } from "../images/logo.svg";
import LeftNavigation from "./left-navigation";
import RightNavigation from "./right-navigation";

function MainHeader() {
    return <>
        <header className="main-header">
            <QuickLogo className="quick-logo"/>
            <nav className="main-navigation">
                <LeftNavigation />
                <RightNavigation />
            </nav>
        </header>
    </>
}

export default MainHeader;
