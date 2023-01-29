function numbersDivisibleBy9(input){
    let number1 = Number(input[0]);
    let number2 = Number(input[1]);
    let sum = 0;
    let buff ="";
    for (let i = number1;i <= number2;i++){
        if(i % 9 === 0){
            sum += i;
            buff += i +"\n";
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(buff);
}
numbersDivisibleBy9(["100", "200"]);