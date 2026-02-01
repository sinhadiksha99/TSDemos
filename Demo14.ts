//Anonymouse function
//Arrow function or lambda function with no parameters
// let helo= ():void=>{
//     console.log("helo function")
// }
// helo()

//Arrow function or lambda function with parameters and a return type
// let sum = (a:number,b:number):number=>{
//     return a+b;
// }
// console.log(sum(4,2))

//Arrow function or lambda function with implicit return
// let multi = (a:number,b:number):number=>a*b
// console.log(multi(3,5));

//arrow function with optional parameters

// let details = (id: number, name: String, emaildId?: string): void => {
//     console.log("id:", id)
//     console.log("name:", name)
//     if (emaildId)
//         console.log("emailId:", emaildId)
// }
// details(123, "Scott", "abc@gmail.com")
// details(132, "Scott")

//arrow function with default parameters
// let calculateDiscount=(price:number,rate:number=0.5):void=>{
//     console.log(price*rate);
// }
// calculateDiscount(1000,0.3)
// calculateDiscount(1000)

//named function with rest parameters with same type

// let addnumber = (...a:number[]):number=>{
//      let i;
//      let sum:number=0
//      for(i=0;i<a.length;i++){
//         sum+=a[i]
//      }
//      return sum
// }
// console.log(addnumber(3,5));
// console.log(addnumber(1,2,3,4,5))

 