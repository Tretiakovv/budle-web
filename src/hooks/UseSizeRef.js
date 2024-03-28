import {useLayoutEffect, useRef, useState} from "react";

export const useSizeRef = () => {

    const ref = useRef(null)

    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    useLayoutEffect(() => {
        setWidth(ref.current.offsetWidth)
        setHeight(ref.current.offsetHeight)
    })

    return {ref, width, height}

}