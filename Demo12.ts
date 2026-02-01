// function display():void{
//     console.log("Welcome");
// }
// display();

/* -------------------------------------------------------------------------------------------------------- */

// function addnum(a:number,b:number):number{
//      return a+b;
// }
// console.log(addnum(3,5));

/* -------------------------------------------------------------------------------------------------------- */
//named function with rest parameters with same type

// function addnumber(...a:number[]):number{
//      let i;
//      let sum:number=0
//      for(i=0;i<a.length;i++){
//         sum+=a[i]
//      }
//      return sum
// }
// console.log(addnumber(3,5));
// console.log(addnumber(1,2,3,4,5))

//named function with rest parameters with multiple types
// function findElements(...elements:(number | string)[]):number{
//     return elements.length;
// }
// console.log(findElements(1,"abc",12,"hello"))

/* -------------------------------------------------------------------------------------------------------- */
//named function with optional parameters

// function displayDetails(id:number,name:String,emaildId?:string):void{
//     console.log("id:",id)
//     console.log("name:",name)
//     if(emaildId!=undefined)
//     console.log("emailId:",emaildId)
// }
// displayDetails(123,"Scott","abc@gmail.com")
// displayDetails(132,"Scott")

/* -------------------------------------------------------------------------------------------------------- */
//named function with default parameters
function calcDiscount(price:number,rate:number=0.5):void{
    console.log(price*rate);
}
calcDiscount(1000,0.3)
calcDiscount(1000)