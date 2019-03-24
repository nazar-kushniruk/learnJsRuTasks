// Сделайте то же самое, что в задаче Вывод чисел каждые 100 мс,
// но с использованием рекурсивного setTimeout вместо setInterval.



    function printNumbersIntervalWithSetTimeout() {
    var i = 0;
    var timerId = setTimeout(function iteration() {

        console.log(++i);
        if (i <= 19) {
            setTimeout(iteration, 100);
        }
    }, 100);

}

printNumbersIntervalWithSetTimeout();