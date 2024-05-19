import React from 'react';
import {FiDelete, FiTrash2} from "react-icons/fi";

const SquareButton = (props) => {
    return (
        <div
            onClick={props.onClick}
            className={'rounded-xl bg-red-50 cursor-pointer hover:bg-red-100 transition duration-200 p-3'}
        >
            <FiTrash2 size={'18px'} className={'text-red-600'}/>
        </div>
    );
};

export default SquareButton;