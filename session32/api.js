// XMLHttpRequest
//fetch
//js is by default synchronous and single threaded
// let data=fetch("https://jsonplaceholder.typicode.com/users");
// console.log('====================================');
// console.log(data);
// console.log('====================================');


//promise
//pending // waiting for the reponse
//fulfilled //request completed
//rejected //request failed/error


// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => { return response.json();})
// .then((result)=>{
//     console.log(result);
//     console.log("hi");
// })
// .catch((error)=>console.error(error))



// let muhzin='{"firstName":"mhd","second Name":"muzhin mp"}';


// let jsonData='{"name":"ajmal","age":32}';
let stringData = "ajmal is from calicut";
//json =>js object
// let jsObject=JSON.parse(jsonData);

// console.log('====================================');
// console.log(JSON.parse(muhzin));
// console.log('====================================');


let studentData = {
    firstName: 'mhd',
    'second Name': 'muzhin mp'
}
//js to json
console.log(JSON.stringify(studentData))