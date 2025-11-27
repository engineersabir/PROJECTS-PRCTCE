const texteareaEl=document.getElementById("textarea");
const totalCounterEl=document.getElementById("total-counter");
const remainingCounterEl=document.getElementById("remaining-counter");
texteareaEl.addEventListener("keyup", ()=>{
    updateCounter()
})
function updateCounter(){
    texteareaEl.innerText=texteareaEl.ariaValueMax.length

}