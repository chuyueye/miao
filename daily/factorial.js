
function factorial(n) {
    if (Number.isInteger(n) && n >= 0) {
        return factorial[n] || (
            factorial[n] = n * factorial(n - 1)
        )
        // too hard to read(readability)
    }
    else {
        return NaN
    }
}

; factorial[1] = 1; factorial[0] = 1;

for (let i = 0; i <= 21; i++) { console.log(factorial(i)) }