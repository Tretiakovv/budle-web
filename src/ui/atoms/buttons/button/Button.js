import style from "./Button.module.css"
import {cn} from "../../../../utils/cn";

const Button = ({type = "primary", ...props}) => {

    const buttonCV = [
        "w-full h-fit py-5 rounded-xl text-white bg-black border-0",
        {"bg-blue-100 text-blue-400" : type !== 'primary'},
        {"hover:text-blue-600 hover:bg-blue-200 transition duration-200" : type !== 'primary'},
        props.className
    ]

    return (
        <button className={cn(buttonCV)} onClick={props.onClick}>
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