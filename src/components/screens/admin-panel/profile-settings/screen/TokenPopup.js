import React, {useEffect} from 'react';
import PopupHeader from "../../../../../ui/atoms/rows/popup-header/PopupHeader";
import Popup from "../../../../../ui/wrappers/popup/Popup";
import {useUnit} from "effector-react";
import TextInput from "../../../../../ui/atoms/inputs/text-input/TextInput";
import {$token, getTokenFx} from "../../../../../models/settings/settings";
import {Colors} from "../../../../../theme/Colors";

const TokenPopup = (props) => {

    const [token, getToken] = useUnit([$token, getTokenFx])

    useEffect(() => {
        getToken()
    }, []);

    if (token) return (
        <Popup
            cardWidth={600}
            cardJustify={"start"}
            onClick={props.onClose}
            fullscreen
        >
            <PopupHeader
                header={"Токен доступа"}
                onClick={props.onClose}
            />
            <h4 className={'text-gray-400 font-medium text-base'}>
                С помощью данного токена ваш работодатель сможет добавить вас в заведение.
                Держите данный токен в секрете, если не хотите, чтобы вы работали в нескольких заведениях одновременно.
            </h4>
            <TextInput
                color={Colors["background-light-blue"]}
                value={token}
            />
        </Popup>
    );

};

export default TokenPopup;