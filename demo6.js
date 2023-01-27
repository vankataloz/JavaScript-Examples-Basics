function examTime(input) {
    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let examArrivalHour = Number(input[2]);
    let examArrivalMin = Number(input[3]);
    let exaTimeInMin = examHour * 60 + examMin;
    let arrivalTimeInMin = examArrivalHour * 60 + examArrivalMin;
    let earlyLateOnTime = "";
    if (exaTimeInMin < arrivalTimeInMin){
        earlyLateOnTime = "Late";
    } else if (exaTimeInMin === arrivalTimeInMin || exaTimeInMin - arrivalTimeInMin <= 30) {
        earlyLateOnTime = "On time";
    } else {
        earlyLateOnTime = "Early";
    }
    console.log(earlyLateOnTime);

    let timeDiffMins = Math.abs(arrivalTimeInMin - exaTimeInMin);
    switch (earlyLateOnTime) {
        case "Late":
            if (timeDiffMins < 60) {
                console.log(`${timeDiffMins} minutes after the start`);
            }   else {
                console.log(`${Math.floor(timeDiffMins / 60)}:${("00" + (timeDiffMins % 60)).slice(-2)} hours after the start`);
            }
            break;
        default:  // case "On time" & case "Early"
            if (timeDiffMins < 60 && timeDiffMins !== 0) {
                console.log(`${timeDiffMins} minutes before the start`);
            }   else {
                console.log(`${Math.floor(timeDiffMins / 60)}:${("00" + (timeDiffMins % 60)).slice(-2)} hours before the start`);
            }
            break;
    }
}
examTime();