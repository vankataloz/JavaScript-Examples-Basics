function newHouse(input){
    let flowerType = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);
    let sum =0;

    switch(flowerType){
        case "Roses":
            if(flowersCount > 80){
                sum = (flowersCount * 5) * 0.9;
            }
            else{
                sum = flowersCount * 5;
            }
            break;
        case "Dahlias":
            if(flowersCount > 90){
                sum = (flowersCount * 3.8) * 0.85;
            }
            else{
                sum = flowersCount * 3.8;
            }
            break;
        case "Tulips":
            if(flowersCount > 80){
                sum = (flowersCount * 2.80) * 0.85;
            }
            else{
                sum = flowersCount * 2.8;
            }
            break;
        case "Narcissus":
            if(flowersCount < 120){
                sum = (flowersCount * 3) * 1.15;
            }
            else{
                sum = flowersCount * 3;
            }
            break;
        case "Gladiolus":
            if(flowersCount < 80){
                sum = (flowersCount * 2.50) * 1.20;
            }
            else{
                sum = flowersCount * 2.50;
            }
    }
    if(budget >= sum){
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowerType} and ${(budget-sum).toFixed(2)} leva left.`)
    }
    else{
        console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`)
    }
}