/* VARIABLE DEMO */

/* keyword - var, let, const
Syntax - keyword varname:datatype(optional) = value
Ex- var age:number = 30 
    var age = 45
*/

var age = 30
console.log("age:", age)

/* -------------------------------------------------------------------------------------------------------- */
/* -----------------------------------------------SCOPE---------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
// var has functional scope i.e. within function anywhere we can access it in block or out of block
function varTest(){
    if(true){
        var msg ="Hello World";
        // console.log(msg);
    }
    console.log(msg);
}
varTest();

/* -------------------------------------------------------------------------------------------------------- */
// let and const has block scope i.e. within block we can access it
function letConstTest(){
    if(true){
        let msg = "Hello Let World";
        const greet = "Good morning!!"
        console.log(msg);
        console.log(greet);
    }
}
letConstTest();

/* -------------------------------------------------------------------------------------------------------- */
function scopeDiff(){
    if(true){
        var num1 = 10;
        let num2 = 20;
        const num3 = 30;
        console.log(num1, num2, num3);
    }
    console.log(num1);
}
scopeDiff();

/* -------------------------------------------------------------------------------------------------------- */
/* ----------------------------------DECLARATION AND VALUE ASSIGNMENT-------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
//var can be declared without initialization ex: var x; declared but not initialized var x = 30 declared and initialized
var x;
console.log(x);  // output : undefined
x= 40
console.log(x);  // output : 40

/* -------------------------------------------------------------------------------------------------------- */
//let can be declared without initialization ex: var x; declared but not initialized var x = 30 declared and initialized
let y;
console.log(y);  // output : undefined
y = 50;
console.log(y);  // output : 50

/* -------------------------------------------------------------------------------------------------------- */
//const must be initialized at the time of declaration
const z = 60;
console.log(z);  // output : 60

/* -------------------------------------------------------------------------------------------------------- */
/* ---------------------------------------RE-DECLARATION--------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
// var allows the re-declaration
var city = "New York"
var city = "Los Angeles"
console.log("city:",city)

/* -------------------------------------------------------------------------------------------------------- */
// let and not allows the re-declaration
let country = "INDIA"
country = "USA"
console.log("Country:",country)

const planet = "Earth";
console.log(planet)

/* -------------------------------------------------------------------------------------------------------- */
/* ----------------------------------Re-Initialization/Re-Assignment--------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
//var and let reinitialization and reassignment is allowed
// const reinitialization and reassignment is not allowed

var mynum = 25
mynum = 70

let nume = 20
nume = 80

const num3 = 90
console.log(mynum, nume, num3)

/* -------------------------------------------------------------------------------------------------------- */
/* -----------------------------------------------HOISTING------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
// var hoisted with undefined
console.log(a); //output : undefined
var a = 100
console.log(a)

/* -------------------------------------------------------------------------------------------------------- */
//let and const hoisted with not initialized (getting error)
// console.log(b);
let b = 110
console.log(b)

// console.log(c);
const c = 100
console.log(c)