function fuelTank(input){
    let fuel= (input[0]);
    let fuelLiterInCar= Number(input[1]);
     
    if (fuel === "Diesel"){
        if (fuelLiterInCar >= 25){
            console.log('You have enough diesel.');
            } 
        else {
                console.log('Fill your tank with diesel!');
            }
    }
    else if (fuel === "Gasoline"){
        if (fuelLiterInCar >= 25){
            console.log('You have enough gasoline.');
            } 
        else {
                console.log('Fill your tank with gasoline!');
            }
    }
    else if(fuel === "Gas"){
        if (fuelLiterInCar >= 25){
            console.log('You have enough gas.');
            } 
        else {
                console.log('Fill your tank with gas!');
            }
    } 
    else {
    console.log("Invalid fuel!")
    }
    }