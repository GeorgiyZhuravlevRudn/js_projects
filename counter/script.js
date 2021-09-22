const number= document.querySelector(".number");
let num = 0;
const increase=document.getElementById("increase");
const decrease=document.getElementById("decrease");
const reset=document.getElementById("reset");

increase.addEventListener("click",function(){
        num++;
        number.textContent=num;
        checkNum();
})
decrease.addEventListener("click",function(){
        num--;
        number.textContent=num;
        checkNum();
})
reset.addEventListener("click",function(){
        num=0;
        number.textContent=num;
        checkNum();
})
function checkNum(){
        if(num < 0)
                number.style.color="red";
        else if(num>0)
                number.style.color="green";
        else
                number.style.color="black";
}