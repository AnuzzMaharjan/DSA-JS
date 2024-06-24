function fibonacci(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(5));
// big-O => O(n);

// function recursiveFibonacci(n) {
//     if (n < 2) {
//         return n;
//     }
//     return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
// }

// console.log(recursiveFibonacci(0));
// console.log(recursiveFibonacci(1));
// console.log(recursiveFibonacci(8));

// //Big - O => O(2^n)