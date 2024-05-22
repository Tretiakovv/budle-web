import OrderStack from "../order-stack/OrderStack";
import {useStore} from "../../../store/store";
import {useShallow} from "zustand/react/shallow";
import {OrderStatus} from "../../../data/enum/OrderStatus";
import {useUnit} from "effector-react";
import {$activeOrdersOption, $orders, getOrdersFx} from "../../../models/orders/model";
import {useEffect} from "react";

const OrderDesk = () => {

    const [orderDesk, setOrderDesk] = useStore(
        useShallow(state => [state.orderDesk, state.setOrderDesk])
    )

    const selectedEstablishment = useUnit($activeOrdersOption)
    const [orders, getOrders] = useUnit([$orders, getOrdersFx])

    const initOrderDesk = (orders) => {
        return Object.keys(OrderStatus).map((key) => {
            return {
                id: +key,
                name: OrderStatus[key],
                items: orders.filter((item) => item.status === key)
            }
        })
    }

    useEffect(() => {
        if (!orders.length) {
            getOrders(selectedEstablishment.id)
        } else {
            setOrderDesk(initOrderDesk(orders))
        }
    }, [orders]);

    return (
        <div className={'w-full grid grid-cols-8 gap-5 items-start'}>
            {orderDesk.map(stack => <OrderStack
                establishmentId={selectedEstablishment.id}
                stack={stack}
            />)}
        </div>
    )

}

export default OrderDesk