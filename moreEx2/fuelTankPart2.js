function fuelTankPart2(input){

    let fuelType = input[0];
    let fuelQuantity = Number(input[1]);
    let discountCard = input[2];

    let totalGasSum = 0;
    let totalGasolineSum = 0;
    let totalDieselSum = 0;

    if(discountCard === "Yes"){
        if(fuelQuantity >= 20 && fuelQuantity <= 25){
            if(fuelType === "Gas"){
                totalGasSum = (fuelQuantity * 0.85) * 0.92;
                console.log(`${totalGasSum.toFixed(2)} lv.`)
            }
            else if(fuelType === "Gasoline"){
                totalGasolineSum = (fuelQuantity * 2.04) * 0.92;
                console.log(`${totalGasolineSum.toFixed(2)} lv.`)
            }
            else if(fuelType === "Diesel"){
                totalDieselSum = (fuelQuantity * 2.21) * 0.92;
                console.log(`${totalDieselSum.toFixed(2)} lv.`)
            }
        }
        else if(fuelQuantity > 25){
            if(fuelType === "Gas"){
                totalGasSum = (fuelQuantity * 0.85) * 0.9;
                console.log(`${totalGasSum.toFixed(2)} lv.`)
            }
            else if(fuelType === "Gasoline"){
                totalGasolineSum = (fuelQuantity * 2.04) * 0.9;
                console.log(`${totalGasolineSum.toFixed(2)} lv.`)
            }
            else if(fuelType === "Diesel"){
                totalDieselSum = (fuelQuantity * 2.21) * 0.9;
                console.log(`${totalDieselSum.toFixed(2)} lv.`)
            }
        }
        else{
            if(fuelType === "Gas"){
                totalGasSum = fuelQuantity * 0.85;
                console.log(`${totalGasSum.toFixed(2)} lv.`)
            }
            else if(fuelType === "Gasoline"){
                totalGasolineSum = fuelQuantity * 2.04;
                console.log(`${totalGasolineSum.toFixed(2)} lv.`)
            }
            else if(fuelType === "Diesel"){
                totalDieselSum = fuelQuantity * 2.21;
                console.log(`${totalDieselSum.toFixed(2)} lv.`)
            }
        }
        }
     else if(discountCard === "No") {
                if(fuelQuantity >= 20 && fuelQuantity <= 25){
                    if(fuelType === "Gas"){
                        totalGasSum = (fuelQuantity * 0.93) * 0.92;
                        console.log(`${totalGasSum.toFixed(2)} lv.`)
                    }
                    else if(fuelType === "Gasoline"){
                        totalGasolineSum = (fuelQuantity * 2.22) * 0.92;
                        console.log(`${totalGasolineSum.toFixed(2)} lv.`)
                    }
                    else if(fuelType === "Diesel"){
                        totalDieselSum = (fuelQuantity * 2.33) * 0.92;
                        console.log(`${totalDieselSum.toFixed(2)} lv.`)
                    }
                }
                else if(fuelQuantity > 25){
                    if(fuelType === "Gas"){
                        totalGasSum = (fuelQuantity * 0.93) * 0.9;
                        console.log(`${totalGasSum.toFixed(2)} lv.`)
                    }
                    else if(fuelType === "Gasoline"){
                        totalGasolineSum = (fuelQuantity * 2.22) * 0.9;
                        console.log(`${totalGasolineSum.toFixed(2)} lv.`)
                    }
                    else if(fuelType === "Diesel"){
                        totalDieselSum = (fuelQuantity * 2.33) * 0.9;
                        console.log(`${totalDieselSum.toFixed(2)} lv.`)
                    }
                }
                else{
                    if(fuelType === "Gas"){
                        totalGasSum = fuelQuantity * 0.93;
                        console.log(`${totalGasSum.toFixed(2)} lv.`)
                    }
                    else if(fuelType === "Gasoline"){
                        totalGasolineSum = fuelQuantity * 2.22;
                        console.log(`${totalGasolineSum.toFixed(2)} lv.`)
                    }
                    else if(fuelType === "Diesel"){
                        totalDieselSum = fuelQuantity * 2.33;
                        console.log(`${totalDieselSum.toFixed(2)} lv.`)
                    }
                }
        }
    }
fuelTankPart2(["Diesel","10","Yes"]);