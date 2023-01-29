function sumOfNumbers(input){
    let number = String(input[0]);
    let sum = 0;

    for(let i = 0;i < number.length;i++){
        let oneDigit = Number(number[i]);
        sum+=oneDigit;
    }
    console.log(`The sum of the digits is:${sum}`)
}
sumOfNumbers(["1234"])