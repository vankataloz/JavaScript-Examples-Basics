function schoolCamp(input){
    let season = input[0];
    let typeGroup = input[1];
    let studentsCount = input[2];
    let nightsCount = input[3];
    let sportType = "";
    let totalSum = 0;

    switch(season){
        case "Winter":
            switch(typeGroup){
                case "boys":
                    totalSum = nightsCount * studentsCount * 9.60;
                    sportType = "Judo";break;
                case "girls":
                    totalSum = nightsCount * studentsCount * 9.60;
                    sportType = "Gymnastics";break;
                case "mixed":
                    totalSum = nightsCount * studentsCount * 10;
                    sportType = "Ski";break;
            }
            break;
        case "Spring":
            switch(typeGroup){
                case "boys":
                    totalSum = nightsCount * studentsCount * 7.20;
                    sportType = "Tennis";break;
                case "girls":
                    totalSum = nightsCount * studentsCount * 7.20;
                    sportType = "Athletics";break;
                case "mixed":
                    totalSum = nightsCount * studentsCount * 9.50;
                    sportType = "Cycling";break;
            }
            break;
        case "Summer":
            switch(typeGroup){
                case "boys":
                    totalSum = nightsCount * studentsCount * 15;
                    sportType = "Football";break;
                case "girls":
                    totalSum = nightsCount * studentsCount * 15;
                    sportType = "Volleyball";break;
                case "mixed":
                    totalSum = nightsCount * studentsCount * 20;
                    sportType = "Swimming";break;
            }
            break;
    }
    if(studentsCount >= 10 && studentsCount < 20){
        totalSum *= 0.95;
    }
    else if(studentsCount >= 20 && studentsCount < 50){
        totalSum *= 0.85;
    }
    else if(studentsCount >= 50){
        totalSum *= 0.5;
    }
    console.log(sportType + " " + totalSum.toFixed(2) + " lv.");
}
schoolCamp(["Winter",
    "mixed",
    "9",
    "15"]);