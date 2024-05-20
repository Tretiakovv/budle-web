import SwitchOption from "../../atoms/buttons/switch-option/SwitchOption";

const SwitchButton = (props) => {
    return (
        <div className={"flex flex-row items-center"}>
            {props.options.map(option => {
                return <SwitchOption
                    message={option.message}
                    onSelect={props.onSelect}
                    activeOption={props.activeOption}
                    option={option}
                />
            })}
        </div>
    );
}

export default SwitchButton;