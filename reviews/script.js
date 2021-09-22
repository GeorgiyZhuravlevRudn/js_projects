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
                job:"Generator",
                img:"img/simon.jpeg",
                text:
                "it is a long established  it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                
        },
        {
                id:3,
                name:"Fever",
                job:"UX?",
                img:"img/simon.jpeg",
                text:
                "it is a long established  it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                
        },
        {
                id:4,
                name:"Jesus",
                job:"Designer",
                img:"img/simon.jpeg",
                text:
                "it is a long established  it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                
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

btnPrev.addEventListener("click", function()
{
        console.log(element);
        element=Math.floor(Math.random()*reviews.length-1);
        showPerson();
                
})
btnRand.addEventListener("click", function()
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
        img.textContent=reviews[element].img;
        text.textContent=reviews[element].text;
}