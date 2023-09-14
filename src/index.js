//Primitive Data Types
//String
//Number
//Boolean
//Undefined
//Null

//************************************************/
var a = 10;
var b = 10;
var c = a + b;
console.log(c); //Returning 20

var a = 10;
var b = "10";
var c = a + b;
console.log(c); //Returning 1010

//Dynamically Typed Language

var str = "Hello";
var num = 12545;
var bol = true;

console.log(str);
console.log(num);
console.log(bol);

console.log(typeof str);
console.log(typeof num);
console.log(typeof bol);

//********************************************/
var d = null;
//null is an empty value which you assign to variable
//to suggest no value,its going to be used
//for nil checks or null checks
console.log(typeof d);
//Type of null is object,Everything in js is an object

//********************************************/

var e;
console.log(e);
console.log(typeof e); //Undefined

console.log(typeof typeof null);  //typeof typeof of anything Always be a string

console.log(typeof typeof e);

//********************************************/

var a = "2";
var b = 2;
console.log(a == b); //returning true in console
console.log(b == a); //checks the values only
//this is going to convert string into number into both the cases.
//(2==2)
//coercion
//converstion

//********************************************/

console.log(a === b); //return false (Right Output)
//checks the type and value on the both sides

console.log(2 === 2); //return true
//These all are Implicit coercion from string to a number ,
//in == it convert string to a number and then checks values
//in === it convert string to a number and then check values and types

//******************************************************/
//Explicit coercion

console.log(+"2");
console.log(typeof +"2");
console.log(+"abc"); //returning NAN (not a number)

console.log(typeof +"abc"); //returning a number (why?)

console.log(+"abc" === +"def"); //returns false (why?) becuase
//Nan is equal to Infinity in Js, if two infinity values compares itself
//then always it returns false or it cant be compared.

console.log(typeof typeof NAN); //typeof typeof of anything Always be a string

console.log(typeof "Ram"); //

