/* -------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------ARITHMETIC OPERATORS-------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
let anum:number = 10, bnum:number=20
// console.log(bnum+anum)
// console.log(bnum-anum)
// console.log(bnum*anum)
// console.log(bnum/anum)
// console.log(bnum%anum)
// console.log(5**2)

/* -------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------ASSIGNMENT OPERATORS-------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
anum=10
bnum=5
// console.log(bnum+=anum) //bnum= bnum+anum --- a =10, b=15
// console.log(bnum-=anum) //bnum= bnum-anum --- a=10, b=5
// console.log(bnum*=anum) //bnum= bnum*anum ---- a=10 , b=50
// console.log(bnum/=anum) //bnum= bnum/anum ---- b=5
// console.log(bnum%=anum) //bnum= bnum%anum-- b=5

/* -------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------RELATIONAL OPERATORS-------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
// relational operators always returns true or false
// >, <, >=, <=, ==, !=, ===
anum=10
bnum=20
// console.log(bnum>anum)
// console.log(bnum<anum)
// console.log(bnum>=anum)
// console.log(bnum<=anum)
// console.log(bnum!=anum)
// console.log(bnum==anum)
// console.log(bnum===anum)

// difference between == and ===
let num1:any=10
let num2:any="10"
// console.log(num1==num2) // compares only values
// console.log(num1===num2) // compares both values and datatypes

/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------LOGICAL OPERATORS-------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
// logical operators - ||, &&, ! , works for boolean values
let b1:boolean = true
let b2:boolean = false
// console.log(b1 && b2)
// console.log(b1 || b2)
// console.log(!b1)


//Combination of logical and relational operators
console.log(20>10 && 10>5)
console.log(20<10 || 10>5)

