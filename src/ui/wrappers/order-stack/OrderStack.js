import style from "./OrderStack.module.css"
import OrderCard from "../../moleculas/order-card/OrderCard";

const OrderStack = (props) => {

    const filteredOrders = props.orders.filter(order => order.status === props.orderStatus.id)

    return (
        <div className={style.wrapper}>
            <div className={style.stackHeader}>
                <h4 className={style.headerData}>{props.orderStatus.header}</h4>
                <h4 className={style.headerData}>{filteredOrders.length}</h4>
            </div>
            <div className={style.stackCol}>
                {
                    filteredOrders.map(order => {
                        return <OrderCard order={order}/>
                    })
                }
            </div>
        </div>
    )
}

export default OrderStack