function petShop(input){
    let dogFoodCount = Number(input[0]);
    let catFoodCount = Number(input[1]);
    let dogFoodCost = dogFoodCount * 2.50;
    let catFoodCost = catFoodCount * 4;
    let result = dogFoodCost + catFoodCost;
    console.log(`${result} lv.`)
}
petShop(["5","4"]);