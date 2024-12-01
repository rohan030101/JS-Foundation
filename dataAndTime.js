//Javascript by default gives you a data object to workt with date and time which you can use
//to create data format date , manipulate and times also.

//for current date and time
var now = new Date();
console.log(now);

//you can get a specific date also as given below ;
var specificDate = new Date(2001,0,3,12,0);
//Date(year,month(0-12),day,hours,minutes);
console.log(specificDate);

var dateString = new Date("January 03,2024 12:00:00");
console.log(dateString);


/*
Date Methods

JavaScript provides serveral methods to get and set part of date
*/

var year = now.getFullYear();
console.log(year);


var month = now.getMonth();
console.log(month);


var date = now.getDate();
console.log(date);

var day = now.getDay();
console.log(day);

var hours = now.getHours();
console.log(hours);

var mins = now.getMinutes();
console.log(mins);


now.setDate(23);
console.log(now);

now.setMonth(1);
console.log(now);

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
console.log(now.toISOString());

console.log("Date Calculations")
var oneDay = 24 * 60 * 60 * 1000;
var tommorow = new Date(now.getTime() + oneDay);
console.log(tommorow)