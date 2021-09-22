var link = document.querySelector(".login-link");
var popup= document.querySelector(".login-popup");
var close=document.querySelector(".modal-close");

var login=popup.querySelector("[name=login]");// find a login in a popup thing
var password=popup.querySelector("[name=password]");// find a password
var form = popup.querySelector("form"); // find a form 
var storage=localStorage.getItem("login"); //storage=login or storage=null

form.addEventListener("submit",function(evt)// submitting a form -> sendin' it
{ 

        evt.preventDefault();
        if(storage!=null)
{
                        
}
        if(!login.value || !password.value)//if pass and log have nothing 
{
        evt.preventDefault();
        console.log("u need to fill log and pass")
}
        else
{
        localStorage.setItem("login",login.value);
        localStorage.setItem("password",password.value);
}
        console.log("send a form");
        console.log(login.value);
        console.log(password.value);

});
link.addEventListener("click", function(event)
{
        event.preventDefault();// 
        console.log("login clicked");
        popup.classList.add("modal-show");
        login.focus();
});
