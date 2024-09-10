// let count=document.querySelector('.o')
// let input=document.querySelector('.f')
// let pluss=document.querySelector('.f1')
// let body=document.querySelector('body')

// pluss.onclick=()=>{
//     if(parseInt(input.values)<10){
//         count.innerHTML='Welcom'
//     }
//     else{
//         count.innerHTML="Godbye"
//     }
// }
let count=document.querySelector('.o')
let input=document.querySelector('.f')
let pluss=document.querySelector('.f1')
let body=document.querySelector('body')

pluss.onclick=()=>{
    if(typeof(parseInt(input.values))=='number'){
        count.innerHTML=input.values
    }
    else{
        count.innerHTML='not a number'
    }
}