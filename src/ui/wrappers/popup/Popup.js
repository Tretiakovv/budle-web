import {useEffect, useRef, useState} from "react";

const Popup = ({
                   fullscreen = false,
                   cardWidth = 735,
                   cardJustify = "center",
                   ...props
               }) => {

    const marginTop = cardJustify === "center" ? 0 : 40
    const ref = useRef(null)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        setHeight(ref.current?.clientHeight)
    }, [ref])

    return (
        <div
            onClick={props.onClick}
            style={{justifyContent: cardJustify, height : fullscreen ? '100vh' : height + 80}}
            className={"left-0 top-0 z-40 absolute flex flex-col justify-center h-full w-full items-center bg-text-black bg-opacity-80"}
        >
            <div
                ref={ref}
                onClick={e => e.stopPropagation()}
                className={'flex flex-col gap-7 p-10 rounded-2xl bg-white z-20'}
                style={{width: cardWidth, marginTop: marginTop}}
            >
                {props.children}
            </div>
        </div>
    )

}

export default Popup