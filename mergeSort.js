function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rigthArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rigthArr));
}
function merge(leftArr, rigthArr) {
    const sortedArr = [];
    while (leftArr.length && rigthArr.length) {
        if (leftArr[0] <= rigthArr[0]) {
            sortedArr.push(leftArr.shift());//shift also removes the element from the array
        } else {
            sortedArr.push(rigthArr.shift());
        }
    }
    return [...sortedArr, ...leftArr, ...rigthArr];
}
const arr = [-6, 20, 8, -2, 4];
console.log(mergeSort(arr));

//Big O => O(nlogn)