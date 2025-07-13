function printDups(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length - i; j++) {
            if (arr[i] === arr[j]) console.log(arr[i]);
        }
    }
}

function printDupsSorted(arr) {
    let min = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] === arr[i]) console.log(arr[i++]);

    }
    return arr
}

// const testArr = [1, 2, 3, 2, 4, 5, 2, 1, 2, 3,6,3,3];
// printDups(testArr);
// console.log(printDupsSorted(testArr));

// ===================================================================================

// naive O(n**2)
// function twoSum(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 console.log(`${arr[i]},${arr[j]}`);
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// efficient O(n log(n))
// function twoSum(arr, target) {
//     arr.sort((a, b) => a - b);
//     let left = 0;
//     let right = arr.length - 1;
//     while (left < right) {
//         if (arr[left] + arr[right] === target) {
//             console.log(`${arr[left]},${arr[right]}`);
//             return true;
//         }
//         arr[left] + arr[right] > target ? right-- : left++;
//     }
//     return false;
// }

// set
function twoSumHash(arr, target) {
    const set = new Set();
    for (const item of arr) {
        if (set.has((target - item))) return true;
        set.add(item)
    }
    return false;
}

// const arr = [2, 7, 5, 11, 15];
// const target = 17;
// console.log(twoSumHash(arr, target));

// ==================================================================
function printDupsHash(arr) {
    let seen = new Set();
    let dups = new Set();
    for (const item of arr) {
        if(seen.has(item)) dups.add(item);
        else seen.add(item);
    }
    console.log(dups);
}

const testArr = [1, 2, 3, 2, 4, 5, 2, 1, 2, 3,6,3,3];
printDupsHash(testArr);