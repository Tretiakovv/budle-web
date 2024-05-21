import {cn} from "../../../../utils/cn";
import {CircularProgress} from "@mui/joy";

const Button = ({type = "primary", ...props}) => {

    const buttonCV = [
        "w-full h-fit py-5 flex flex-row items-center justify-center gap-3 rounded-xl text-white bg-black border-0",
        {"hover:text-blue-600 hover:bg-blue-200 transition duration-200": type !== 'primary'},
        {"bg-blue-100 text-blue-400": type !== 'primary'},
        props.className
    ]

    return (
        <button className={cn(buttonCV)} onClick={props.onClick}>
            {props.icon}
            {props.buttonText}
            {props.disabled && <CircularProgress variant={"soft"} size={"sm"}/>}
        </button>
    )

}

export default Button