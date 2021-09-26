const btn= document.querySelector('.switch-btn');
const play=document.querySelector('.play');
const pause=document.querySelector('.pause');
const video= document.querySelector('.Fvideo');

btn.addEventListener('click', function() {
        console.log(btn.classList);
        btn.classList.toggle('show');
        if(btn.classList.contains('show'))
                video.pause();
        else
                video.play();
})