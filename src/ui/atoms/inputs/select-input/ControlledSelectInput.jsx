import React from 'react';
import SelectInput from "./SelectInput";
import {Controller} from "react-hook-form";

const ControlledSelectInput = (
    {
        required = true, isMulti = false, inputName, control, errMessage,
        label, options, validatorMessage, ...props
    }
) => {
    return (
        <Controller
            name={inputName}
            control={control}
            rules={{required: required && validatorMessage}}
            render={({field}) => <SelectInput
                {...field} {...props}
                isMulti={isMulti}
                label={label}
                options={options}
                errMessage={errMessage}
            />
            }
        />
    );
};

export default ControlledSelectInput;
