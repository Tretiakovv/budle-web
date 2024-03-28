import React from 'react';
import mainStyle from "../../AdminPanel.module.css";
import Sidebar from "../../../../ui/wrappers/sidebar/SIdebar";
import HeaderColumn from "../../../../ui/wrappers/header-column/HeaderColumn";
import {useSearchParams} from "react-router-dom";
import Button from "../../../../ui/atoms/buttons/button/Button";
import OrderChat from "../../../../ui/wrappers/OrderChat";

const SupportChatScreen = () => {

    const [searchParams] = useSearchParams()
    const orderId = searchParams.get("id")

    const handleShowOrderInformation = () => console.log("Information")
    const handleCloseOrder = () => console.log("Closed")

    return (
        <div className={mainStyle.layout}>
            <Sidebar activeTab={6}/>
            <div className={mainStyle.content}>
                <HeaderColumn header={`Чат по заказу #${orderId}`} canGoBack>
                    <Button
                        className={"col-span-2"}
                        buttonText={"Информация о брони"}
                        onClick={handleShowOrderInformation}
                    />
                    <Button
                        className={"col-span-2 bg-message-wrong hover:bg-red-500 text-white"}
                        buttonText={"Закрыть обращение"}
                        onClick={handleCloseOrder}
                    />
                </HeaderColumn>
                <OrderChat orderId={orderId}/>
            </div>
        </div>
    );

};

export default SupportChatScreen;