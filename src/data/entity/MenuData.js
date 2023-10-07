const menuData = [{
    establishmentID: 1,
    branchID: 1,
    menu: [
        {
            groupName: "Напитки",
            subgroups: [
                {
                    subgroupName: "Кофе и чай",
                    positions: [
                        {
                            name: "Бронзовая ярость",
                            category: "Кофе",
                            price: 220,
                            gram: 400,
                            inStock: true
                        },
                        {
                            name: "Тихоокеанский рубеж",
                            category: "Кофе",
                            price: 410,
                            gram: 350,
                            inStock: false
                        },
                    ]
                },
                {
                    subgroupName: "Алкогольные напитки",
                    positions: [
                        {
                            name: "Безумный Макс",
                            category: "Коктейль",
                            price: 420,
                            gram: 200,
                            inStock: true
                        },
                        {
                            name: "Крик скуфа",
                            category: "Коктейль",
                            price: 700,
                            gram: 350,
                            inStock: true
                        },
                    ]
                }
            ]
        },
        {
            groupName: "Горячие блюда",
            subgroups: [
                {
                    subgroupName: "Бургеры",
                    positions: [
                        {
                            name: "Meatboy с вишней",
                            category: "Бургер",
                            price: 370,
                            gram: 320,
                            inStock: true
                        }
                    ]
                }
            ]
        }
    ]
}, {
    establishmentID: 1,
    branchID: 2,
    menu: [
        {
            groupName: "Напитки",
            subgroups: [
                {
                    subgroupName: "Кофе и чай",
                    positions: [
                        {
                            name: "Свиной кайф",
                            category: "Кофе",
                            price: 330,
                            gram: 350,
                            inStock: true
                        },
                        {
                            name: "Зеленая миля",
                            category: "Кофе",
                            price: 450,
                            gram: 500,
                            inStock: true
                        },
                    ]
                }
            ]
        },
        {
            groupName: "Горячие блюда",
            subgroups: [
                {
                    subgroupName: "Бургеры",
                    positions: [
                        {
                            name: "Живая сталь",
                            category: "Бургер",
                            price: 600,
                            gram: 300,
                            inStock: true
                        },
                        {
                            name: "Синий кит",
                            category: "Бургер",
                            price: 420,
                            gram: 280,
                            inStock: false
                        }
                    ]
                }
            ]
        }
    ]
}, {
    establishmentID: 2,
    branchID: 1,
    menu: [
        {
            groupName: "Напитки",
            subgroups: []
        },
        {
            groupName: "Горячие блюда",
            subgroups: []
        }
    ]
}]

export default menuData