//traversing the Dom

const Qbtns=document.querySelectorAll('.question-btn');

Qbtns.forEach(function(Qbtn)//we have 3btns, for each
{
        Qbtn.addEventListener('click',function(event)// we listen for click
        {
                console.log(event.currentTarget.parentElement.parentElement);//parent of a parent of a curr btn
                const question = event.currentTarget.parentElement.parentElement; // creating a const of Dparent 
                question.classList.toggle('show-text');
        })
})
