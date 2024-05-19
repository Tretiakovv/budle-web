const IconButton = (props) => {
    return (
        <div onClick={props.onClick}>
            <img src={props.image} alt={"Icon button"}/>
        </div>
    )
}

export default IconButton