let student : {
    name:string,
    age:number,
    getDetails:()=>string
} = {
    name :"Scott",
    age : 20,
    getDetails:function(){return `${this.name},${this.age}`}
}