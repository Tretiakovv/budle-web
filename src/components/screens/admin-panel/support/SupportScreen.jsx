import React, {useEffect, useState} from 'react';
import mainStyle from "../../AdminPanel.module.css";
import Sidebar from "../../../../ui/wrappers/sidebar/SIdebar";
import HeaderColumn from "../../../../ui/wrappers/header-column/HeaderColumn";
import SupportTable from "../../../../ui/wrappers/SupportTable";
import {useStore} from "../../../../store/store";
import {useShallow} from "zustand/react/shallow";
import {mapEstablishmentsToOptions} from "../../../../utils/mapEstablishmentsToOptions";
import {useQuery} from "react-query";
import DropdownInput from "../../../../ui/atoms/inputs/dropdown-input/DropdownInput";
import {useSearchParams} from "react-router-dom";
import {useUnit} from "effector-react";
import {$activeOrdersOption, $orderScreenOptions, setActiveOrdersOption} from "../../../../models/orders/model";
import {getEstablishmentsFx} from "../../../../models/establishment-list/model";
import AdminPanelWrapper from "../../../../ui/wrappers/AdminPanelWrapper";

const SupportScreen = () => {

    const getEstablishments = useUnit(getEstablishmentsFx)
    const [options, activeOption, setActiveOption] = useUnit([$orderScreenOptions, $activeOrdersOption, setActiveOrdersOption])
    const [_, setSearchParams] = useSearchParams()

    const handleChangeOption = (option) => {
        setSearchParams(prev => {
            prev.set("establishmentId", option.id)
            return prev
        })
        setActiveOption(option)
    }

    useEffect(() => {
        getEstablishments()
    }, []);

    if (options && activeOption) return (
        <AdminPanelWrapper>
            <HeaderColumn header={"Поддержка"}>
                <DropdownInput
                    className={"col-span-2"}
                    selectedOption={activeOption}
                    selectOption={handleChangeOption}
                    placeholder={"Выберите заведение"}
                    options={options}
                />
            </HeaderColumn>
            <SupportTable/>
        </AdminPanelWrapper>
    );

};

export default SupportScreen;