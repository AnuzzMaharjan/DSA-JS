function cartesianProduct(A, B) {
    const result = [];
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            result.push([A[i], B[j]]);
        }
    }
    return result;
}

const A = [1, 2, 3];
const B = [4, 5, 6];

console.log(cartesianProduct(A, B));

//Big O => O(m*n) dependent on lengths of arr A and arr B