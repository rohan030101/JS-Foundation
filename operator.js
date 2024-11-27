console.log("Aritmetic Operator");
//Arithmetic Operator
console.log("Addition Operator");
var sum = 5 + 3;
console.log(sum);

console.log("Subtraction Operator");
var sum1 = 5 - 3;
console.log(sum1);

console.log("Multiplication Operator");
var sum2 = 5 * 3;
console.log(sum2);

console.log("Division Operator");
var sum3 = 5 / 3;
console.log(sum3);

console.log("Modulus Operator");
var sum4 = 5 % 3;
console.log(sum4);

console.log("Increment Operator");
var sum5 = 10;
sum5++;
console.log(sum5);

console.log("Decrement Operator");
var sum6 = 10;
sum6--;
console.log(sum6);
console.log("\n");
//Comparision Operator
//This operator
console.log("Comparision Operator");
//equal to (==);
console.log("Equal To Operator");
console.log(5 == "5"); //true

//Strict equal to
console.log("Strict To Operator");
console.log(5 === "5"); //false

//not equal to
console.log("Not Equal To Operator");
console.log(5 != "6"); //true

//strict not equal to
console.log("Strict Equal To Operator");
console.log(5 !== "5"); //true

//greater than
console.log("Greater Than Operator");
console.log(5 > 6); //false

//less than
console.log("Less Than Operator");
console.log(5 < 6); //true

console.log("\n");
console.log("Logical Operator  ");
/*Logical Operator
   Logical Operator is used to make decisions based on codition specificed in the statements
   Logical Operator are as such :
   1) !(NOT) : Convert to a bolean and return the flipped value.
   2) &&(AND): Retruns true if all are true
   3)||(OR)  : Return true if one of the operands are true
   */

console.log("! NOT Operator");
console.log(!true); //false

console.log("AND Operator");
console.log(5 == 5 && 5 == "5"); //true
console.log(5 == 5 && 5 === "5"); //flase

console.log("OR Operator");
console.log(7 == 9 || 8 == 9); //false
console.log(7 == 7 || 8 == 9); //true

console.log("\n");
console.log("Assignment Operator");
/*Assignment Operator
   Assignment Operator is used to assign value to variables
 */

//Simple Assignment Operator
let a = 10; // a variable is created and we assigned the value 10 10 it
console.log(a); //10

//Addition Assignment Operator
let b = 3;
b += 3;
console.log(b); //6

//Subtraction Assignment Operator'
let c = 0;
c -= 50; //50

//Multiplication Assignment Operator
let d = 10;
d *= 10; //100
console.log(d);

//Division Assignment Operator
let e = 10;
e /= 10;
console.log(e);
