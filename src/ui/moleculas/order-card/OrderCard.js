import style from "./OrderCard.module.css"

const OrderCard = (props) => {

    const order = props.order

    const cardData = [
        {
            header: "Время",
            data: order.date
        }, {
            header: "Кол-во гостей",
            data: order.guests
        }, {
            header: "Бронь на имя",
            data: order.orderCreator
        },
    ]

    return (
        <div
            className={style.wrapper}
            onClick={() => props.onSelectOrder(order)}
        >

            <div className={style.headerRow}>
                <h4 className={style.header}>
                    {`Столик ${order.spotNumber}`}
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