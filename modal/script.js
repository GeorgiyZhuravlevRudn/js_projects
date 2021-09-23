const modalOpen=document.querySelector(" .modal-open");
const modalClose = document.querySelector(".modal-close");

const popUp = document.querySelector(".modal-overlay");
console.log(popUp.classList);

modalOpen.addEventListener('click', function() {
        popUp.classList.add("open-modal");
        console.log(popUp.classList);
})

modalClose.addEventListener('click', function() {
        popUp.classList.remove("open-modal");
        console.log(popUp.classList);
})