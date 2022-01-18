//kilometer to miles
let kilometer = 26

let factor = 0.621371

let miles = kilometer * factor

//toFixed(2) mean round up value
console.log(`${kilometer} km is equal to ${miles.toFixed(2)} miles`)

kilometer = miles / factor

console.log (`${miles.toFixed(2)} miles is equal to ${kilometer} kilometer`)