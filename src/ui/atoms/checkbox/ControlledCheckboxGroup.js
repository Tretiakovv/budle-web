import React from 'react';
import {Controller, useFieldArray, useFormContext} from "react-hook-form";
import Checkbox from "./Checkbox";

const ControlledCheckboxGroup = (props) => {

    const {control} = useFormContext()
    const {fields} = useFieldArray({
        control, name: props.name
    })

    return <div className={'w-full flex flex-col gap-6'}>
        <h3 className={'text-lg font-semibold'}>Права доступа</h3>
        <div className={'grid grid-cols-2 gap-5'}>
            {fields.map((field, key) => (
                <Controller
                    name={`${props.name}.${key}`}
                    render={({field: {value, onChange}}) => (
                        <Checkbox
                            isSelected={value} label={props.options[key].optionName}
                            onSelect={() => onChange(!value)}
                        />
                    )}
                />
            ))}
        </div>
    </div>

}

export default ControlledCheckboxGroup;