/*
Control Flow

In Javascript we can control the flow of code with the help of Condition & Loops
*/

//Statements

//if Statement
console.log("\n");
console.log("Control Flow");
a = 0;
console.log("Value of a is " +a);
if (a == 0) {
  console.log(true);
}


//if..else 
if(a>5){
    console.log("A is greater than 5");
}else{
    console.log("A is less than 5");
}


//if..else if else 

if(a>8){
    console.log("A is greate than 8 ");
}
else if(a>=8){
    console.log("A is greater than equal to 8");
}
else{
    console.log("none of the above");
}


//switch statment 
//this switch statement is used to execeut one of many block of code based on the value you specfied.


var fruit = "apple";

switch(fruit){
    case 'apple':
        console.log("Apple is selected");
        break;
    case "mangot":
        console.log("Mango is selected");
        break;
    default:
        console.log("unknown fruit");
}