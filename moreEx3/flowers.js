function flowers(input){
    let chrysanthemumsCount = Number(input[0]);
    let rosesCount = Number(input[1]);
    let tulipCount = Number(input[2]);
    let season = input[3];
    let isHoliday = input[4];
    let totalSum = 0;

        if(chrysanthemumsCount + rosesCount + tulipCount > 20)
            {
            switch(season) {
        case "Spring":
            totalSum += chrysanthemumsCount * 2;
            totalSum += rosesCount * 4.10;
            totalSum += tulipCount * 2.50;
            if(tulipCount > 7) {
                totalSum *= 0.95;
            }
            break;
        case "Summer":
            totalSum += chrysanthemumsCount * 2;
            totalSum += rosesCount * 4.10;
            totalSum += tulipCount * 2.50;
            break;
        case "Autumn":
            totalSum += chrysanthemumsCount * 3.75;
            totalSum += rosesCount * 4.50;
            totalSum += tulipCount * 4.15;
            break;
        case "Winter":
            totalSum += chrysanthemumsCount * 3.75;
            totalSum += rosesCount * 4.50;
            totalSum += tulipCount * 4.15;
            if(rosesCount >= 10){
                totalSum *= 0.90;
            }
            break;
        }
        totalSum *= 0.80;
    }
        else{
            switch(season) {
                case "Spring":
                    totalSum += chrysanthemumsCount * 2;
                    totalSum += rosesCount * 4.10;
                    totalSum += tulipCount * 2.50;
                    if(tulipCount > 7) {
                        totalSum *= 0.95;
                    }
                    break;
                case "Summer":
                    totalSum += chrysanthemumsCount * 2;
                    totalSum += rosesCount * 4.10;
                    totalSum += tulipCount * 2.50;
                    break;
                case "Autumn":
                    totalSum += chrysanthemumsCount * 3.75;
                    totalSum += rosesCount * 4.50;
                    totalSum += tulipCount * 4.15;
                    break;
                case "Winter":
                    totalSum += chrysanthemumsCount * 3.75;
                    totalSum += rosesCount * 4.50;
                    totalSum += tulipCount * 4.15;
                    if(rosesCount >= 10){
                        totalSum *= 0.90;
                    }
                    break;
            }
        }
    if(isHoliday === "Y"){
        totalSum *= 1.15;
    }
    console.log((totalSum+2).toFixed(2));
}
flowers(["3","10","9","Winter","N"])