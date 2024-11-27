/*
    Function is block of code which we can use it anywhere we want it can perform 
    operation,take input and always return something.
*/

/*function declaration
it should always delcared with the key word "fucntion" name after it with opening and closing bracets 
along with opening and closing curly barces as shown below and you have call it whenever needed
*/
console.log("\n");
console.log("functions");
function test() {
  return console.log("Hello");
}

test();

/*
Function Expression 
Function Expression are assigned can be assigned to a variable these can be used like any other variable
*/

let sayAnyThing = function (msg) {
  return console.log(msg);
};
sayAnyThing("Hello this is function expression");

/* 
Function Parameters

Function can accepts value called parameters which allows to pass data into function

In below example:

a and b are parameters and 5 and 7 are aguments to the function

*/

function add(a, b) {
  return a + b;
}

console.log(add(5, 7));

/* 
Return in function  
The return statement is used to ruturn a value from a function. Once a return statement is exceuted, the 
function stops and returns the specfied value. if no return statement is used  the function will return undefined. 
*/  



