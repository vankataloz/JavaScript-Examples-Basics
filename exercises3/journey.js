function journey(input){
    let budget = Number(input[0]);
    let season = input[1];
    let destination = 0;
    let place = 0;

    if(budget <= 100){
        destination = "Bulgaria";
        switch(season){
            case "summer":
                place = "Camp";
                budget *= 0.3;
                break;
            case "winter":
                place = "Hotel";
                budget *= 0.7;
                break;
        }
    }
    else if(budget <= 1000) {
        destination = "Balkans";
        switch (season) {
            case "summer":
                place = "Camp";
                budget *= 0.4;
                break;
            case "winter":
                place = "Hotel";
                budget *= 0.8;
                break;
        }
    }
    else if(budget > 1000) {
        destination = "Europe";
        place = "Hotel";
        switch (season) {
            case "summer":
            case "winter":
                budget *= 0.9;
                break;
        }
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${budget.toFixed(2)}`);
}
journey(["1500", "summer"]);