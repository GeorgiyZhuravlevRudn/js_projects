const boxes=document.querySelectorAll('.box');
window.addEventListener('scroll',showBoxes);
function showBoxes(){
        const triggerPoint=window.innerHeight/5*2;
        boxes.forEach(box=>{
                const boxTop=box.getBoundingClientRect().top;
                if(boxTop < triggerPoint){
                        box.classList.add('box--show');

                }
                else{
                        box.classList.remove('box--show');
                }
        })
}