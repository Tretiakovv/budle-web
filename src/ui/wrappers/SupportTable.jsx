import {cn} from "../../utils/cn";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useStore} from "../../store/store";
import {useShallow} from "zustand/react/shallow";
import {useQuery} from "react-query";

const TableRowWrapper = ({children, onClick}) => {

    const wrapperCV = [
        "transition duration-200 hover:cursor-pointer hover:bg-background-light-blue hover:bg-opacity-40",
        "w-full flex flex-row items-center gap-4 px-10",
        "py-8 border-b-2 border-background-blue"
    ]

    return (
        <section
            className={cn(wrapperCV)}
            onClick={onClick}
        >
            {children}
        </section>
    )

}

const TableHeader = () => {

    const tableHeaderData = [
        "Номер брони", "Дата", "Номер стола",
        "Кол-во человек", "Имя", "Создано", "Статус"
    ]

    return (
        <TableRowWrapper>
            {tableHeaderData.map((item, key) => (
                <h1 className={"min-w-[150px] text-text-gray"} key={key}>{item}</h1>
            ))}
        </TableRowWrapper>
    )

}

const OrderStatus = ({orderStatus}) => {

    const wrapperCV = [
        "rounded-full bg-background-light-blue px-3 py-2",
        {"bg-info-green bg-opacity-5 text-info-green": orderStatus === "closed"},
        {"bg-info-red bg-opacity-5 text-info-red": orderStatus === "opened"},
    ]

    return (
        <div className={cn(wrapperCV)}>
            {orderStatus === "closed" ? "Закрыт" : "Открыт"}
        </div>
    )

}

const TableRow = ({order, onClick}) => {
    return (
        <TableRowWrapper onClick={onClick}>
            {Object.values(order).map((item, key, array) => {
                return key !== array.length - 1
                    ? <h1 className={"min-w-[150px]"} key={key}>{item}</h1>
                    : <OrderStatus orderStatus={item}/>
            })}
        </TableRowWrapper>
    )
}

const SupportTable = () => {

    const [searchParams, _] = useSearchParams()
    const establishmentId = searchParams.get("establishmentId")

    const [orders, getOrders] = useStore(
        useShallow(state => [state.orders, state.getOrders])
    )

    const getOrdersQuery = useQuery({
        queryKey: ["get", "orders", establishmentId],
        queryFn: () => getOrders(establishmentId),
        refetchInterval: 1000 * 5
    })

    const navigate = useNavigate()
    const handleClick = (id) => navigate(`/support/chat?orderId=${id}`)

    if (getOrdersQuery.isLoading) {
        return (
            <div>
                Orders is loading..
            </div>
        )
    }

    if (getOrdersQuery.isSuccess) return (
        <section className={"col-span-full bg-white flex flex-col rounded-3xl mb-7"}>
            <TableHeader/>
            {orders.map((order, orderKey) => (
                <TableRow
                    order={order} key={orderKey}
                    onClick={() => handleClick(order.id)}
                />
            ))}
        </section>
    );

};

export default SupportTable;