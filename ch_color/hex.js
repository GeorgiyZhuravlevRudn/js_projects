const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const color= document.querySelector(".color");//so we can change the text
const btn= document.getElementById("btn");
console.log(hex.length);
btn.addEventListener("click", function()
{
   //console.log(document.body);
   var Rnum= RandNumber();
   let hexColor="#";
   for(let i=0; i<6;i++)
        hexColor+=hex[RandNumber()];// hex [0-16]
   console.log(hexColor);
   document.body.style.backgroundColor = hexColor;
   color.textContent=hexColor;
});

function RandNumber()
{
        return Math.floor(Math.random()*hex.length);
}