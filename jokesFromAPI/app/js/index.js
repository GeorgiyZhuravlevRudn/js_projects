const jokeEl=document.querySelector('.joke');
const containerBtn=document.querySelector('.container__btn');
var timeoutHandler=null;
containerBtn.addEventListener('click',()=>{
        generateJoke();
        $('#joke').addClass('animated bounce');
        if (timeoutHandler) clearTimeout(timeoutHandler);

        timeoutHandler = setTimeout(function()
        {
            $("#joke").removeClass('animated bounce');
    
        }, 500);
       
}
);
generateJoke();
// async way(doesnt work babel)
/*
async function generateJoke(){
        const config={
                headers:{
                        Accept:'application/json'
                },
        }
        const res = await fetch('https://icanhazdadjoke.com',
        config);
        const data = await res.json();
        jokeEl.innerHTML=data.joke;
}*/
function generateJoke(){
        jokeEl.style.transform="translateY(0)";
        const config={
                headers:{
                        Accept:'application/json'
                },
        }
        fetch('https://icanhazdadjoke.com',config)
                .then((res)=>res.json())
                .then((data)=>{
                        jokeEl.innerHTML=data.joke;
                })
}