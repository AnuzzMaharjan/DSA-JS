// function factorial(n) {
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(0));
// console.log(factorial(3));
// console.log(factorial(5));

// // Big -O => O(n)

function recursiveFactorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * recursiveFactorial(n - 1);
}
console.log(recursiveFactorial(0));
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(5));
// Big O => O(n)