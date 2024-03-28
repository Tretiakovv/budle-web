import Select from "react-select"
import React from "react"

const SelectInput = ({options, isMulti = false, label, errMessage, ...props}) => {

    const defaultClassName = "w-full !border-none !bg-background-light-blue py-[13px] px-[10px] !rounded-xl"

    const handleControlStyle = (state) => {
        return state.isFocused ? defaultClassName + " !outline-none" : defaultClassName
    }

    return (
        <div className={"w-full flex flex-col gap-[10px]"}>
            <div className={"font-medium text-base"}>
                {label}
            </div>
            <Select
                {...props}
                isMulti={isMulti}
                className={"w-full"}
                classNames={{
                    control: handleControlStyle,
                    option: () => "!p-[15px] w-full",
                    menu: () => "!rounded-xl !overflow-clip !p-[0px]",
                    indicatorSeparator: () => "!border-none !bg-none !appearance-none"
                }}
                placeholder={"Выберите категорию заведения"}
                options={options}
            />
            <div className={"text-medium text-message-wrong"}>
                {errMessage}
            </div>
        </div>
    );
};

export default SelectInput;
