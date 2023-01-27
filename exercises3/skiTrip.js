function skiTrip(input){
    let daysHolidayCount = Number(input[0]);
    let roomType = input[1];
    let grade = input[2];
    let totalSumForHoliday = 0;

    let payedNights = daysHolidayCount - 1;

    switch(roomType){
        case "room for one person":
            totalSumForHoliday = payedNights * 18;
            break;
        case "apartment":
            if(daysHolidayCount < 10){
                totalSumForHoliday = (payedNights * 25) * 0.7;
            }
            else if(daysHolidayCount >= 10 && daysHolidayCount < 15)
            {
                totalSumForHoliday = (payedNights * 25) * 0.65;
            }
            else{
                totalSumForHoliday = (payedNights * 25) * 0.5;
            }
            break;
        case "president apartment":
            if(daysHolidayCount < 10){
                totalSumForHoliday = (payedNights * 35) * 0.9;
            }
            else if(daysHolidayCount >= 10 && daysHolidayCount < 15)
            {
                totalSumForHoliday = (payedNights * 35) * 0.85;
            }
            else{
                totalSumForHoliday = (payedNights * 35) * 0.80;
            }
            break;
    }
    if(grade === "positive"){
        totalSumForHoliday *= 1.25;
    }
    else{
        totalSumForHoliday *= 0.9;
    }
console.log(totalSumForHoliday.toFixed(2))
}
skiTrip(["2",
    "apartment",
    "positive"]);