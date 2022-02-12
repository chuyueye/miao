


// 闰年
function runnian(y) {
    if (y % 3200 == 0) { return false }
    if (y % 400 == 0) { return true }
    if (y % 100 == 0) { return false }
    if (y % 4 == 0) { return true }
}



var primeList = [2, 3, 5, 7, 11, 13, 17, 19, 23]

function isPrime(n) {
    var sn = Math.sqrt(n)

    for (var i = 0; primeList[i] <= sn; i++) {
        if (n % primeList[i] === 0) {
            return false
        }
    }
    return true
}
function countPrimes(n) {
    var count = 1
    for (var i = 3; i < n; i += 2) {
        if (isPrime(i)) {
            primeList.push(i)
            count++
        }
    } return count
}