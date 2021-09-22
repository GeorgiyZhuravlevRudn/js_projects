//make right/left button move personalities 
// personalities - an array -> 
const reviews = [
        {
                id:1,
                name:"Simon",
                job:"Designer",
                img:"img/simon.jpeg",
                text:
                "it is a long established  it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",

        },
        {
                id:2,
                name:"Linda",
                job:"Tech Lead",
                img:"img/wo1.jpg",
                text:
                "See gradients were super played out back in the early web days, but now they’re so ubiquitous that you’d be remiss not to drop them in your site, interface, or next hair dye job.Also, I'm part of a group of makers with a mission to build a better internet, one digital project at a time. One of our recent project launches is Cool Backgrounds another free design tool to generate background wallpaper for websites, blogs and phones.",
                
        },
        {
                id:3,
                name:"Sally",
                job:"Front-end developer",
                img:"img/wo2.jpeg",
                text:
                "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
                
        },
        {
                id:4,
                name:"Cole",
                job:"Lawyer",
                img:"img/man1.jpg",
                text:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
                
        },
]
let Aname = document.getElementById("author-name");
let job = document.getElementById("author-job");
let text = document.getElementById("author-review");
let img = document.getElementById("person-img");

const btnNext=document.querySelector(".next-btn");
const btnPrev=document.querySelector(".prev-btn");
const btnRand=document.querySelector(".rand-btn");

let element=-1;
btnNext.addEventListener("click", function()
{
        if(element==reviews.length-1)
                element=0
        else
                element++
        console.log(element);
        showPerson();
                
})

btnRand.addEventListener("click", function()
{
        console.log(element);
        element=Math.abs(Math.floor(Math.random()*reviews.length-1));
        //console.log(Math.floor(Math.random()*reviews.length-1));
        showPerson();
                
})

btnPrev.addEventListener("click", function()
{
        if(element<=0)
                element=reviews.length-1
        else
                element--
        console.log(element);
        showPerson();
                
})

function showPerson()
{
        Aname.textContent=reviews[element].name;
        console.log(reviews[element].name);
        job.textContent=reviews[element].job;
        img.src=reviews[element].img;
        text.textContent=reviews[element].text;
}