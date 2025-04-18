
const scenes = [
    {
        text: "Сцена 0 — Интро. Добро пожаловать в постапокалиптический мир Плова!",
        image: "images/scene0.jpg",
        choices: [
            { text: "Начать приключение", nextScene: 1 }
        ]
    },
    {
        text: "Ты выходишь из Убежища №88, перед тобой три пути...",
        image: "images/scene1.jpg",
        choices: [
            { text: "Зайти в подвал", nextScene: 2 },
            { text: "Проверить радиостанцию", nextScene: 3 },
            { text: "Выйти в пустошь", nextScene: 4 }
        ]
    },
    {
        text: "Подвал пуст, но ты находишь банку тушёнки.",
        image: "images/scene2.jpg",
        choices: [
            { text: "Вернуться", nextScene: 1 }
        ]
    }
    // Добавь остальные сцены по аналогии
];
