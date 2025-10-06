const textArea = document.getElementById("textarea");
const totalCounter = document.getElementById("total-counter");
const remainingCounter = document.getElementById("remaining-counter");

function Input() {
    let Text = textArea.value;
    totalCounter.innerText = Text.length;
    remainingCounter.innerText = Math.abs(Text.length - 50);
    console.log(Text);
}
textArea.onkeyup = Input;
onload=Input;