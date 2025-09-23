const button =document.getElementById("btn");
const body=document.body;

const colors=["red","blue","orange","voilet","indigo","green","yellow"]

body.style.backgroundColor=colors[0]
button.addEventListener('click',changeBackground);

function changeBackground(){
    const colorsIndex=Math.floor(Math.random()*colors.length);
    body.style.backgroundColor=colors[colorsIndex];
}