import style from "./EstablishmentList.module.css"
import Sidebar from "../../../../ui/wrappers/sidebar/SIdebar";

const EstablishmentListScreen = () => {
    return (
        <div className={style.layout}>
          <Sidebar/>
          <div className={style.content}></div>
        </div>
    );
}


export default EstablishmentListScreen;
