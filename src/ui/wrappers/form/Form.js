import {Children} from "react";

const Form = (props) => {

    const childrenWithDiv = Children.map(props.children, (child, key) => {
        const padding = key !== Children.count(props.children) - 1 ? "30px" : "0px"
        return <div style={{marginBottom: padding}}>{child}</div>
    })

    return (
        <form style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            {childrenWithDiv}
        </form>
    )
}

export default Form