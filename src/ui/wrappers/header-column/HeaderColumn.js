import style from "./HeaderColumn.module.css"
import {useNavigate} from "react-router-dom";

const HeaderColumn = ({header, ...props}) => {

    const navigate = useNavigate()
    const handleBack = () => navigate(-1)

    return (
        <div className={style.layout}>
            <div className={"flex flex-row col-span-full items-end gap-4"}>
                <h1>{header}</h1>
                {
                    props.canGoBack && <h5
                        onClick={handleBack}
                        className={"text-lg hover:cursor-pointer font-medium text-text-gray"}
                    >
                        Назад
                    </h5>
                }
            </div>
            <div className={style.row}>{props.children}</div>
        </div>
    )
}

export default HeaderColumn