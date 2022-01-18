//if you know the side\

const side1 = 3
const side2 = 4
const side3 = 5

//semi parameter
const s = (side1 + side2 + side3) / 2

//calculate area
const area = Math.sqrt( s* (s-side1)* (s-side2) *(s-side3))

//print
console.log(`the area is ${area}`)