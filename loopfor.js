
/* for  */

for (i = 0; i < 10; i++) {
    console.log(i);
}

/* for/in loops through the properties of an object */
var person = {
    name: "siddique", age: 30, email: "siddique@email.com"
}

var txt = "";
for (var x in person) {
    txt += person[x] + " ";
}

console.log(txt);
