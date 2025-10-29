// function add(...numbers){//REST
//     console.log(numbers);//it collects arguments and converts it into an array
//     let sum=0;
//     numbers.forEach((value,index,fullArray)=>{
//         sum=sum+value;
//     })
//     return sum;
// }

// let result=add(10,20,30,40,50,60,70);

// console.log('====================================');
// console.log(result);
// console.log('====================================');


const students = [
  { name: "Aju", score: 80 },
  { name: "Maya", score: 92 },
  { name: "Kiran", score: 45 },
  { name: "Ravi", score: 67 }
];
// array of object
// let array1=[];
// students.forEach((value,index)=>{
//     console.log(value.name);
//     array1.push(value.name)
// })

// console.log(array1);


let names=students.map((value)=>{
    if(value.score>=80){
        return value.name;
    }else{
        return "";
    }
})
// console.log(names);


let filtered=students.filter((value)=>value.score>=60);
console.log(filtered);

//reduce try 

let array1=[10,20,30,40,50,60,70];

const totalScore=students.reduce((sum,value)=>sum+value,0)//0+10;10,30,60,....




