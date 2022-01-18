//find the largest

let num1 = 4
let num2 = 6
let num3 = 5
let largest;

if (num1 >= num2 && num1 >= num3){
    largest = num1
} else if (num2 >= num1 && num2 >=num3){
    largest = num2
} else {
    largest = num3
}

console.log (`the largest is ${largest}`)