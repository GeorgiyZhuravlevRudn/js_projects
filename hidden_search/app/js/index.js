var btn__search=document.querySelector('.search__btn');
var search=document.querySelector('.search');
var searchInput=document.querySelector('.search__field');
btn__search.addEventListener('click', ()=>{
        search.classList.toggle('search--active');
        searchInput.focus();
}
);