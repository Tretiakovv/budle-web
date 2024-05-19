import style from "./EstablishmentList.module.css"
import BranchCard from "../../moleculas/branch-card/BranchCard";

const EstablishmentList = (props) => {
    return (
        <div className={style.wrapper}>
            {props.data.map(establishment => (
                <BranchCard onDelete={props.onDelete} establishment={establishment}/>
            ))}
        </div>
    )
}

export default EstablishmentList