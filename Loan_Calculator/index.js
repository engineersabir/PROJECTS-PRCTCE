function calculateLoan(){
loanAmountValue=    document.getElementById("loan-amount").value;
interestRatValue=document.getElementById("months-to-pay").value;
MonthsTopayValue=document.getElementById("months-to-pay").value;

interest=(loanAmountValue*(interestRatValue*0.01))/MonthsTopayValue;

monthlyPayment=(loanAmountValue/MonthsTopayValue+interest).toFixed(2);


document.getElementById("payment").innerHTML=`Monthly Payment:${monthlyPayment}`;
}