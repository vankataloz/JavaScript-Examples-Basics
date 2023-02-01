function vacation(input){
    let budget = Number(input[0]);
    let season = input[1];
    let location = "";
    let place = "";

    if(budget <= 1000){
        place = "Camp";
        switch (season){
            case "Summer":
                budget *= 0.65;
                location = "Alaska";
                break;
            case "Winter":
                budget *= 0.45;
                location = "Morocco";
        }
    }
    else if(budget > 1000 && budget <= 3000){
        place = "Hut";
        switch (season){
            case "Summer":
                budget *= 0.80;
                location = "Alaska";
                break;
            case "Winter":
                budget *= 0.60;
                location = "Morocco";
        }
    }
    else{
        place = "Hotel";
        switch (season){
            case "Summer":
                budget *= 0.90;
                location = "Alaska";
                break;
            case "Winter":
                budget *= 0.90;
                location = "Morocco";
        }
    }
    console.log(`${location} - ${place} - ${budget.toFixed(2)}`);
}
vacation(["800", "Summer"]);