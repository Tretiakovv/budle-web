import React from 'react';
import {FiX} from "react-icons/fi";
import {Controller} from "react-hook-form";
import ConnectForm from "../../../wrappers/connect-form/ConnectForm";
import {cn} from "../../../../utils/cn";

const buttonCV = [
    'absolute z-10 top-5 right-5 size-8 flex items-center',
    'justify-center rounded-full bg-black bg-opacity-50',
    'hover:bg-opacity-70 hover:cur'
]

const PhotoCard = (props) => {
    return (
        <section className={'relative w-full h-[160px] rounded-xl overflow-clip'}>
            <div className={cn(buttonCV)} onClick={props.onDelete}>
                <FiX size={"22px"} className={"stroke-white"}/>
            </div>
            <img src={props.value} alt={'/'} className={'w-full h-full object-cover'}/>
        </section>
    );
};

const ControlledPhotoCard = (props) => (
    <ConnectForm>
        {(methods) => (
            <Controller
                control={methods.control}
                name={props.name}
                render={({field: {value}}) => (<PhotoCard {...props} value={value}/>)}
            />
        )}
    </ConnectForm>
)

export default ControlledPhotoCard;