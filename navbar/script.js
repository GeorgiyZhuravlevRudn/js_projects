const navToggle= document.querySelector(".navbar-toggle");
const navList= document.querySelector(".nav-list");
//classList.contains("className"); .add(); .remove(); .toggle();
let containsShowList = navList.classList.contains('rand');

navToggle.addEventListener('click', function(){
        
        navList.classList.toggle('show-links');// 1 line or ifelse

        //if(navList.classList.contains('show-links'))
               // navList.classList.remove('show-links');
        //else
                //navList.classList.add('show-links');
        //console.log(navList.classList.contains('show-links'));
});