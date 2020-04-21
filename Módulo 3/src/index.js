'use strict'

const fibonacci = () => {
    let fib = [0,1];
    let i = 2;
    while(true) {
        var num = fib[i - 2] + fib[i - 1];
        fib.push(num);
        if(num > 350) break;
        i++;
    }
    return fib;
}

const isFibonnaci = (num) => {
    const fib = fibonacci();
    return fib.includes(num);
}

module.exports = {
    fibonacci,
    isFibonnaci
}
