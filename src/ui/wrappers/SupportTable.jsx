import {cn} from "../../utils/cn";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useUnit} from "effector-react";
import {$orders} from "../../models/orders/model";
import dayjs from "dayjs";

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
            <h1 className={"min-w-[150px]"}>Бронь {order.id}</h1>
            <h1 className={"min-w-[150px]"}>{dayjs(Date.now()).format('DD.MM.YYYY')}</h1>
            <h1 className={"min-w-[150px]"}>Столик 12</h1>
            <h1 className={"min-w-[150px]"}>{order.guestCount}</h1>
            <h1 className={"min-w-[150px]"}>{order.guestName}</h1>
            <h1 className={"min-w-[150px]"}>{dayjs(Date.now()).format('DD.MM.YYYY')}</h1>
            <OrderStatus orderStatus={order.status}/>
        </TableRowWrapper>
    )
}

const SupportTable = () => {

    const orders = useUnit($orders)

    const navigate = useNavigate()
    const handleClick = (id) => navigate(`/support/chat?orderId=${id}`)

    console.log(orders)

    return (
        <section className={"col-span-full bg-white flex flex-col rounded-3xl mb-7"}>
            <TableHeader/>
            {orders.map((order, orderKey) => (
                <TableRow
                    onClick={() => handleClick(order.id)}
                    order={order} key={orderKey}
                />
            ))}
        </section>
    );

};

export default SupportTable;