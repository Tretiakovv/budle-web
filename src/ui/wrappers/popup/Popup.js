import style from "./Popup.module.css"
import {useLayoutEffect, useRef, useState} from "react";

const Popup = ({cardWidth = 735, ...props}) => {

    const ref = useRef(null)
    const [height, setHeight] = useState(0)

    useLayoutEffect(() => {
        setHeight(ref.current.offsetHeight)
    }, [])

    return (
        <div
            style={{height: height + 100}}
            className={style.wrapper}
        >
            <div className={style.content}>
                <div
                    style={{width: cardWidth}}
                    className={style.card}
                    ref={ref}
                >
                    {props.children}
                </div>
                <div
                    className={style.background}
                    onClick={props.onClick}
                />
            </div>
        </div>
    )
}

export default Popup