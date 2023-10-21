import style from "./OrderStack.module.css"
import OrderCard from "../../moleculas/order-card/OrderCard";
import {useState} from "react";

const OrderStack = ({stack}) => {

    const [isDragging, setDragging] = useState(false)
    const stackColor = isDragging ? "#D4EAFF" : "#EEF5F9"

    return (
        <div className={style.wrapper}>
            <div className={style.stackHeader}>
                <h4 className={style.headerData}>{stack.name}</h4>
                <h4 className={style.headerData}>{stack.items.length}</h4>
            </div>
            <div
                style={{backgroundColor: stackColor}}
                className={style.stackCol}
            >
                {
                    stack.items.map((order) => (
                        <OrderCard
                            stack={stack}
                            order={order}
                            setDragging={(isDragging) => setDragging(isDragging)}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default OrderStack