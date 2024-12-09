/*scope in javascript determine the accessibility of variables functions and objects in different pats
code 
1) Global Scope
2) Local Scope
3) Block Scope
4) Lexical Scope
5) Closers
*/


//Global Scope
var globalVar = "I'm the global variable";
// console.log(globalVar);

function printVaribale() {
    // let actual = "I'm inside the function";
    console.log(globalVar);
    // console.log(actual);
}
// console.log(actual);
printVaribale();


//local scope

function printVaribale2() {
    let actual = "I'm inside the function";
    console.log(actual);
}
printVaribale2();
// console.log(actual);


//Block Scope
function varibale1() {
    let var1 = "This is block scope";
    const car1 = "this is a const varibale";
    console.log(car1);
    console.log(var1);
}
varibale1();
// console.log(car1);
// console.log(var1);

//Lexical Scope

function lexicatScope(){
    let outVar = "This is outer function";
    function innerFunction(){
        console.log(outVar);
    }
    innerFunction();
}

lexicatScope();


//closures

function createCounter(){
    let count = 0;
    return function(){
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
