'use strict'

const fibonacci = () => {
    const fib = [0,1];
    let i = 2;
    while(true) {
        var num = fib[i - 2] + fib[i - 1];
        fib.push(num);
        if(num > 350) break;
        i++;
    }
    return fib;
}

const isFibonnaci = (num) => fibonacci().includes(num);

module.exports = {
    fibonacci,
    isFibonnaci
}
