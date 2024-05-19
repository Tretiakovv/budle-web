import React from 'react';
import Sidebar from "./sidebar/SIdebar";
import {cn} from "@nextui-org/react";

const AdminPanelWrapper = ({children, className}) => {
    return (
        <div className={'h-full grid grid-cols-10 gap-[20px] bg-background-blue'}>
            <Sidebar activeTab={1}/>
            <div className={cn('h-full mr-5 flex flex-col gap-5 col-span-8', className)}>
                {children}
            </div>
        </div>
    );
};

export default AdminPanelWrapper;