const textBox = document.getElementById("weatherInput");
const messageBox = document.getElementById("message");
const btnWether = document.getElementById("changeBtn");
const sunnyBackGround = "https://images.pexels.com/photos/1198507/pexels-photo-1198507.jpeg?_gl=1*nccale*_ga*NTIyNDIyMzI2LjE3NTEwNzAxOTE.*_ga_8JE65Q40S6*czE3NjA0NTk4NzYkbzUkZzEkdDE3NjA0NTk4OTgkajM4JGwwJGgw";
const cloudyBackGround = "https://images.pexels.com/photos/7919/pexels-photo.jpg?_gl=1*uh7pk5*_ga*NTIyNDIyMzI2LjE3NTEwNzAxOTE.*_ga_8JE65Q40S6*czE3NjA0NTk4NzYkbzUkZzEkdDE3NjA0NjAzMDMkajE1JGwwJGgw";
const rainyBackGround = "https://images.pexels.com/photos/1250672/pexels-photo-1250672.jpeg?_gl=1*la1e0p*_ga*NTIyNDIyMzI2LjE3NTEwNzAxOTE.*_ga_8JE65Q40S6*czE3NjA0NTk4NzYkbzUkZzEkdDE3NjA0NjAyMjAkajM3JGwwJGgw";
btnWether.addEventListener("click", () => {
    let input = textBox.value;
    Choice(FormatInput(input));
    textBox.value = "";
});
function FormatInput(input) {
    let lowerCased = input.toLowerCase();
    let spaceRemoved = lowerCased.replace(/\s+/g, "");
    return spaceRemoved;
}
function Choice(input) {
    switch (input) {
        case "sunny":
            messageBox.innerHTML = "It’s a bright and sunny day!";
            document.body.style.backgroundImage = `url('${sunnyBackGround}')`;
            break;
        case "rainy":
            messageBox.innerHTML = "Don’t forget your umbrella!";
            document.body.style.backgroundImage = `url('${rainyBackGround}')`;

            break;
        case "cloudy":
            messageBox.innerHTML = "A calm and cloudy day";
            document.body.style.backgroundImage = `url('${cloudyBackGround}')`;

            break;
        default:
            messageBox.innerHTML = "Please enter sunny, rainy, or cloudy!";
            document.body.style.backgroundImage = "";

    }
}



