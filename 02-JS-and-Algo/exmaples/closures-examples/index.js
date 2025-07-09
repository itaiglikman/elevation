
// syntax option 1:
// function add(x) {
//     return function (y) {
//         return x+y;
//     }
// }

// syntax option 2:
const add = (x) => {
  return (y) => x + y;
};

// option:
// console.log(add(5)(2)); //7;


// option:
const add5 = add(5);
const add7 = add5(2)
console.log(add7);
