function factorial(n) {
    if (n < 2) {
        return 1;
    }
    return n * factorial(n - 1);
}
function permutationCombination(n, r) {
    //for permutation
    let nFactorial = factorial(n);
    let nrFactorial = factorial(n - r);
    let permutation = `${n}P${r} =  ${nFactorial / nrFactorial}`;
    let combination = `${n}C${r} = ${nFactorial / (factorial(r) * nrFactorial)}`;
    return { permutation, combination };

}
console.log(permutationCombination(9, 3));

//Big O => O(n);