const number= document.querySelector(".number");
let num=0;
const increase=document.getElementById("increase");
const decrease=document.getElementById("decrease");
const reset=document.getElementById("reset");

increase.addEventListener("click",function(){
        num++;
        number.textContent=num;
})
decrease.addEventListener("click",function(){
        num--;
        number.textContent=num;
})
reset.addEventListener("click",function(){
        num=0;
        number.textContent=num;
})