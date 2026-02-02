//Overloading function

function getInfo(id:number):string;
function getInfo(nameOfUser:string):string;

function getInfo(param:number|string):string {
    if(typeof param==="number")
        return `UserID is ${param}`;
    else
        return `UserName is ${param}`;
}

console.log(getInfo(123));