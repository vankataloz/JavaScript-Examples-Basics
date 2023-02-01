function carToGo(input){
    let budget = Number(input[0]);
    let season = input[1];
    let classType = "";
    let carType = "";

    if(budget <= 100){
        classType = "Economy class";
        switch (season){
            case "Summer":
                budget *= 0.35;
                carType = "Cabrio";
                break;
            case "Winter":
                budget *= 0.65;
                carType = "Jeep";
        }
    }
    else if(budget > 100 && budget <= 500){
        classType = "Compact class";
        switch (season){
            case "Summer":
                budget *= 0.45;
                carType = "Cabrio";
                break;
            case "Winter":
                budget *= 0.80;
                carType = "Jeep";
        }
    }
    else{
        classType = "Luxury class";
        carType = "Jeep";
        budget *= 0.90;
    }
    console.log(classType);
    console.log(`${carType} - ${budget.toFixed(2)}`);
}
carToGo(["1010", "Summer"]);