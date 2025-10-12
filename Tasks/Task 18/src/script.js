const textArea = document.getElementById("textarea");
const totalCounter = document.getElementById("total-counter");
const remainingCounter = document.getElementById("remaining-counter");
const Max_Length = 50;

textArea.addEventListener("input", () => {
    textArea.value = textArea.value.slice(0, Max_Length);
    console.log(textArea.value);
    let Written = textArea.value.length;
    let remaining = Max_Length - Written;
    totalCounter.innerText = Written;
    remainingCounter.innerText = remaining;

});
