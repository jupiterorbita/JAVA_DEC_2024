// 5! 1*2*3*4*5
// 5! 5*4*3*2*1

// 3! 3*2*1
// 1! 1

function factorial(num = 4) {
    // BASE CASE
    if (num === 1) {
        return 1;
    }

    return num * factorial(num - 1);
}


console.log(factorial(4));