import React from 'react';
import mainStyle from "../../AdminPanel.module.css";
import Sidebar from "../../../../ui/wrappers/sidebar/SIdebar";
import HeaderColumn from "../../../../ui/wrappers/header-column/HeaderColumn";
import SupportTable from "../../../../ui/wrappers/SupportTable";
import {orders} from "../../../../data/entity/SupportData";

const SupportScreen = () => {

    const options = [
        {label: "Закрыт", value: "closed"},
        {label: "Открыт", value: "opened"},
    ]

    return (
        <div className={mainStyle.layout}>
            <Sidebar activeTab={6}/>
            <div className={mainStyle.content}>
                <HeaderColumn header={"Поддержка"}/>
                <SupportTable orders={orders}/>
            </div>
        </div>
    );

};

export default SupportScreen;