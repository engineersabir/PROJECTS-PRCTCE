const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("question");
const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
    score = 0;
}

scoreEl.innerText = `score: ${score}`;
questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");

const correctAns = num1 * num2;

formEl.addEventListener("submit", (event) => {
    event.preventDefault(); // stop form from refreshing page

    const userAns = Number(inputEl.value); // get actual input value

    if (userAns === correctAns) {
        score++;
    } else {
        score--;
    }

    updateLocalStorage();
    scoreEl.innerText = `score: ${score}`;
    inputEl.value = ""; // clear the input
});

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
}
