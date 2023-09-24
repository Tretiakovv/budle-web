import style from "./EstablishmentGroup.module.css"
import BranchCard from "../../moleculas/branch-card/BranchCard";

const EstablishmentGroup = (props) => {
    return (
        <div className={style.layout}>
            <h2>{props.establishmentName}</h2>
            <div className={style.content}>
                {
                    props.branches.map(branch => {
                        return <BranchCard
                            address={branch.address}
                            additional={branch.additional}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default EstablishmentGroup