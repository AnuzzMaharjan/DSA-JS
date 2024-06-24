// function isPowerOfTwo(n) {
//     if (n < 1) {
//         return false;
//     }
//     while (n > 1) {
//         if (n % 2 !== 0) {
//             return false;
//         }
//         n /= 2;
//     }
//     return true;
// }
// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(2));
// console.log(isPowerOfTwo(7));
// console.log(isPowerOfTwo(8));

// //time complexity = O(logn)
// //value of n is getting halved in each iteration

function isPowerOfTwo(n) {
    if (n < 1) {
        return false;
    }
    return (n & (n - 1) === 0);
}
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(7));
console.log(isPowerOfTwo(8));
//big o = O(1)
/*
bitwise and operation gives 1 only when both the inputs are 1
in case of 10 
10 -> 1010
9 -> 1001
here it will give 1 since 1 and 1 . so comparing in (10 & 9 === 0) will return false
whereas 
8 -> 1000
7 -> 0111
here it give 0 since ther is not 1 and 1. so (8 & 9 === 0 ) returns true

number which is power of two will have one 1 and all 0 in binary 
number which is not power of two will not have that

in binary 
1 -> 0001
2 -> 0010
3 -> 0011
4 -> 0100
5 -> 0101
6 -> 0110
7 -> 0111
8 -> 1000

power of two number and a number with 1 less will have opposite bits so it will always give 0 in bitwise and operation 
*/