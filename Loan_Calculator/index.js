function calculateLoan() {
    const loanAmount = Number(document.getElementById("loan-amount").value);
    const interestRate = Number(document.getElementById("interest-rate").value);
    const monthsToPay = Number(document.getElementById("months-to-pay").value);

    const monthlyInterestRate = interestRate / 100 / 12;

    const monthlyPayment =
        (loanAmount * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -monthsToPay));

    document.getElementById("monthly-payment").innerText =
        `$${monthlyPayment.toFixed(2)}`;
}
document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", calculateLoan);
});

calculateLoan(); // initial load
