
/* Declare Array */

var person = ["John", "Doe", 46];

var names = ["Siddique", "Ayesha", "Abu Bakar"];

var name = names[2]
console.log(name);



/* Traverse Array */

for(var i=0; i<names.length; i++){
    console.log(names[i]);
}

names.forEach(function(element){
    console.log('My Name is: ' + element);    
})


/* Add new value to Array */ 

names.push("Munni");
names[names.length] = "Maniha";

names.forEach(function(element){
    console.log('My Name is: ' + element);
});

console.log(names.toString());

/* Update specific array value */ 

names.unshift("Munnujan");     // added new value in the 0 index using build in function
names.splice(0,1, "Zakaria");  // replace 0 index value using built in function

console.log(names.join(" * "));

/* delete a value from Array */

names.pop();    // remove value from the last index
names.sort()
console.log(names.join(" * "));

names.shift()   // remove value from the first index
names.reverse();
console.log(names.join(" * "));

delete names[0];
console.log(names.join(" * "));

var names2 = names.slice(2);
console.log(names2.join(" * "));

/* Merge Two Arrays */ 

var girls =  ["Munni","Ayeahs","Maniha"];
var boyes = ["Siddique", "Idrish"];

var childerns = girls.concat(boyes);
console.log(childerns);

/* Numeric array sort */

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});  // Ascending Sort
console.log(points);
console.log('Min value: ' + points[0] + ' Max value: ' + points[points.length-1]);


var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});  // Descending Sort
points.toString();
console.log(points);

console.log('Max value: ' + points[0] + ' Min value: ' + points[points.length-1]);

/* Sorting Object arrays */

var cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ]; 

  cars.sort(function(a, b){return a.year - b.year}); 

  console.log(cars);

  var mypoints = points.map(function(point){
      return  point * 2;
  });
  
console.log(mypoints.toString())