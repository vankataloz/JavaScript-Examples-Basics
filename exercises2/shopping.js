function shopping(input){

    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let processors = Number(input[2]);
    let ramMemory = Number(input[3]);

    let videoCardsPrice = videoCards * 250;
    let processorPrice = processors * (videoCardsPrice * 0.35);
    let ramMemoryPrice = ramMemory * (videoCardsPrice * 0.10);

    totalSumNeeded = videoCardsPrice + processorPrice + ramMemoryPrice
    if(videoCards>processors){
        totalSumNeeded *= 0.85;
    }

    if(budget >= totalSumNeeded){
        console.log(`You have ${(budget-totalSumNeeded).toFixed(2)} leva left!`)
    }
    else{
        console.log(`Not enough money! You need ${(totalSumNeeded-budget).toFixed(2)} leva more!`)
    }
}
shopping(["900",
"2",
"1",
"3"])