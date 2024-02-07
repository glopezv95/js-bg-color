let elements = Array.from(document.querySelector("div").children);
console.log(elements)
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
        })};

    let color = GenerateColor()
    document.body.style.backgroundColor = color;
    document.querySelector("button").style.backgroundColor = color;
}

document.querySelector("button").addEventListener("click", intervalFalse)