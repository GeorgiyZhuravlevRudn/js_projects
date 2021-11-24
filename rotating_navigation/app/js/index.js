var menuBtn=document.querySelector('.container__btn');
var content=document.querySelector('.content');
var menu=document.querySelector('.menu');
menuBtn.addEventListener('click', ()=>{
        content.classList.toggle('content--rotated');
        menu.classList.toggle('menu--active');
})