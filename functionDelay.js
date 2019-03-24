// Напишите функцию delay(f, ms), которая возвращает обёртку вокруг f, задерживающую вызов на ms миллисекунд.
//
//     Например:
//
// function f(x) {
//     alert( x );
// }
//
// var f1000 = delay(C);
// var f1500 = delay(f, 1500);
//
// f1000("тест"); // выведет "тест" через 1000 миллисекунд
// f1500("тест2"); // выведет "тест2" через 1500 миллисекунд
// Упрощённо можно сказать, что delay возвращает "задержанный на ms" вариант f.
//
//     В примере выше у функции только один аргумент, но delay должна быть универсальной: передавать любое количество аргументов и контекст this.
//
//     Открыть песочницу с тестами для задачи.


function makeSomething(arg) {
    console.log('from makeSomething - ', arg);
}


function delay(func, time) {

    return function () {
        var newThis = this;
        var newArgs = arguments;
      //  setTimeout(newThis.bind(newThis,arguments[0]),time);
        setTimeout(function(){
                func.apply(newThis,newArgs)
            },time);
    };
}

var f1000 = delay(makeSomething);
var f2000 = delay(makeSomething, 3000);


f1000('Nazar');
f2000('Taras');