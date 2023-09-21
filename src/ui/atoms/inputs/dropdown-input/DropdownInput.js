import "./DropdwonInput.module.css"
import {Children, useState} from "react";

const DropdownInput = (props) => {

    const [color, changeColor] = useState("text-text-gray")

    return (
        <select
            onChange={() => {changeColor("text-black")}}
            className={color}
        >
            {
                Children.map(props.children, (child) => (
                    <option>
                        {child}
                    </option>
                ))
            }
        </select>
    )

}

export default DropdownInput