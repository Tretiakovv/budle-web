import {FiFile, FiHome, FiLayers, FiSettings, FiUsers} from "react-icons/fi";

export const sidebarTagListData = [
    {
        id: 1,
        name: "Список заведений",
        route: "/establishment-list",
        icon: <FiHome size={"22px"}/>
    },
    {
        id: 2,
        name: "Настройки профиля",
        route: "/settings",
        icon: <FiSettings size={"22px"}/>
    },
    {
        id: 3,
        name: "Список менеджеров",
        route: "/manager-list",
        icon: <FiUsers size={"22px"}/>
    },
    {
        id: 4,
        name: "Меню заведения",
        route: "/establishment-menu",
        icon: <FiFile size={"22px"}/>
    },
    {
        id: 5,
        name: "Список заказов",
        route: "/order-list",
        icon: <FiLayers size={"22px"}/>
    },
]