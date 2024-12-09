/*
JSON stands for javascript Object Notationi
It;s a light weight data interchange format is used t store and transfer data between data in client-server 
communication. 
*/

var obj = { name: "Rohan", age: 24 };
var jsonString = JSON.stringify(obj);
console.log(jsonString);

var parsedObj = JSON.parse(jsonString);
console.log(parsedObj);