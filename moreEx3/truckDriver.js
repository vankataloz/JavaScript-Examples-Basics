function truckDriver(input){
    let season = input[0];
    let kmPerMonth = Number(input[1]);
    let salary = 0;

    if(kmPerMonth <= 5000){
        switch(season){
            case "Spring":
            case "Autumn":
                salary += kmPerMonth * 0.75 * 4;
                break;
            case "Summer":
                salary += kmPerMonth * 0.9 * 4;
                break;
            case "Winter":
                salary += kmPerMonth * 1.05 * 4;
                break;
        }
    }
    else if(kmPerMonth > 5000 && kmPerMonth <= 10000){
        switch(season){
            case "Spring":
            case "Autumn":
                salary += kmPerMonth * 0.95 * 4;
                break;
            case "Summer":
                salary += kmPerMonth * 1.1 * 4;
                break;
            case "Winter":
                salary += kmPerMonth * 1.25 * 4;
                break;
        }
    }
    else /*if(kmPerMonth > 10000 && kmPerMonth <= 20000)*/{
        switch(season){
            case "Spring":
            case "Autumn":
            case "Summer":
            case "Winter":
                salary += kmPerMonth * 1.45 * 4;
                break;
        }
    }
    console.log((salary * 0.9).toFixed(2));
}
truckDriver(["Summer","3455"]);