function primeNumber(n) {
    if (n < 2) {
        return false;
    }
    // for (let i = 2; i < n; i++) {
    //     if (n % i === 0) {
    //         return false;
    //     }
    // }
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(primeNumber(1));
console.log(primeNumber(5));
console.log(primeNumber(11));

// O(n) = n  i.e. linear
//using math
//to be a non prime, whenever n = a*b , either a or b will be smaller than square root of n
//O(n) = sqrt(n);