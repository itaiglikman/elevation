console.log(
    (undefined || null || 5>7)
);

// (5 > 2) && false

// !("knife" === "sword")
// (31 % 5) == "1"
// (1 < 2) || (-1 > -1) || !false
// ""
// "5th Avenue" != "5th Avenue"
// !!true
// 52 !== "52"

let a = 3
let c = 0
let b = a
b = a
c = a
b = c
a = b

console.log(a);
console.log(b);
console.log(c);
