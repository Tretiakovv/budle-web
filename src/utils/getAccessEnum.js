export const createAccessEnum = (name) => {
    switch (name) {
        case "Добавление позиции в меню" :
            return "ADD_MENU_POSITION"
        case "Удаление позиции из меню":
            return "DELETE_MENU_POSITION"
        case "Добавление работников заведения":
            return "ADD_WORKERS"
        case "Удаление работников заведения":
            return "DELETE_WORKERS"
        case "Просмотр работников заведения":
            return "SEARCHING_WORKERS"
        case "Удаление заведения":
            return "DELETE_COMPANY"
        case "Редактирование информации заведения":
            return "EDITING_COMPANY"
        case "Просмотр заказов заведения":
            return "SEARCHING_ORDERS"
        case "Изменения статусов заказов":
            return "CHANGING_ORDER_STATUSES"
    }
}