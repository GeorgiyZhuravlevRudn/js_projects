$(document).ready(function(){
        $('.slider').slick({
                slidesToShow:3,
                slidesToScroll:3,
                arrows:false,
                dots:true
        });
})
var header=document.querySelector('.header');
var headerMenu=document.querySelector('.header__menu');
var headerMenuBtn=document.querySelector('.header__menu-btn');
var headerCrosshair=document.querySelector('.header__crosshair')
headerMenuBtn.addEventListener('click', ()=>{
        header.classList.toggle('is-opened')
        headerMenu.classList.toggle('menu--active')
        headerCrosshair.classList.toggle('crosshair--transform')
})