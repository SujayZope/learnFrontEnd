let arr=[21,45,64,32,49,87];
console.log(arr);

// Sorting the array in ascending order
arr.sort();
console.log(arr);

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

let i=0;

for(i of arr ){
    console.log(i);
}

for(i in arr ){
    console.log(arr[i]);
}