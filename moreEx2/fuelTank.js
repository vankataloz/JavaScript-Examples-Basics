function fuelTank(input){

    let fuelType = input[0];
    let fuelLitters = Number(input[1]);

    if(fuelType === "Diesel"){
        if(fuelLitters>=25){
            console.log("You have enough diesel.");
        }
        else{
            console.log("Fill your tank with diesel!");
        }
    }
    else if(fuelType === "Gasoline"){
        if(fuelLitters>=25){
            console.log("You have enough gasoline.");
        }
        else{
            console.log("Fill your tank with gasoline!");
        }
    }
    else if(fuelType === "Gas"){
        if(fuelLitters>=25){
            console.log("You have enough gas.");
        }
        else{
            console.log("Fill your tank with gas!");
        }
    }
    else{
        console.log("Invalid fuel!");
    }
}

// function fuelTank(input){
//     let typeFuel = input[0];
//     let availableFuel = Number(input[1]);
//     if (availableFuel >= 25){
//         switch(typeFuel){
//             case "Diesel" : console.log("You have enough diesel.");break;
//             case "Gasoline" : console.log("You have enough gasoline.");break;
//             case "Gas" : console.log ("You have enough gas.");break;
//             default: console.log("Invalid fuel!");
// }
// }
//     else{
//          switch(typeFuel){
//             case "Diesel" : console.log ("Fill your tank with diesel!"); break;
//             case "Gasoline" : console.log ("Fill your tank with gasoline."); break;
//             case "Gas" : console.log ("Fill your tank with gas."); break;
//             default: console.log("Invalid fuel!");
// }
// }
// }
 
// fuelTank(["Diesel", "-1"])