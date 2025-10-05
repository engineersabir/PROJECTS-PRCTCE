let inputSlider=document.getElementById("inputSlide");
let sliderValue=document.getElementById("sliderValue");
let passBox=document.getElementById("passBox");
let lowercase=document.getElementById("lowercase");
let uppercase=document.getElementById("uppercase");
let numbers=document.getElementById("numbers");
let symbols=document.getElementById("symbols");
let genBtn=document.getElementById("genBtn");
let copyIcon=document.getElementById("copyIcon");

sliderValue.textContent=inputSlider.value;
inputSlider.addEventListener('input',()=>{
sliderValue.textContent=inputSlider.value;
})
genBtn.addEventListener('click',()=>{
    passBox.value=generatePassword();
});

let lowerchars='abcdefghijklmnopqrstuvwxyz';
let upperchars='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let allNumbers='0123456789';
let allSymbols='~!@#$%^&*()_+';

// Function to generate Password

function generatePassword(){

    let genPassword='';
    let allchars="";
    allchars+=lowercase.checked?lowerchars:"";
    allchars+=uppercase.checked?uppercase:"";
    allchars+=numbers.checked?numbers:"";
    allchars+=symbols.checked?symbols:"";

    if(allchars=="" || allchars.length==0){
        return genPassword;
    }

let i=1;
while(i<=inputSlider.value)
    {
    

    genPassword=allchars.charAt(Math.floor(Math.random()*upperchars.length));
i++;
}
    return genPassword;





}
copyIcon.addEventListener('click',()=>{
    if(passBox.value!=""||passBox.value.length>=1){

        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText="check";
        copyIcon.title="Password Copied";

        setTimeout(()=>{
            copyIcon.innerHTML='content-copy';
            copyIcon.title="";
        },3000)

    }
});