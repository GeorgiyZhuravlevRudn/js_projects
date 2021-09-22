const colors=["green","red","black","white"];
const color= document.querySelector(".color");
const btn= document.getElementById("btn");
btn.addEventListener("click", function()
{
   //console.log(document.body);
   var Rnum= RandNumber();
   console.log(Rnum);
   document.body.style.backgroundColor = colors[Rnum];
   colors.textContent=colors[Rnum];
});

function RandNumber()
{
        return Math.floor(Math.random()*colors.length);
}