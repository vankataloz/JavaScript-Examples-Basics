function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fisherCount = Number(input[2]);
 
    let rentPrice = 0;
    
 
    switch (season) {
        case "Spring":
            rentPrice = 3000; break;
 
        case "Sumer":
        case "Autumn":
            rentPrice = 4200; break;
 
        case "Winter":
            rentPrice = 2600; break;
 
    }
    if (fisherCount <= 6) {
        rentPrice = rentPrice * 0.90;
    } else if (fisherCount <= 11) {
        rentPrice = rentPrice * 0.85;
    } else {
        rentPrice = rentPrice* 0.75;
    }
 
    if (season != "Autumn" && fisherCount % 2 === 0) {
        rentPrice = rentPrice * 0.95;
    }
    if (budget >= rentPrice) {
        let moneyLeft = budget - rentPrice;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = rentPrice - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }
}
fishingBoat(["3000",
"Summer",
"11"]);