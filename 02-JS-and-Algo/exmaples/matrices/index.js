let matrix = []
let count=1
for (let i = 0; i < 5; i++) {
    matrix.push([])
    for (let j = 0; j < 3; j++) {
        matrix[i].push(count++)
    }
}


function get(matrix,rowNum,colNum) {
    return matrix[rowNum][colNum]
}

function print(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let row = "";
        for (let j = 0; j < matrix[i].length; j++) {
            row+=matrix[i][j]+"\t";
        }
        console.log(row);    
    }
}

function printRow(rowNum) {
    console.log(matrix[rowNum].join(", "));
}

function alter(rowNum,colNum,val) {
    matrix[rowNum][colNum] = val;
}

// print(matrix);
// printRow(matrix,1);
console.log(matrix);
alter(1,2,174)
console.log(matrix);
// console.log(print(matrix));
// console.log(matrix);
// console.log(get(matrix,1,2));