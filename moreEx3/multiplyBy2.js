function multiplyBy2(input) {
    let number = 0;
    let everyOperation = 0;
    while (number >= 0) {
        number = Number(input[everyOperation]);
        everyOperation++;
        if (number < 0) {
            console.log("Negative number!");
        } else {
            number *= 2;
            console.log("Result: " + number.toFixed(2));
        }
    }
}
multiplyBy2(["12","43.2144","12.3","543.23","-20"]);