//Все переменные

let resultGame = document.querySelector(".result");
let btnClick = document.querySelector(".active-block__btn");
let btnClickTwo = document.querySelector(".active-block__button");
let i = 1;
let activeBlock = document.querySelector(".active-block");
let shop = document.querySelector(".active-block__button");
let market = document.querySelector(".shop");
let closeBtn = document.querySelector(".close");
let money = document.querySelector(".money");
let priceProduct = document.querySelectorAll(".btn__shop");
let pieces = document.querySelectorAll(".product__numbner");
let numProductOne = 0;
let numProductTwo = 0;
let numProductThree = 0;
let numberRecord = document.querySelector(".number_record");
const audioClick = new Audio('audio/click.mp3');
const audioMoney = new Audio('audio/Money.mp3');
let gameOver = document.querySelector(".gameOver");
let btnTimeMode = document.querySelector(".block_modeTime__btn");
let resultTime = document.querySelector(".ResultTime");
let navigationbtn = document.querySelector(".button_navigation");

//Кнопки
let modeTimeBtnOne = document.querySelector(".btn_time");
let modeTimeBtnThree = document.querySelector(".btn_timeTwo");

let modeTimeBtnTwo = document.querySelector(".btn_time_new");
let modeTimeBtnFour = document.querySelector(".btn_timeTwo_new");

//На время
let blockModeTime = document.querySelector(".block_modeTime");

modeTimeBtnOne.onclick = function () {
    blockModeTime.classList.remove("display");
    activeBlock.classList.add("display");
}
modeTimeBtnTwo.onclick = function () {
    blockModeTime.classList.add("display");
    activeBlock.classList.remove("display");
}

const Time = 5000;

btnTimeMode.addEventListener('mousedown', function () {
    btnTimeMode.style.top = 260 + "px";
    btnTimeMode.addEventListener('mouseup', function() {
        btnTimeMode.style.top = 245 + "px";
    });
    audioClick.play();
    run();
    btnTimeMode.textContent = "Жми!";
});

function run() {
    if (gameOver.textContent !== "Игра окончена!") {
        const startTime = Date.now();
        gameOver.textContent = formatTime(Time)

        btnTimeMode.onclick = () => resultTime.textContent++;

        const interval = setInterval(() => {
            const delta = Date.now() - startTime;
            gameOver.textContent = formatTime(Time - delta);
        }, 100);

        const timeout = setTimeout(() => {
            btnTimeMode.onclick = null;
            gameOver.textContent = "Игра окончена!";
            btnTimeMode.textContent = "Начать";

            clearInterval(interval);
            clearTimeout(timeout);
        }, Time);
    } else if (gameOver.textContent === "Игра окончена!") {
        resultTime.textContent = 0;
        gameOver.textContent = "5.00";
        Time = 5000;
    }
    
}

function formatTime(ms) {
    return Number.parseFloat(ms / 1000).toFixed(2);
}

//Основное окно

modeTimeBtnOne.addEventListener('mousedown', function() {
    modeTimeBtnOne.style.top = 1.8 + "%";
    modeTimeBtnTwo.style.top = 12 + "%";

    modeTimeBtnOne.style.background = "rgb(0, 81, 255)";
    modeTimeBtnOne.style.color = "rgb(255, 255, 255)";
    modeTimeBtnThree.style.background = "rgb(0, 27, 85)";

    modeTimeBtnTwo.style.background = "rgb(161, 161, 161)";
    modeTimeBtnTwo.style.color = "rgb(0, 0, 0)";
    modeTimeBtnFour.style.background = "rgb(100, 100, 100)";
    
});

modeTimeBtnTwo.addEventListener('mousedown', function() {
    modeTimeBtnOne.style.top = 1 + "%";
    modeTimeBtnTwo.style.top = 12.8 + "%";

    modeTimeBtnTwo.style.background = "rgb(0, 81, 255)";
    modeTimeBtnTwo.style.color = "rgb(255, 255, 255)";
    modeTimeBtnFour.style.background = "rgb(0, 27, 85)";


    modeTimeBtnOne.style.background = "rgb(161, 161, 161)";
    modeTimeBtnOne.style.color = "rgb(0, 0, 0)";
    modeTimeBtnThree.style.background = "rgb(100, 100, 100)";
});


btnClick.addEventListener('mousedown', function() {
    resultGame.textContent = Number(resultGame.textContent) + i;
    audioClick.play();
    btnClick.style.top = 7 + "px";
    btnClick.addEventListener('mouseup', function() {
        btnClick.style.top = 0 + "px";
    });
    if (Number(resultGame.textContent) > Number(numberRecord.textContent)) {
        numberRecord.textContent = resultGame.textContent;
    }
    return (resultGame.textContent);
});

btnClickTwo.addEventListener('mousedown', function() {
    btnClickTwo.style.top = 7 + "px";
    btnClickTwo.addEventListener('mouseup', function() {
        btnClickTwo.style.top = 0 + "px";
    });
});

//Магазин

shop.onclick = function () {
    activeBlock.classList.toggle("display");
    market.classList.toggle("display");
    navigationbtn.classList.add("display");
    money.textContent = resultGame.textContent;
};

closeBtn.onclick = function () {
    activeBlock.classList.toggle("display");
    market.classList.toggle("display");
    navigationbtn.classList.remove("display");
};

priceProduct[0].onclick = function () {
    if (Number(money.textContent) >= Number(priceProduct[0].children[1].textContent)) {
        money.textContent = Number(money.textContent - priceProduct[0].children[1].textContent);
        resultGame.textContent = money.textContent;
        pieces[0].textContent = ++numProductOne;
        i += 1;
        audioMoney.play()
    };
}; 

priceProduct[1].onclick = function () {
    if (Number(money.textContent) >= Number(priceProduct[1].children[1].textContent)) {
        money.textContent = Number(money.textContent - priceProduct[1].children[1].textContent);
        resultGame.textContent = money.textContent;
        pieces[1].textContent = ++numProductTwo;
        i += 10;
        audioMoney.play()
    };
};

priceProduct[2].onclick = function () {
    if (Number(money.textContent) >= Number(priceProduct[2].children[1].textContent)) {
        money.textContent = Number(money.textContent - priceProduct[2].children[1].textContent);
        resultGame.textContent = money.textContent;
        pieces[2].textContent = ++numProductThree;
        i += 200;
        audioMoney.play()
    };
};