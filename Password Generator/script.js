
let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");

sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener("input", () => {
  sliderValue.textContent = inputSlider.value;
});

const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "~!@#$%^&*()_+-=[]{}|;:,.<>?";

function generatePassword() {
  let allChars = "";
  if (lowercase.checked) allChars += lowerChars;
  if (uppercase.checked) allChars += upperChars;
  if (numbers.checked) allChars += numberChars;
  if (symbols.checked) allChars += symbolChars;

  if (allChars.length === 0) return "";

  let password = "";
  for (let i = 0; i < inputSlider.value; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }
  return password;
}

genBtn.addEventListener("click", () => {
  passBox.value = generatePassword();
});

copyIcon.addEventListener("click", () => {
  if (passBox.value.length > 0) {
    navigator.clipboard.writeText(passBox.value);
    copyIcon.innerText = "check";
    copyIcon.title = "Password Copied!";

    setTimeout(() => {
      copyIcon.innerText = "content_copy";
      copyIcon.title = "";
    }, 2000);
  }
});
