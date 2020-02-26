function bai1() {
    let colorList = ["Red", "Green", "White", "Black"];
    let colors = "";
    colors = colorList.join(", ");
    alert(colors);
}

function bai2() {
    let numbers = prompt("Enter your Number: ");
    numbers.toString();
    let result = [numbers[0]];

    console.log(numbers)
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i - 1] % 2 === 0 && numbers[i] % 2 === 0) {
            result.push("-", numbers[i]);
        } else {
            result.push(numbers[i]);
        }
    }
    alert(result.join(""));
}

function bai3() {
    let inputString = prompt("Enter your String: ");
    let UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let LOWER = "abcdefghijklmnopqrstuvwxyz";
    let result = [];

    for (let i = 0; i < inputString.length; i++) {
        if (UPPER.indexOf(inputString[i]) !== -1) {
            result.push(inputString[i].toLowerCase());
        } else if (LOWER.indexOf(inputString[i] !== -1)) {
            result.push(inputString[i].toUpperCase());
        } else {
            result.push(inputString[i]);
        }
    }
    alert("Before: " + inputString);
    alert("After: " + result.join(""));
}