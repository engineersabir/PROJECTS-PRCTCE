const imageContainer = document.querySelector(".imagecontainer");
const prevEl = document.getElementById("pre");
const nextEl = document.getElementById("next");

let x = 0;
let timer;

prevEl.addEventListener("click", () => {
    x += 45;
    clearTimeout(timer);
    updateGallery();
});

nextEl.addEventListener("click", () => {
    x -= 45;
    clearTimeout(timer);
    updateGallery();
});

function updateGallery() {
    imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;

    timer = setTimeout(() => {
        x -= 45;
        updateGallery();
    }, 3000);
}

updateGallery();
