//take input from user
let a = 4;
let b = 2;
// 4 =      100
// 2 =      010
// 6 =      110


//using bitwise operator
// bitwise operator evaluate to true if both are different
//this method using biner value to calculate
a = a ^ b
b = a ^ b
a = a ^ b

console.log(`after swap a = ${a}`)
console.log(`after swap b = ${b}`)
