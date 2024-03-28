import style from "./OrderDesk.module.css"
import OrderStack from "../order-stack/OrderStack";
import {useStore} from "../../../store/store";
import {useShallow} from "zustand/react/shallow";
import {useQuery} from "react-query";
import {OrderStatus} from "../../../data/enum/OrderStatus";
import {useSearchParams} from "react-router-dom";

const OrderDesk = () => {

    const [orderDesk, setOrderDesk] = useStore(
        useShallow(state => [state.orderDesk, state.setOrderDesk])
    )

    const [searchParams, setSearchParams] = useSearchParams()
    const establishmentId = searchParams.get("establishmentId")

    const [orders, getOrders] = useStore(
        useShallow(state => [state.orders, state.getOrders])
    )

    const initOrderDesk = (orders) => {
        return Object.keys(OrderStatus).map((key) => {
            return {
                id: +key,
                name: OrderStatus[key],
                items: orders.filter((item) => item.status === key)
            }
        })
    }

    const getOrdersQuery = useQuery({
        queryKey : ["get", "orders", establishmentId],
        queryFn : () => getOrders(establishmentId),
        onSuccess : () => {
            if (orders && establishmentId) {
                setOrderDesk(initOrderDesk(orders))
            }
        },
        refetchInterval : 1000 * 5
    })

    if (getOrdersQuery.isLoading) {
        return (
            <div>
                Orders is loading..
            </div>
        )
    }

    if (getOrdersQuery.isSuccess) {
        return (
            <div className={style.wrapper}>
                {orderDesk && orderDesk.map(stack => <OrderStack
                    establishmentId={establishmentId}
                    stack={stack}
                />)}
            </div>
        )
    }

}

export default OrderDesk