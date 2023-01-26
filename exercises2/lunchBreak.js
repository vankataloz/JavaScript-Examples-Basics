function lunchBreak(input){

    let seriesName = input[0];
    let seriesLength = Number(input[1]);
    let breakLength = Number(input[2]);

    let lunchTime = breakLength * 0.125;
    let breakTime = breakLength * 0.25;

    let totalBreakLeft = breakLength - lunchTime - breakTime;

    if(totalBreakLeft>=seriesLength){
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(totalBreakLeft-seriesLength)} minutes free time.`)
    }
    else{
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(seriesLength-totalBreakLeft)} more minutes.`)
    }
}
lunchBreak(["Teen Wolf",
"48",
"60"])
