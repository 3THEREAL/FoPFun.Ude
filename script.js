//var name = prompt("What is your name?");
//alert("Hello, " + name);

/*  var a = 5;

alert(a); */

/*
( PARANTHESES )
[ BRACKETS ]
{ BRACES }
*/

/*
Condition 
= Command to insert value || Assignment
== Equality
=== strict equality
!= Not Equal

{} Code Block | Can be nested
*/

/*
var a = 50;
var b = 10;

if (a<b) {
    alert("Yes less than b");
}
if (a==b) {
    alert("A is equal to b");
}

if ()
*/

/*
var balance = 5000;

if (balance >= 0) {
    alert("The balance is positive");
    if (balance > 10000) {
        alert("The balance is too large");
    }
} else {
    alert("The balance is negative");
}
*/

/* 
Logical AND/ OR 

if (a === b) && c === d) {....}
if (a === b) || c === d) {....}
if ( ( a>b ) && ( c<d ) ) {...}
if ( 
    ( a > b ) 
    && 
    ( c < d ) )
*/

/*
//Lesson 21
var grade = "Premium";

switch ( grade ) {
    case "Regular": 
            alert("It's $5");
            brake;
    case "Premium":
            alert("it's $7.5");
            brake;
    case "Diesel":
            alert("It's $10");
            brake;
    default:
            alert("Thats not a vlid Grade");
}
*/
/*
//Lesson 22 
function myFunction() {
    var a = 5;
    var b = 10;
    var c = 20;
    var d = a+b+c;

    alert("The value of d is: " + d);
}

myFunction();
*/

//Lesson 23

/*
function addTwoNumber() {
    var a = 5;
    var b = 10;
    var result = a+b;
    alert(result);
}
addTwoNumber();
*/
/*
function addTwoNumber(a,b) {
    var result = a+b;
    //alert(result);
    return result;
}
var x = addTwoNumber(7,14);
alert(x);

addTwoNumber(5,10);
addTwoNumber(50,100);
addTwoNumber(500,1000);
*/
/*
//Lesson 24 Variable Scope
var x;

function simpleFunction() {
    x = 500;
    alert(x);
}

simpleFunction();
alert(x);
*/
/*
//Lesson 27 Iteration
var a = 1;

while (a<10) {
    alert(a);
    a++;
}
*/
/*
//Lesson 28
var ammout = 0;
//Create The Index
var i = 1;
//Check Condition
while (i <= 10) {
    ammout = ammout + 100;
    //Increment Index
    i++;
}

alert("The value is: " + ammout);
*/
/*
//Lesson 29

//WHILE LOOP
    //SETTING UP THE INDEX
var i = 1;
    //CHECK THE CONDITION
while (i<10) {
    // do stuff
    // do stuff
    // do stuff
    //INCREMENT THE INDEX
    i++;
}

//FOR LOOP
for (var i = 1; i<10; i++) {
    // do stuff
    // do stuff
    // do stuff
}

//DO... WHILE LOOP

var a = 1;

do {
    //your code
    a++;
} while ( a < 10 );
*/
/*
//Lesson 30
var foo = xx;

var myNum = Number(foo);

if (isNaN(myNum)){
    alert("Not a Number");
} else (
    alert("A number")
);

var a = "1";
var aNum = Number (a);

if (!isNaN(aNum)) {
    alert("A number");
}
*/
//Lesson 31
//var phrase = "This is a simple phrase.";
//alert(phrase.length);
//alert(phrase.toUpperCase());
/*
var ph1 = "Hello";
var ph2 = "nigga";

if (ph2.toUpperCase() == ph1.toLowerCase() ) {
    alert("Equal");
}
*/
