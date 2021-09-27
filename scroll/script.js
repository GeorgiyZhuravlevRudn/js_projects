const date=document.getElementById('date');
date.innerHTML = new Date().getFullYear();//get a date
console.log(date);

const navToggle=document.querySelector('.nav-toggle');
const linksContainer=document.querySelector('.links-container');
const links=document.querySelector('.links');

//show/hide navbar(960px)
navToggle.addEventListener('click', function()
{
        linksContainer.classList.toggle('show-container');
})

const navbar=document.getElementById('nav');

const topLink = document.querySelector('.scroll-top');

window.addEventListener('scroll',function(){

        const scrollHeight=window.pageYOffset;//current offset

        const navHeight=navbar.getBoundingClientRect().height;

        if (scrollHeight>navHeight)
        {
                //linksContainer.classList.add('fixed-navbar');
                navbar.classList.add('fixed-navbar');
        }
        else
                navbar.classList.remove('fixed-navbar');
                //linksContainer.classList.remove('fixed-navbar');  
        //toplink 
        if(scrollHeight>200)
                topLink.classList.add('show-top-link');
        else
                topLink.classList.remove('show-top-link');

})
const scrollLinks=document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link)
{
        link.addEventListener('click', function(event)
        {
                event.preventDefault();// delete any behaviour
                const id = event.currentTarget.getAttribute('href').slice(1);// get id of a href of a link(without'#')
                const elm = document.getElementById(id);

                //calculate heights
                const navHeight=navbar.getBoundingClientRect().height;
                const containerHeight=linksContainer.getBoundingClientRect().height;
                const fixedNav=navbar.classList.contains('fixed-nav');

                let position= elm.offsetTop-navHeight;

                if(!fixedNav)
                        position-=navHeight;// val of the offsetTop

                if(navHeight>82){
                        position+=containerHeight;
                }
                window.scrollTo({
                        left: 0,
                        top:position,

                });
                linksContainer.classList.toggle('show-container');
        }      
        )
})