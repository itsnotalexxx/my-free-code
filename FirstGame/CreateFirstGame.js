alert('Добро пожаловать в мою первую созданную игру!');

var choiceYourLvl = prompt('Выберите уровень сложности Easy, Medium, Hard?');

console.log(choiceYourLvl);

var easyGame = 7;

var mediumGame = 5;

var hardGame = 3;

var gameLvl, gameMode;
 
if (choiceYourLvl) {
    switch(choiceYourLvl) {
        case 'easy':
        case 'Easy':
            gameLvl = easyGame;
            alert('Ваш уровень ' + choiceYourLvl + '. И у вас есть ' + easyGame + ' попыток, чтобы дать правильный ответ. Игра начинается! Удачи.');
            break;
        case 'medium':
        case 'Medium':
            gameLvl = mediumGame;
            alert('Ваш уровень ' + choiceYourLvl + '. И у вас есть ' + mediumGame + ' попыток, чтобы дать правильный ответ. Игра начинается! Удачи.');
            break;
        case 'hard':
        case 'Hard':
            gameLvl = hardGame;
            alert('Ваш уровень ' + choiceYourLvl + '. И у вас есть ' + hardGame + ' попыток, чтобы дать правильный ответ. Игра начинается! Удачи.');
            break;
        default:
            alert('Вы ввели неправильное значение, введите одно из предложенных: Easy, Medium, Hard. Перезагрузите страницу и попробуйте ещё раз.');
            break;
    } do {
        var gameMode = prompt('Какой из предложенных цветов есть на флаге Украины: красный, желтый, белый, зелёный, черный, фиолетовый?');

            switch(gameMode) {
                case 'желтый':
                case 'жёлтый':
                case 'Желтый':
                case 'Жёлтый':
                    alert('Правильно. Поздравляю, вы выиграли!');
                    gameLvl = 0;
                    break;
                case 'красный':
                case 'Красный':
                case 'белый':
                case 'Белый':
                case 'зелёный':
                case 'зеленый':
                case 'Зеленый':
                case 'Зелёный':
                case 'чёрный':
                case 'черный':
                case 'Чёрный':
                case 'Черный':
                case 'фиолетовый':
                case 'Фиолетовый':
                    gameLvl--
                    alert('Не правильный ответ и у вас осталось ' + gameLvl + ' попыток.');
                    break;
                default:
                    gameLvl--
                    alert('Неправильный вариант ответа, введите один из предложенных: красный, желтый, белый, зелёный, черный, фиолетовый. ' + gameLvl + ' попыток.');
                    break;
            }
        } while(gameLvl != 0); {
        alert('Игра окончена!');
    }
}