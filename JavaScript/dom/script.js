// let btn1= document.querySelector("#btn1");
// btn1.onclick=()=>{
//     console.log("calling from js");
// };

// let div= document.querySelector("div");
// div.onmouseover=()=>{
//     alert("you are inside box");
// };

// let btn1= document.querySelector("#btn1");

// btn1.addEventListener("click",()=>{
//     console.log("clicked on btn1 Handler1"); 
// });

// btn1.addEventListener("click",()=>{
//     console.log("clicked on btn1 Handler2"); 
// });

// let Handler3=()=>{
//     console.log("clicked on btn1 Handler3");
// };
// btn1.addEventListener("click", Handler3
// );

// btn1.addEventListener("click",()=>{
//     console.log("clicked on btn1 Handler4"); 
// });

// btn1.removeEventListener("click",Handler3);

let modeBtn=document.querySelector("#mode");
let currMd="light";
let body=document.querySelector("body");
modeBtn.addEventListener("click",()=>{
    if(currMd==="light"){
        currMd="dark";
        body.classList.add("light")
        body.classList.remove("dark");
    }else{
        currMd="light";
        body.classList.add("dark")
        body.classList.remove("light")
    }
    console.log(currMd);
})