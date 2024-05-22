import React, {useEffect} from 'react';
import AdminPanelWrapper from "../../../../ui/wrappers/AdminPanelWrapper";
import ReviewTable from "../../../../ui/moleculas/review-table/ReviewTable";
import DropdownInput from "../../../../ui/atoms/inputs/dropdown-input/DropdownInput";
import Button from "../../../../ui/atoms/buttons/button/Button";
import {FiPauseCircle} from "react-icons/fi";
import HeaderColumn from "../../../../ui/wrappers/header-column/HeaderColumn";
import {useUnit} from "effector-react";
import {
    $reviewScreenActiveOption,
    $reviewScreenOptions,
    setReviewScreenActiveOption
} from "../../../../models/reviews/model";
import {getEstablishmentsFx} from "../../../../models/establishment-list/model";

const ReviewsListScreen = () => {

    const getEstablishments = useUnit(getEstablishmentsFx)
    const [options, activeOption, setActiveOption]
        = useUnit([$reviewScreenOptions, $reviewScreenActiveOption, setReviewScreenActiveOption])

    useEffect(() => {
        getEstablishments()
    }, []);

    if (options.length && activeOption) return (
        <AdminPanelWrapper>
            <HeaderColumn header={"Отзывы"}>
                <DropdownInput
                    className={'col-span-full'}
                    placeholder={"Выберите заведение"}
                    selectedOption={activeOption}
                    selectOption={setActiveOption}
                    options={options}
                />
            </HeaderColumn>
            <ReviewTable/>
        </AdminPanelWrapper>
    );

};

export default ReviewsListScreen;