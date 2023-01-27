function onTimeForTheExam(input){
    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinutes = Number(input[3]);

    let totalExamMinutes = (examHour * 60) + examMinutes;
    let totalArrivalMinutes = (arrivalHour * 60) + arrivalMinutes;
    let diffHour = 0;
    let diffMinutes = 0;

    if(totalExamMinutes - totalArrivalMinutes <= 30 && totalExamMinutes - totalArrivalMinutes >= 0){
        console.log('On time');
        if(totalExamMinutes - totalArrivalMinutes !== 0){
            diffMinutes = (totalExamMinutes - totalArrivalMinutes) % 60;
                console.log(`${diffMinutes} minutes before the start`);
        }
    }
    else if(totalExamMinutes - totalArrivalMinutes > 30){
        console.log("Early");
        if(totalExamMinutes - totalArrivalMinutes >= 60 && totalExamMinutes - totalArrivalMinutes !== 0){
            diffHour = Math.floor((totalExamMinutes - totalArrivalMinutes) / 60);
            diffMinutes = (totalExamMinutes - totalArrivalMinutes) % 60;
            if(diffMinutes < 10) {
                console.log(`${diffHour}:0${diffMinutes} hours before the start`);
            }
            else{
                console.log(`${diffHour}:${diffMinutes} hours before the start`);
            }
        }
        else {
            console.log(`${totalExamMinutes - totalArrivalMinutes} minutes before the start`);
        }
    }
    else if(totalArrivalMinutes > totalExamMinutes){
        console.log("Late");
        if(totalArrivalMinutes - totalExamMinutes >= 60 && totalExamMinutes - totalArrivalMinutes !== 0){
            diffHour = Math.floor((totalArrivalMinutes- totalExamMinutes) / 60);
            diffMinutes = (totalArrivalMinutes - totalExamMinutes) % 60;
            if(diffMinutes < 10) {
                console.log(`${diffHour}:0${diffMinutes} hours after the start`);
            }
            else{
                console.log(`${diffHour}:${diffMinutes} hours after the start`);
            }
        }
        else {
            console.log(`${totalArrivalMinutes - totalExamMinutes} minutes after the start`);
        }
    }
}
onTimeForTheExam(["11",
    "30",
    "11",
    "35"])