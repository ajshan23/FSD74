// function greet(name){
//     console.log("good mng , "+name);

// }

// // greet("Aj");

// const greetArrow =(name,callback)=>{
//    callback(name);
// }

// let studentName="muhzin"
// greetArrow(studentName,greet);


function hello(msg){
    console.log(msg);
}

function helloAndSayHi(message,callback){//params or parameters
   
    callback(message)//hello function
}

let messgageFromMuhzin="hi from muhzin"
helloAndSayHi(messgageFromMuhzin,hello);//arguments