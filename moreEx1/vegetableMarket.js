function vegetableMarket(input){
    let kgPriceVegetables = Number(input[0]);
    let kgPriceFruits = Number(input[1]);
    let totalKgVegetables = Number(input[2]);
    let totalKgFruits = Number(input[3]);
    let totalPriceVegetables = kgPriceVegetables * totalKgVegetables;
    let totalPriceFruits = kgPriceFruits * totalKgFruits;
    let totalCost = (totalPriceFruits + totalPriceVegetables) / 1.94;
    console.log((totalCost).toFixed(2))
}
vegetableMarket(["0.194", "19.4", "10", "10"]);