function fishingBoat(input){
    let budget = Number(input[0]);
    let season = input[1];
    let fisherCount = Number(input[2]);
    let rentPrice = 0;

    switch(season){
        case "Spring":
            if(fisherCount <= 6){
                rentPrice = 3000 * 0.9;break;
            }
            else if (fisherCount > 6 && fisherCount<=11){
                rentPrice = 3000 * 0.85;break;
            }
            else{
                rentPrice = 3000 * 0.75;break;
            }
        case "Summer":
        case "Autumn":
            if(fisherCount <= 6){
                rentPrice = 4200 * 0.9;break;
            }
            else if (fisherCount > 6 && fisherCount<=11){
                rentPrice = 4200 * 0.85;break;
            }
            else{
                rentPrice = 4200 * 0.75;break;
            }
        case "Winter":
            if(fisherCount <= 6){
                rentPrice = 2600 * 0.9;break;
            }
            else if (fisherCount > 6 && fisherCount<=11){
                rentPrice = 2600 * 0.85;break;
            }
            else{
                rentPrice = 2600 * 0.75;break;
            }
    }
    if(fisherCount % 2 === 0 && season !== "Autumn"){
        rentPrice*=0.95;
    }
    if(budget >= rentPrice){
        console.log(`Yes! You have ${(budget-rentPrice).toFixed(2)} leva left.`)
    }
    else{
        console.log(`Not enough money! You need ${(rentPrice - budget).toFixed(2)} leva.`)
    }

}
fishingBoat(["3000", "Summer", "11"]);