let x = '';
let funcHolder = 0;
let screen = document.getElementsByClassName('screen')[0];
//Вешает всем классам btn прослушку, заносит в переменную их содержимое.
for (i = 2; i < document.getElementsByClassName('btn').length - 1; i++) {
    let makeClickable = document.getElementsByClassName('btn')[i];
    let value = document.getElementsByClassName('btn')[i].innerText;
    makeClickable.addEventListener('click', function () {
    let classHolder = makeClickable.className;       

//если была нажата кнопка из функ блока funcHolder увеличться на 1 если обычная кнопка обнулится
        if (classHolder.indexOf('funcBlock') > 0) {
            funcHolder += 1;
            console.log("funcHolder = 1");
        } else {
            funcHolder = 0;
            console.log("funcHolder = 0");
        };
//если нажата цифр кнопка добавляем ее знач в перем х            
        if (funcHolder == 0) { 
            x = x + value;
        }
//если функ кнопка нажата два раза подрят пропускаем
        if (funcHolder == 1) {
            if (x[x.length - 1] != value) {
                x = x + value;
            }
        }
        screen.placeholder = x; 
        console.log(x);
    });
}
let startCount = document.getElementsByClassName('equal')[0]; //Кнопка РАВНО
startCountBtn = startCount.addEventListener('click', function () {
    console.log(x);    
//если закончить ввод знаком выдаст ошибку
    if (funcHolder>0){
        console.log("Incorrect");
        screen.placeholder = "Incorrect entry"; 
        x = '';
    } else {
//считает значение переменной х
    x = eval(x);
//проверка по типам
    if (isNaN(x) || x == Infinity) {
        screen.placeholder = "Div by zero"; 
        console.log('Div by zero');
        x = '';
    } else {
        screen.placeholder = x;
        console.log(x);
        x = '';
    }    
}
});
//работа с экраном калькулятора
let clearScreen = document.getElementsByClassName('clear')[0];
let clearScreenBtn = clearScreen.addEventListener('click', function () {
    x = '';
    screen.placeholder = 0;
    console.log(x);
});














