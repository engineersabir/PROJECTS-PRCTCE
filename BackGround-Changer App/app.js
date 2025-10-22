var imgBox = document.querySelector(".img-box");
var imgWrap = document.querySelector(".img-wrap");
var leftSpace = imgBox.offsetLeft;

imgBox.onmousemove=function(e){
    var boxWidth=(e.pageX-leftSpace)+"px";
    imgWrap.computedStyleMap.width
}
