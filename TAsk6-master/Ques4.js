
function getUniqueAfterMerge(arr1, arr2){
    let arr = arr1.concat(arr2);
    let uniqueArr = [];
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}
const array1 = [11, 32, 396];
const array2 = [2, 396, 5]

getUniqueAfterMerge(array1, array2);