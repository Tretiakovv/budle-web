const data = [
    {
        groupName : "Напитки",
        subgroups: [
            {
                subgroupName : "Кофе и чай",
                positions : [
                    {
                        name : "Бронзовая ярость",
                        category : "Кофе",
                        price : 220,
                        gram : 400,
                        inStock : true
                    },
                    {
                        name : "Тихоокеанский рубеж",
                        category : "Кофе",
                        price : 410,
                        gram : 350,
                        inStock : false
                    },
                ]
            },
            {
                subgroupName : "Алкогольные напитки",
                positions : [
                    {
                        name : "Безумный Макс",
                        category : "Коктейль",
                        price : 420,
                        gram : 200,
                        inStock : true
                    },
                    {
                        name : "Крик скуфа",
                        category : "Коктейль",
                        price : 700,
                        gram : 350,
                        inStock : true
                    },
                ]
            }
        ]
    },
    {
        groupName : "Горячие блюда",
        subgroups : [
            {
                subgroupName: "Бургеры",
                positions: [
                    {
                        name : "Meatboy с вишней",
                        category : "Бургер",
                        price : 370,
                        gram : 320,
                        inStock : true
                    }
                ]
            }
        ]
    }
]

export default data