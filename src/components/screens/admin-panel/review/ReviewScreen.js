import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import AdminPanelWrapper from "../../../../ui/wrappers/AdminPanelWrapper";
import ReviewChat from "../../../../ui/moleculas/review-chat/ReviewChat";
import {useUnit} from "effector-react";
import {
    $currentReview,
    $reviewScreenActiveOption,
    $reviewScreenOptions,
    getReviewByIdFx, setReviewScreenActiveOption
} from "../../../../models/reviews/model";
import {getEstablishmentsFx} from "../../../../models/establishment-list/model";
import DropdownInput from "../../../../ui/atoms/inputs/dropdown-input/DropdownInput";
import HeaderColumn from "../../../../ui/wrappers/header-column/HeaderColumn";

const ReviewScreen = () => {

    const getEstablishments = useUnit(getEstablishmentsFx)
    const [review, getReview] = useUnit([$currentReview, getReviewByIdFx])
    const [options, activeOption, setActiveOption] = useUnit([$reviewScreenOptions, $reviewScreenActiveOption, setReviewScreenActiveOption])

    const [searchParams, _] = useSearchParams()
    const id = searchParams.get('id')

    useEffect(() => {
        getReview(id)
    }, [id]);

    useEffect(() => {
        getEstablishments()
    }, []);

    if (options && activeOption) return (
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
            <ReviewChat/>
        </AdminPanelWrapper>
    );

};

export default ReviewScreen;