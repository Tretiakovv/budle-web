import React from 'react';
import {Controller} from "react-hook-form";
import FileInput from "./FileInput";

const ControlledFileInput = (
    {
        required = true, control, inputName,
        validatorMessage, label, placeholder, error
    }
) => {
    return (
        <div className={"w-full flex flex-col gap-[10px]"}>
            <Controller
                control={control}
                name={inputName}
                rules={{ required: required && validatorMessage }}
                render={({ field: { value, onChange, ...field } }) => {
                    return (
                        <FileInput
                            {...field}
                            onChange={(event) => {
                                if (!event) onChange(undefined)
                                else onChange(event.target.files[0])
                            }}
                            value={value && URL.createObjectURL(value)}
                            label={label}
                            placeholder={placeholder}
                        />
                    );
                }}
            />
            <div className={"text-message-wrong font-medium"}>
                {error}
            </div>
        </div>
    );
};

export default ControlledFileInput;
