import style from "./OrderCard.module.css"

const OrderCard = ({order, stack, setDragging, ...props}) => {

    const cardData = [
        {
            header: "Время",
            data: order.bookingTime ?? "Не указано"
        }, {
            header: "Кол-во гостей",
            data: order.guestCount
        }, {
            header: "Бронь на имя",
            data: order.guestName
        },
    ]

    return (
        <div
            {...props}
            draggable={true}
            className={style.wrapper}
            onDrop={props.onDrop}
            onClick={(e) => {
                e.stopPropagation();
                props.selectOrder();
            }}
        >

            <div className={style.headerRow}>
                <h4 className={style.header}>
                    {`Столик ${order.id}`}
                </h4>
                {
                    order.preorder ? <div className={style.preorderTag}>
                        <h4 className={style.tagHeader}>Предзаказ</h4>
                    </div> : null
                }
            </div>

            <div className={style.infoCol}>
                {
                    cardData.map(element => {
                        return <div className={style.infoRow}>
                            <h4 className={style.infoHeader}>
                                {element.header}
                            </h4>
                            <h4 className={style.infoData}>
                                {element.data}
                            </h4>
                        </div>
                    })
                }
            </div>

        </div>
    )
}

export default OrderCard