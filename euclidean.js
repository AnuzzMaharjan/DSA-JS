//GCD Using Euclidiean algorithm

function euclidean(num1, num2) {
    if (num1 === 0) {
        return `GCD is ${num2}`;
    }
    if (num2 === 0) {
        return `GCD is ${num1}`;
    }

    return euclidean(num2, num1 % num2);
}

console.log(euclidean(270, 192));

//Big O => O(log(a,b));