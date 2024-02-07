let elements = Array.from(document.getElementsByClassName("container")[0].children);
let logos = Array.from(document.getElementsByClassName("bi"))
console.log(logos)
let interval;

function GenerateColor() {
    let items = "rgb(";

    function GenerateRandInt(max) {
        return Math.floor(Math.random() * max);
    };

    for (let i = 0; i < 3; i ++) {
        let a = GenerateRandInt(255);
        items += `${a}, `;
    };

    let color = items.slice(0, -2) + ")";
    return color
}

function ColorChange() {
    let color = GenerateColor();

    elements.forEach(child => {
        child.style.color = color;

    if (child == document.querySelector("button")) {
        child.style.borderColor = color
    }});

    logos.forEach(logo => {
        logo.style.fill = color
    });
}

interval = setInterval(ColorChange, 3000)

function intervalFalse() {
    if (interval) {
    clearInterval(interval)};

    if (document.querySelector("h1").style.color !== "#000") {
    elements.forEach(child => {
        child.style.color = "#000";

        if (child == document.querySelector("button")) {
            child.style.borderColor = "#000"}
        })
    logos.forEach(logo => {
        logo.style.fill = "#000"
    });};

    let color = GenerateColor()
    document.body.style.backgroundColor = color;
    document.querySelector("button").style.backgroundColor = color;
}

document.querySelector("button").addEventListener("click", intervalFalse)