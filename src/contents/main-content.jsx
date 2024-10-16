import React from "react";
import MenuItemList from "../components/menu-item-list";
import KidsContent from "./kids-content";

function MainContent() {
    return <main className="main-content">
        <MenuItemList />
        <KidsContent />
    </main>
}

export default MainContent;
