function toyShop(input){

    let vacationPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let puzzlePrice = puzzleCount * 2.60;
    let dollsPrice = dollsCount * 3;
    let bearsPrice = bearsCount * 4.10;
    let minionsPrice = minionsCount * 8.20;
    let trucksPrice = trucksCount * 2;

    let totalWon = puzzlePrice + dollsPrice + bearsPrice + minionsPrice + trucksPrice;
    let totalCount = puzzleCount + dollsCount + bearsCount + minionsCount + trucksCount
    
    if(totalCount >= 50){
        totalWon -= totalWon * 0.25;
    }
    totalWon -= totalWon * 0.1;

    if(totalWon>=vacationPrice){
        console.log(`Yes! ${(totalWon-vacationPrice).toFixed(2)} lv left.`)
    }
    else{
        console.log(`Not enough money! ${(vacationPrice-totalWon).toFixed(2)} lv needed.`)
    }
}
toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"]);