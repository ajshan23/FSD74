// number1,number2= > ...variableName =>array 

// let nums=[number1,number2]=> ...nums => number1, number2 


const arr1=[1,2,3,4,5];
const arr2=[6,7,8,9,10];
// result =>[1,2,3,4,5,6,7,8,9,10]

// console.log(typeof (arr1+arr2))
const newArray=[...arr1,...arr2];
console.log(newArray);
