function sleepyTomCat(input){

    let holidayDays = Number(input[0]);

    let minutesPlayInHoliday = holidayDays * 127
    let restDaysInYear = 365 - holidayDays;
    let minutesPlayWhenWork = restDaysInYear * 63;
    let totalPlayTime = minutesPlayInHoliday + minutesPlayWhenWork;

    if(totalPlayTime >= 30000){
        console.log("Tom will run away");
        console.log(`${Math.floor((totalPlayTime-30000)/60)} hours and ${Math.abs(30000-totalPlayTime)%60} minutes more for play`)
    }
    else{
        console.log("Tom sleeps well");
        console.log(`${Math.floor((30000-totalPlayTime)/60)} hours and ${Math.abs(30000-totalPlayTime)%60} minutes less for play`)
    }
}
sleepyTomCat(["113"]);