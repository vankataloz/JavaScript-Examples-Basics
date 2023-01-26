function godzillaVsKong(input){

    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let clothesCostPerOneStatist = Number(input[2]);

    let decor = budget * 0.1;
    let totalCostClothes = statists * clothesCostPerOneStatist;
    if(statists > 150){
        totalCostClothes *= 0.9;
    }
    let totalMovieCost = totalCostClothes + decor;

    if(totalMovieCost>budget){
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalMovieCost - budget).toFixed(2)} leva more.`)
    }
    else{
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget-totalMovieCost).toFixed(2)} leva left.`)
    }
}
godzillaVsKong(["15437.62",
"186",
"57.99"])
