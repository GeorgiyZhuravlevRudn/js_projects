const date=document.getElementById('date');
date.innerHTML = new Date().getFullYear();//get a date
console.log(date);

const navToggle=document.querySelector('.nav-toggle');
const linksContainer=document.querySelector('.links-container');
const links=document.querySelector('.links');

navToggle.addEventListener('click', function()
{
        linksContainer.classList.toggle('show-container');
})