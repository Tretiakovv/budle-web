import React, {useState} from 'react';
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

const SupportScreen = () => {

    const [activeEstOption, setActiveEstOption] = useState({id : 0, name : ""})
    const [_, setSearchParams] = useSearchParams()

    const [establishments, getEstablishments] = useStore(
        useShallow(state => [state.establishmentList, state.getEstablishmentList])
    )

    const options = mapEstablishmentsToOptions(establishments)

    const getEstablishmentsQuery = useQuery({
        queryKey : ["get", "establishmentList"],
        queryFn : () => getEstablishments(),
    })

    const handleChangeOption = (option) => {
        setSearchParams(prev => {
            prev.set("establishmentId", option.id)
            return prev
        })
        setActiveEstOption(option)
    }

    if (getEstablishmentsQuery.isLoading) {
        return (
            <div>
                Establishments is loading..
            </div>
        )
    }

    if (getEstablishmentsQuery.isSuccess) return (
        <div className={mainStyle.layout}>
            <Sidebar activeTab={6}/>
            <div className={mainStyle.content}>
                <HeaderColumn header={"Поддержка"}>
                    <DropdownInput
                        className={"col-span-2"}
                        selectedOption={activeEstOption}
                        selectOption={handleChangeOption}
                        placeholder={"Выберите заведение"}
                        options={options}
                    />
                </HeaderColumn>
                <SupportTable/>
            </div>
        </div>
    );

};

export default SupportScreen;