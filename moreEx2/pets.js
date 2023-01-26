function pets(input){

    let daysCount = Number(input[0]);
    let foodLeftKg = Number(input[1]);
    let dogFoodPerDayKg = Number(input[2]);
    let catFoodPerDayKg = Number(input[3]);
    let turtleFoodPerDayGrams = Number(input[4]);

    let turtleFoodPerDayKg = turtleFoodPerDayGrams / 1000;
    let totalFoodNeeded = (dogFoodPerDayKg * daysCount) + (catFoodPerDayKg * daysCount) + (turtleFoodPerDayKg * daysCount);

    if(totalFoodNeeded<=foodLeftKg){
        console.log(`${Math.floor(foodLeftKg-totalFoodNeeded)} kilos of food left.`);
    }
    else{
        console.log(`${Math.ceil(totalFoodNeeded-foodLeftKg)} more kilos of food are needed.`)
    }
}
pets(["2","10","1","1","1200"])