function flowerShop(input){

    let magnoliumCount = Number(input[0]) * 3.25;
    let zumbulCount = Number(input[1]) * 4;
    let rosesCount = Number(input[2]) * 3.5;
    let cactusCount = Number(input[3] * 8);
    let presentPrice = Number(input[4]);

    let totalProfit = (magnoliumCount + zumbulCount + rosesCount + cactusCount) * 0.95;

    if(totalProfit>=presentPrice){
        console.log(`She is left with ${Math.floor(totalProfit-presentPrice)} leva.`)
    }
    else{
        console.log(`She will have to borrow ${Math.ceil(presentPrice-totalProfit)} leva.`)
    }
}
flowerShop(["2","3","5","1","50"]);