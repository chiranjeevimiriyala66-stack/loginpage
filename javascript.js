let newbutton=document.querySelector(".buttondark");
let container=document.querySelector("#container");
let box=document.querySelector("#box");
let login=document.querySelector(".loginclass");
let body=document.querySelector("body");
let imgcompany=document.querySelector(".imgcompany");
let header=document.querySelector("header");
let background=true;
newbutton.addEventListener("click",function()
{   
    if(background){
         container.style.backgroundColor="#f0f8ff ";
         box.style.color="black";
         box.style.backgroundColor="white";
         box.style.border="4px solid black";
         login.style.backgroundColor="white";
         login.style.color="black";
         login.style.border="3px solid black";
        //  imgcompany.style.color="black";
         imgcompany.style.backgroundColor="black";
         imgcompany.style.border="3px solid black";
         imgcompany.style.borderRadius="50%";
         header.style.border="2px solid white";
         background=false;

    }
    else{
        container.style.backgroundColor="black";
        box.style.color="white";
         box.style.backgroundColor="black";
          box.style.border="4px solid white";
          login.style.backgroundColor="black";
         login.style.color="white";
         login.style.border="3px solid white";
        //  imgcompany.style.backgroundColor="#f0f8ff";
        //  imgcompany.style.color="black";
        //  imgcompany.style.borderRadius="0%";
        //  imgcompany.style.backgroundColor="f0f8ff";
        //  imgcompany.style.border="3px solid #f0f8ff";
        //  imgcompany.style.borderRadius="50%";
         header.style.border="2px solid white";
        background=true;
    }
})