// let arr=[21,45,64,32,49,87];
// console.log(arr);

// // Sorting the array in ascending order
// arr.sort();
// console.log(arr);

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// let i=0;

// for(i of arr ){
//     console.log(i);
// }

// for(i in arr ){
//     console.log(arr[i]);
// }

//avg marks of student

// let marks=[87,90,75,60,85];
// let sum=0;

// for(let i=0;i<marks.length;i++){
//     sum+=marks[i];
// }
// let avg= sum/marks.length;
// console.log(avg);

//splice

// let arr=[1,2,3,4,5,6,7,8,9];
// arr.splice(2,4,11,22,33);
// console.log(arr);

//arrow function

// const arowwMulti = (a,b) =>{
//     console.log(a*b);
// }

// count voweles

// function countVoweles(str){

//     let count=0;
//     for(let char of str.toLowerCase()){
//         if(char==="i" || char==="a" || char==="e" || char==="o" || char==="u"){
//             count++;
//         }      
//     }
//     return count;
// }
// let example= countVoweles("ApnaCollege");
// console.log(example);

//forEach

// let str=["Nashik","Pune","Mumbai","Jalgaon"];

// str.forEach((val,i,str)=>
// console.log(val.toUpperCase(),i,str)
// )

//squre of no by using for eachEach

// let arr=[2,3,4,5,6,7,8,9];

// arr.forEach((num)=>{
// console.log(num*num);
// });

// let calSq = (num)=>{
//     console.log(num*num);
//     };

//     arr.forEach(calSq);

// let arr=[2,3,4,5,6,7,8,9];
// arr.map((val) => {
//     console.log(val)
// });

// let calSq = (num) => {
//         console.log(num*num);
//      };
//      arr.map(calSq);

//filter

// let arr=[1,2,3,4,5,6,7,8,9,10];

// let even=arr.filter((val)=>{
// return val %2==0;
// });

// console.log(even);

//reduce

// let arr=[1,2,30,4,5,6];

// let output= arr.reduce((result,current)=>{
//     return result+current;
// });
// console.log(output);

// let large= arr.reduce((priv,curr)=>{
//     return priv > curr ? priv :curr;
// });
// console.log(large);

// let marksArr=[76,88,90,95,44,99];
// let topper=marksArr.filter((val)=>{
//     return val>90;
// });
// console.log(topper);

let n= prompt("Enter number");
let arr=[];
for(i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);

let sum=arr.reduce((priv,curr)=>{
    return priv+curr;
});
console.log(sum);
let product=arr.reduce((priv,curr)=>{
    return priv*curr;
});
console.log(product);