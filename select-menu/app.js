var selectfield = document.getElementById("selectfield");
var selecttext = document.getElementById("selecttext");
var options = document.getElementsByClassName("options");
var list = document.getElementById("list");
var arrowIcon = document.getElementById("arrowIcon");

selectfield.onclick = function () {
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
};

for (let option of options) {
  option.onclick = function () {
    selecttext.innerHTML = this.textContent;
    list.classList.add("hide");
    arrowIcon.classList.remove("rotate");
  };
  document.addEventListener("click", (e) => {
  if (!selectfield.contains(e.target)) {
    list.classList.add("hide");
    arrowIcon.classList.remove("rotate");
  }
});

}
