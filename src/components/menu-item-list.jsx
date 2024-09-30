import React from "react";
import { ReactComponent as NewMenuItem } from "../images/new-menu-item.svg";
import { ReactComponent as BurgerMenuItem } from "../images/burger-menu-item.svg";
import { ReactComponent as FingerfoodMenuItem } from "../images/fingerfood-menu-item.svg";
import { ReactComponent as DessertMenuItem } from "../images/dessert-menu-item.svg";
import { ReactComponent as KidsMenuItem } from "../images/kids-menu-item.svg";
import { ReactComponent as SaladsMenuItem } from "../images/salads-menu-item.svg";
import { ReactComponent as BeverageMenuItem } from "../images/beverage-menu-item.svg";

function MenuItemList() {
    return <>
        <NewMenuItem fill="#C6C6C6" />
        <BurgerMenuItem fill="#C6C6C6"/>
        <FingerfoodMenuItem fill="#C6C6C6"/>
        <DessertMenuItem fill="#C6C6C6"/>
        <KidsMenuItem fill="#C6C6C6"/>
        <SaladsMenuItem fill="#C6C6C6"/>
        <BeverageMenuItem fill="#C6C6C6"/>
    </>
}

export default MenuItemList;
