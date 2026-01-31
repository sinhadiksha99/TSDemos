/* -------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------PRIMITIVE DATA TYPES-------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
//Number:
let ageOfPerson:number=25;
let price = 25.5
let newPrice = 12222222222
console.log("age:",ageOfPerson)
console.log("price:",price)
console.log("newPrice:",newPrice)

//String: using ''," ",` ` - backtick is used when need to pass varname
let firstName:string = "Diksha"
let middleName:string = 'Sinha'
let greeting:string= `hello, ${firstName} ${middleName}`
console.log(greeting)

//Boolean  true or false can be stored here
let isStudent:boolean = true
console.log("is Student", isStudent)

// null and undefined - special types for absence of values
// null stores only null , undefined only stores undefined
let emptyValues:null = null; 
let notAssigned:undefined = undefined;

// any - stores anything (loses typescript benefits)
let value:any = 10;
console.log(typeof(value))
value="hello"
console.log(typeof(value))

// union type - combine multiple types
let id:number | string | boolean;
id ="ABC123"
id = 12
id = true