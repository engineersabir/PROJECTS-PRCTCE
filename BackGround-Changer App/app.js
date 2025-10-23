var imgBox = document.querySelector(".img-box");
var imgWrap = document.querySelector(".img-wrap");
var line = document.getElementById("line");

imgBox.addEventListener("mousemove", function(e) {
  var boxLeft = imgBox.getBoundingClientRect().left;
  var boxWidth = imgBox.offsetWidth;
  var position = e.pageX - boxLeft;

  // Clamp to prevent overflow
  if (position < 0) position = 0;
  if (position > boxWidth) position = boxWidth;

  imgWrap.style.width = position + "px";
  line.style.left = position + "px";
});
