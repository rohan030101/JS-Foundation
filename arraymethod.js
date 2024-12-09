var arr = [1,2,3,4,5,6,7,8,9,0];
console.log("Arrya before any operations " +  arr);

//push method is used to add element to the end of array
arr.push(11);
console.log("Array after using push method 11 should be at end " +  arr);

//pop method is used to removes element to the end of array
arr.pop(11);
console.log("Array after using pop method  " +  arr);

//shif method is used to remove element first element of array
arr.shift()
console.log("Array after using shift method  " +  arr);

//unshif method is used to adds element to  first element of array
arr.unshift(1);
console.log("Array after using unshift method  " +  arr);

//slice method return a copy of array between given parameters.
var sliced = arr.slice(2,4);
console.log("Array after using unshift method  " +  sliced);

//spliced method remove or add element to the array. with given index and occurence.
var arr1 = ["Rohan","Rohit","Rahul","Rajesh"];
console.log(arr1)
arr1.splice(1,1,"Rohini");
console.log(arr1);

//concat join two or more array. in a new array;
var firsLetters = ["R","O","H"];
var lastLetters = ["A","N"];
console.log(firsLetters,lastLetters);
var combine = firsLetters.concat(lastLetters);
console.log(combine);


// for each execute a fucntion for each iteration.

combine.forEach(function(a){
    console.log(a);
});

//map returns a new array with result of calling a function on each elements;

var number = [1,2,3,4];
var double = number.map(function(num){
    return num * 2;
});
console.log(number);
console.log(double);


//filter return a new array based on the fucntion or conditino specifed
var filtred = number.filter(function(num){
    return num >= 3;
});
console.log(filtred);

//indexOf return the index of array element provided and -1 if not found;
console.log(number.indexOf(4));
console.log(number.indexOf(11));


//reduce return a sum of all element in array
console.log(number.reduce(function(total,num){
    return total + num;
}));

