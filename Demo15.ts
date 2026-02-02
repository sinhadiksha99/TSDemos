//Call-back function

greet("John",showMessage);

function showMessage(message:string){
    console.log(message);
}

function greet(arg1: string, shMessage: (message: string) => void):void {
    console.log(arg1);
    shMessage("Hello")
}
