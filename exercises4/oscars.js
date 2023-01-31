function oscars(input){
    let index = 0;
    let actorName = input[index];
    index++;
    let startingPoints = Number(input[index]);
    index++;
    let juryCount = Number(input[index]);
    index++;
    for(let i = 0;i < juryCount;i++){
        let juryName = input[index];
        index++;
        let currentJuryPoints = Number(input[index]);
        index++;
        let currentPoints = juryName.length * currentJuryPoints / 2;
        if(startingPoints <= 1250.5){
            startingPoints +=currentPoints;
        }
    }
    if(startingPoints <= 1250.5){
        console.log(`Sorry, ${actorName} you need ${(1250.5 - startingPoints).toFixed(1)} more!`);
    }
    else {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${startingPoints.toFixed(1)}!`)
    }
}
oscars(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"]);