function foodDelivery(input){
    let chickenMeal = Number(input[0]);
    let fishMeal = Number(input[1]);
    let veganMeal = Number(input[2]);
    let sumChickenMeal = chickenMeal * 10.35;
    let sumFishMeal = fishMeal * 12.40;
    let sumVeganMeal = veganMeal * 8.15;
    let sumWithoutDelivery = sumChickenMeal + sumFishMeal + sumVeganMeal;
    let desertCost = sumWithoutDelivery * 0.20;
    let totalCost = sumWithoutDelivery + desertCost + 2.50;
    console.log(totalCost)
}
foodDelivery(["2","4","3"]);