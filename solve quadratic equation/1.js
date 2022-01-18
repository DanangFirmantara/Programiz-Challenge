// the standar quadratic equation
// ax^2 + bx + C = 0
// a!=0
// a, b, c are real number

//to find the root of equation we use formula
//(root1,root2) = (-b +- sqrt(b^2 - 4ac))/2

// b^2 - 4ac is known as the discriminant

//if discriminant > 0, the roots area real number and different
// other discriminant == 0, the roots are real and equal
// other discriminant < 0 , roots are complex and different

let root1,root2

//input alue
let a = 1;
let b = -3;
let c = 10;

//calculate discriminant
let discriminant = b*b - 4*a*c;

//condition for real and different roots
if (discriminant > 0){
    root1 = (-b + Math.sqrt(discriminant))/(2*a)
    root2 = (-b - Math.sqrt(discriminant))/(2*a)
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`)
}
 else if (discriminant == 0) //condition for real and equal roots
{
    root1 = root2 = -b / 2*a
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`)
} 
else //condition for real and equal roots
{
    let realPart = (-b / (2 *a)).toFixed(2)
    let imagPart = (Math.sqrt(-discriminant)/(2*a)).toFixed(2)

    console.log(`The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`)
}

