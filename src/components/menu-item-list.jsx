import React from "react";
import { ReactComponent as NewMenuImage } from "../images/new-menu-image.svg";
import { ReactComponent as BurgerMenuImage } from "../images/burger-menu-image.svg";
import { ReactComponent as FingerfoodMenuImage } from "../images/fingerfood-menu-image.svg";
import { ReactComponent as DessertMenuImage } from "../images/dessert-menu-image.svg";
import { ReactComponent as KidsMenuImage } from "../images/kids-menu-image.svg";
import { ReactComponent as SaladsMenuImage } from "../images/salads-menu-image.svg";
import { ReactComponent as BeverageMenuImage } from "../images/beverage-menu-image.svg";
import MenuItem from "./menu-item";

function MenuItemList() {
    return <div className="menu-item-list">
        <MenuItem text={"Nouveau"} svgImage={<NewMenuImage fill="#C6C6C6" />} />
        <MenuItem text={"Burgers"} svgImage={<BurgerMenuImage fill="#C6C6C6" />} />
        <MenuItem text={"Fingerfood"} svgImage={<FingerfoodMenuImage fill="#C6C6C6" />} />
        <MenuItem text={"Desserts"} svgImage={<DessertMenuImage fill="#C6C6C6" />} />
        <MenuItem text={"Kids"} svgImage={<KidsMenuImage fill="#C6C6C6" />} />
        <MenuItem text={"Salades"} svgImage={<SaladsMenuImage fill="#C6C6C6" />} />
        <MenuItem text={"Boissons"} svgImage={<BeverageMenuImage fill="#C6C6C6" />} />
    </div>
}

export default MenuItemList;
