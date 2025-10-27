var selectfield=document.getElementById("selectfield");
var selecttext=document.getElementById("selecttext");
var options=document.getElementsByClassName("options");
var list=document.getElementById("list");
var arrowIcon=document.getElementById("arrowIcon");

selectfield.onclick=function(){
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
    
}

for(Option of options){
    Option.onclick=function(){
        selecttext.innerHTML=this.textContent;
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");
    }
}