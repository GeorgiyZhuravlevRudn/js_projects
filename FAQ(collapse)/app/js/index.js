const item=document.querySelectorAll('.faq__item');
const itemBtns=document.querySelectorAll('.faq__item-btn');


for(let i=0;i<itemBtns.length;i++ ){
        itemBtns[i].addEventListener('click',()=>{
                itemBtns[i].parentNode.classList.toggle('main__faq-item--active');
               // item[i].classList.toggle('main__faq-item--active');
        })
}