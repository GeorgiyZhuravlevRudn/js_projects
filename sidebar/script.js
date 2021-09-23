const barToggle = document.querySelector(".sidebar-toggle");
const barClose= document.querySelector(".close-btn");
const sidebar= document.querySelector(".sidebar");

barToggle.addEventListener('click', function() {
        
        sidebar.classList.toggle('show-sidebar');
        console.log(sidebar.classList);
})
barClose.addEventListener('click', function() {
        sidebar.classList.remove('show-sidebar');
        console.log(sidebar.classList);
})
