//ARRAYs for..in loop
// let num:Array<number>=[10,20,30,40,50,60];
// for(let i in num){
//     // console.log(num[i]);
// }


// //Arrays for..of loop
// for(let i of num){
//     console.log(i);
// }


// let num4:[number,string][]=[[10,"20"],[30,"40"],[50,"60"]];

// console.log(num4[0][1])

//Array methods
let anu:number[]=[10,20,30,40];
// console.log(anu.pop())
// console.log(anu.push(13))
// console.log(anu.shift())
let newanu:number[] = anu.concat([50,60],70);
//10,20,30,40,50,60,70
// console.log(newanu)
// console.log(newanu.slice(1,5))
console.log(newanu.splice(2,2,12,13,14))
console.log(newanu)