import React from 'react';
import ConnectForm from "../../../wrappers/connect-form/ConnectForm";
import Switch from "./Switch";
import {Controller} from "react-hook-form";

const ControlledSwitch = (props) => (
    <ConnectForm>
        {(methods) => (
            <Controller
                control={methods.control}
                name={props.name}
                render={({field: {value, onChange}}) => (
                    <Switch {...props} isActive={value} onClick={() => onChange(!value)}/>
                )}
            />
        )}
    </ConnectForm>
)

export default ControlledSwitch;