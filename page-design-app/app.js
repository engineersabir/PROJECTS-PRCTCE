let productImg = document.getElementById("productImg");
let btns = document.getElementsByClassName("btn");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    productImg.src = `images/image${i + 1}.png`;

    for (let b of btns) b.classList.remove("active");
    this.classList.add("active");
  });
}
