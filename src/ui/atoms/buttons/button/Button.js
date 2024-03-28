import style from "./Button.module.css"
import {Colors} from "../../../../theme/Colors";
import {twMerge} from "tailwind-merge";
import {cn} from "@nextui-org/react";

const Button = ({
                    type = "primary",
                    buttonType = "button",
                    ...props
                }) => {

    return (
        <button
            type={buttonType}
            className={cn("w-full h-fit py-5 rounded-xl text-white bg-black border-0", props.className)}
            onClick={props.onClick}
        >
            {
                props.icon === undefined ? props.buttonText :
                    <span className={style.row}>
                        {props.icon}
                        {props.buttonText}
                    </span>
            }
        </button>
    )

}

export default Button