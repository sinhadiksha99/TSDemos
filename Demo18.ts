let fruits:string[] = ["apple","banana","orange","mango","kiwi"]
// fruits.forEach((val,i)=>{console.log(`${i}th element value is ${val}`)})
// fruits.forEach((val)=>console.log(val.toUpperCase()))

// let upFruits = fruits.map((val)=>val.toUpperCase());
// console.log(upFruits)
let numbers: number[] = [1, 2, 3, 4, 5];

let twonum = numbers.map((val) => {
    // console.log(`Processing: ${val}`);
    return val * val; // ✅ You MUST return the value to populate the new array
});

// console.log(twonum); 
// Output: [2, 4, 6, 8, 10]
// let filternum = twonum.filter((val)=>val%2==0)
// console.log(filternum)
// let filternum = twonum.filter((val)=>val>9)
// console.log(filternum)

let sumval = numbers.reduce((sum,val)=>sum+=val,0)
// console.log(sumval)
let ifOdd = numbers.some((val)=>val%5==0)
console.log(ifOdd)