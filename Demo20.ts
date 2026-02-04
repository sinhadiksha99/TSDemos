export let appname="Applicator";
export function sumOfNum(a:number,b:number):number{
    return a+b;
}

export class formatter{
    static toUP(str:string):string{
        return str.toUpperCase();
    }
}

// console.log(formatter.toUP("hello"))