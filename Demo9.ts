/* -------------------------------------------------------------------------------------------------------- */
/* ------------------------------------------SWITCH CASE STATEMENT----------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
/*
switch(expression){
    case val1: statements;
            break;
    case val2: statements;
            break;
    case val2: statements;
            break;
}
*/

let day: number = 3
switch (day) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
}

let xn:number = 20, yn:number = 41;
switch(yn-xn){
    case 20:
        console.log("heyoo");
        break;
    default:
        console.log("default");
        break;
}