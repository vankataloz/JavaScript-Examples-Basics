function cleverLily(input){
    let years = Number(input[0]);
    let priceWashingMachine = Number(input[1]);
    let toyPrice = Number(input[2]);
    let moneySaved = 0;
    let moneyReceived = 0;

    for(let i = 1;i<=years;i++){
        if(i % 2 === 0){
            moneyReceived+=10;
            moneySaved+=moneyReceived - 1;
        }
        else{
            moneySaved+=toyPrice;
        }
    }
    if(moneySaved>=priceWashingMachine){
        console.log(`Yes! ${(moneySaved-priceWashingMachine).toFixed(2)}`);
    }
    else{
        console.log(`No! ${(priceWashingMachine-moneySaved).toFixed(2)}`);
    }
}
cleverLily(["21",
    "1570.98",
    "3"]);