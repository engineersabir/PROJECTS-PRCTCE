const video1=document.getElementById("project-video1");
const video2=document.getElementById("project-video2");
const video3=document.getElementById("project-video3");
// const vProject=document.getElementById("abc");
const videoList=[video1,video2,video3];
videoList.forEach(function(video){
    video.addEventListener('mouseover',function(){
        video.onplay();
    })
    video.addEventListener('mouseout',function(){
        video.pause();
    })
})




