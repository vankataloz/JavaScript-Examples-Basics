function tradeCommissions(input){
    let cityName = input[0];
    let sellVolume = Number(input[1]);
    let commission = 0;

    switch(cityName){
        case "Sofia":
            if(sellVolume >= 0 && sellVolume <= 500){
                commission = sellVolume * 0.05;
            }
            else if(sellVolume > 500 && sellVolume <= 1000){
                commission = sellVolume * 0.07;
            }
            else if(sellVolume > 1000 && sellVolume <= 10000){
                commission = sellVolume * 0.08;
            }
            else if(sellVolume>10000){
                commission = sellVolume * 0.12;
            }
            else{
                console.log("error");break;
            }
            console.log(commission.toFixed(2));
            break;
        case "Varna":
            if(sellVolume >= 0 && sellVolume <= 500){
                commission = sellVolume * 0.045;
            }
            else if(sellVolume > 500 && sellVolume <= 1000){
                commission = sellVolume * 0.075;
            }
            else if(sellVolume > 1000 && sellVolume <= 10000){
                commission = sellVolume * 0.1;
            }
            else if(sellVolume > 10000){
                commission = sellVolume * 0.13;
            }
            else{
                console.log("error");break;
            }
            console.log(commission.toFixed(2));
            break;
        case "Plovdiv":
            if(sellVolume >= 0 && sellVolume <= 500){
                commission = sellVolume * 0.055;
            }
            else if(sellVolume > 500 && sellVolume <= 1000){
                commission = sellVolume * 0.08;
            }
            else if(sellVolume > 1000 && sellVolume <= 10000){
                commission = sellVolume * 0.12;
            }
            else if(sellVolume > 10000){
                commission = sellVolume * 0.145;
            }
            else{
                console.log("error");break;
            }
            console.log(commission.toFixed(2));
            break;
        default:console.log("error");break;
    }
}
tradeCommissions(["Sofia",
    "-1500"]);