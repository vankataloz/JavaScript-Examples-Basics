function operationsBetweenNumbers(input){
    let number1 = Number(input[0]);
    let number2 = Number(input[1]);
    let operator = input[2];
    let result = 0;
    let evenOrOdd = 0;

    if(operator === "+"){
        result = number1 + number2;
        if(result % 2 === 0){
            evenOrOdd = "even";
        }
        else{
            evenOrOdd = "odd";
        }
        console.log(`${number1} ${operator} ${number2} = ${result} - ${evenOrOdd}`);
    }
    else if(operator === "-"){
        result = number1 - number2;
        if(result % 2 === 0){
            evenOrOdd = "even";
        }
        else{
            evenOrOdd = "odd";
        }
        console.log(`${number1} ${operator} ${number2} = ${result} - ${evenOrOdd}`);
    }
    else if(operator === "*"){
        result = number1 * number2;
        if(result % 2 === 0){
            evenOrOdd = "even";
        }
        else{
            evenOrOdd = "odd";
        }
        console.log(`${number1} ${operator} ${number2} = ${result} - ${evenOrOdd}`);
    }
    else if(operator === "/"){
        if(number2 === 0){
            console.log(`Cannot divide ${number1} by zero`);
        }
        else {
            result = (number1 / number2).toFixed(2);
            console.log(`${number1} ${operator} ${number2} = ${result}`);
        }
    }
    else if(operator === "%"){
        if(number2 === 0){
            console.log(`Cannot divide ${number1} by zero`);
        }
        else {
            result = number1 % number2;
            console.log(`${number1} ${operator} ${number2} = ${result}`);
        }
    }
}