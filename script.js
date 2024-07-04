let button = document.querySelector('.btn');
let hexCode = document.querySelector('.span');
let canvas = document.querySelector('.container');

let hex ='#';
let codeSource = '0123456789abcdef';
let sorter = [];



let hexBuild = function(){
    for(let i=0; hex.length < 7;){
      hex += codeSource[Math.round(Math.random()*15)]
      }
canvas.style.backgroundColor = hex
hexCode.textContent = hex
hex = '#'
 
}



   
   
       
   
    
;




