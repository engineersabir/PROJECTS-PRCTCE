let scrolContainer=document.querySelector(".gallery");
let backBtn=document.getElementById("backBtn");
let nextBtn=document.getElementById("nextBtn");
scrolContainer.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrolContainer.scrollLeft+=evt.deltaY;
    scrolContainer.style.scrollBehaviour="auto";
});

nextBtn.addEventListener("click",()=>{
    scrolContainer.style.scrollBehaviour="smooth";
    scrolContainer.scrollLeft+=900;
});
backBtn.addEventListener("click",()=>{
    scrolContainer.style.scrollBehaviour="smooth";
    scrolContainer.scrollLeft-=900;
});
