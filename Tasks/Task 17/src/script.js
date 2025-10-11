const ResultLabel = document.getElementById("result");
const AmountValue = document.getElementById("amount");
let Dollar_Rate = 48.183398;
let Euro_Rate = 56.803208;
function FormatNumber(number, curr) {
    return new Intl.NumberFormat(locale = "de-DE", { style: "currency", currency: curr, maximumFractionDigits: 2 }).format(number)
}
function GetUsd() {
    const Amount = AmountValue.value;
    ConvertCurrency(Amount,Dollar_Rate,"usd");
}
function GetEuro() {
    const Amount = AmountValue.value;
    ConvertCurrency(Amount, Euro_Rate, "eur");
    console.log("Clickde Euro");
}
function ResetBtn() {
    ResultLabel.innerHTML = "";
    AmountValue.value = "";
    ResultLabel.classList.add("d-none");

}

function ConvertCurrency(amount, rate, Currency) {

    let Amount = parseFloat(amount);
    if (Amount <= 0 || isNaN(Amount)) {
        console.log("Clikced in If");
        ResultLabel.innerHTML = "Not Valid";
        ResultLabel.classList.remove("alert-success", "d-none");
        ResultLabel.classList.add("alert-danger");
        return;
    }
    console.log("in");
    ResultLabel.classList.remove("d-none");
    ResultLabel.innerHTML=`${FormatNumber(amount,Currency)}=${FormatNumber((amount*rate),"Egp")}`
    
}
