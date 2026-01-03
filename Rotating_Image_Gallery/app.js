const imageContainer = document.querySelector(".image-container");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

let x = 0;
let timer;
const step = 360 / 7; // matches image count

prevEl.addEventListener("click", () => {
    x += step;
    clearTimeout(timer);
    updateGallery();
});

nextEl.addEventListener("click", () => {
    x -= step;
    clearTimeout(timer);
    updateGallery();
});

function updateGallery() {
    imageContainer.style.transform =
        `perspective(1000px) rotateY(${x}deg)`;

    timer = setTimeout(() => {
        x -= step;
        updateGallery();
    }, 3000);
}

updateGallery();
