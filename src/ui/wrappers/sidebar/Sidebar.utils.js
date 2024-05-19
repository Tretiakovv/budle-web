import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

export const useSidebar = () => {

    const location = useLocation()
    const [activeTab, setActive] = useState(1)

    useEffect(() => {
        console.log(location.pathname)
    }, [location])

    return activeTab

}