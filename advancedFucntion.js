/*
1. Higher Order Function 

    Higher-order function are function that take other function as paremeters or return fucntion as output.

*/
console.log('1. Higher Order Function ');

function greet(name) {
    return "Hello," + name;
};

function test1(fn, name) {
    console.log(fn(name));
};

test1(greet, "Rohan");


/*
Callback functions
This callback function are passed as arguments to other function and are executed after the completion of
that fucntion.
*/
console.log('2. Callback Function ');

function fetchData(callback) {
    setTimeout(function () {
        callback('Data Loaded');
    }, 10000);
}

function displayMessage(msg) {
    console.log(msg);
}

fetchData(displayMessage);



/*
Asynchronous Functions

Javascript function thate operates asysnchronously such as settimeout() and setinterval(); allow taks to schedule for future function.

*/
console.log('2. Callback Function ');

setTimeout(function () {
    console.log("Executed after 2 Seconds");
}, 2000);

var count = 0;

var interValid = setInterval(function () {
    console.log('Repeating every 1 second');
    count++;
    if (count === 4) {
        clearInterval(interValid);
    }

}, 1000);