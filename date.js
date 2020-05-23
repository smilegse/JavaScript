var d = new Date();

d;

//var d = new Date(2018, 11, 24, 10, 33, 30);
//var d = new Date(2018, 11, 24);
//var d = new Date(2018, 11);
//var d = new Date(2018);
//var d = new Date(99, 11, 24);
//var d = new Date("October 13, 2014");

var msec = Date.parse("March 21, 2012");
console.log(msec);

var d = new Date();
console.log(d.getFullYear());

var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(days[d.getDay()]);

/* Add Day */

var d = new Date();
d.setDate(15);
console.log(d);

var d = new Date();
d.setDate(d.getDate() + 50);
console.log(d);


