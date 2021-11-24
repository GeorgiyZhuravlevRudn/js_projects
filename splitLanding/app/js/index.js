const items=document.querySelectorAll('.container__item');
const leftItem=document.querySelector('.container__item-left');
const rightItem=document.querySelector('.container__item-right');
const container=document.querySelector('.container');
leftItem.addEventListener('mouseenter',()=>{ 
        container.classList.add('container--hover-left');

 })
leftItem.addEventListener('mouseleave',()=>{ 
        container.classList.remove('container--hover-left');
         
 })
 rightItem.addEventListener('mouseenter',()=>{ 
        container.classList.add('container--hover-right');

 })
rightItem.addEventListener('mouseleave',()=>{ 
        container.classList.remove('container--hover-right');
         
 })
