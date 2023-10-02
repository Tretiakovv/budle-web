import style from "./Popup.module.css"
import {useLayoutEffect, useRef, useState} from "react";

const Popup = ({
                   cardWidth = 735,
                    cardJustify = "center",
                   ...props}) => {

    const marginTop = cardJustify === "center" ? 0 : 40

    const ref = useRef(null)
    const [height, setHeight] = useState(0)

    useLayoutEffect(() => {
        setHeight(ref.current.offsetHeight)
    }, [])

    const popupHeight = height < document.body.clientHeight ? "full" : height + 100

    return (
        <div
            style={{height: popupHeight}}
            className={style.wrapper}
        >
            <div style={{justifyContent: cardJustify}} className={style.content}>
                <div
                    style={{
                        width: cardWidth,
                        marginTop: marginTop
                    }}
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