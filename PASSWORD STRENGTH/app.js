var pass =document.getElementById("password");
var msg=document.getElementById("message");
var str=document.getElementById("strength");


pass.addEventListener('input',()=>{
    if(pass.ariaValueMax.length>0){
        msg.style.display="block";
    }else{
        msg.style.display="none";
    }
    if(pass.value.length<4){
        str.innerHTML="weak";
    }
    else if(pass.value.length>=4 && pass.value.length<8){
        str.innerHTML="medium";
    }
    else if(pass.value.length>=8){
        str.innerHTML="strong";
    }
})