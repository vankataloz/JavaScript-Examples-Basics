function tennisRanklist(input){
    let tournamentsCount = Number(input[0]);
    let startingPoints = Number(input[1]);
    let pointsFromTournaments = 0;
    let winsCount = 0;

    for(let i = 2;i <= tournamentsCount + 1; i++){
        let tournamentResult = input[i];
        switch(tournamentResult){
            case "W":
                pointsFromTournaments += 2000;
                winsCount++;
                break;
            case "F": pointsFromTournaments += 1200;break;
            case "SF": pointsFromTournaments += 720;break;
        }
    }
    console.log(`Final points: ${startingPoints + pointsFromTournaments}`);
    console.log(`Average points: ${Math.floor(pointsFromTournaments / tournamentsCount)}`);
    console.log(`${((winsCount / tournamentsCount) * 100).toFixed(2)}%`)
}
tennisRanklist(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"]);