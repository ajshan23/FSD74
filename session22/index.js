// let a; //variable decleration
// a=10;//varible initialization  define the value

// let b=10;//variable dec and ini


// let a;
// console.log(a);

//js dynamically types
// let a=5;
// console.log(a);
// a="ajmal";
// console.log(a);

// 2 category

// 1=> primitive (by value)
//2=> Non- primitive(by reference)


//primitive
//Number (range =>task)

let year=2025;
let score=220;
const pi=3.1415;

//string
let name="Jumaila";
let movie="Iron man 3";
let choice="a";
let value="1";
// console.log(typeof name);
//Big int => very large number

// console.log(Number.MAX_SAFE_INTEGER)
// we can store upto 9 cr cr in Number data type 

let ourBigNumber=90071992547409911n;
// console.log(typeof ourBigNumber)

//Null

let user=null;

//undefined

let data;

let a=10;
// console.log(a);
a=undefined;
// console.log('====================================');
// console.log(a);
// console.log('====================================');

//boolean
// true or false 

let isGopikaMar=true;//yes or true
let muhzinHaveSupply=true;//1
let ramsy=false;//0//false
let isShbnaMar=false;//no

//symbol 
// unique and immutable (cant change)
let symbol1=Symbol("ajmal");
// console.log(symbol1);
let symbol2=Symbol("ajmal");
// console.log(symbol2);
let symbol3=Symbol(12);
// console.log(symbol3);

// console.log('====================================');
// console.log(symbol1===symbol2);
// console.log('====================================');


let mark1=10;
// mark1 assigned 10
let mark2=mark1;
// mark2 assigned mark1 . mark2 assigned value of mark1
mark1=20;

// console.log(mark1,mark2);




//2=>Non primitive  (By reference)

//object  (key - value pair)

let muhzin={
    firstName:"muhzin",
    age:23,
    place:"trissur",
    isMarried:false,
}

// console.log(muhzin.place);

// let objectName={
//     key1:value1,
//     key2:value2,
// }

//Array
//array is a collection of same data type (c ,cpp)
//array is a collection of values

let muhzinScore=[100,98,56,78,false,"ajmal"];
// console.log(muhzinScore);
console.log(muhzinScore[3]);
