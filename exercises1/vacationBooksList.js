function vacationBookList(input){
    let totalBookPages = Number(input[0]);
    let pagesReadPerHour = Number(input[1]);
    let daysForReading = Number(input[2]);
    let hourPerDayReading = (totalBookPages / pagesReadPerHour) / daysForReading;
    console.log(hourPerDayReading)
}
vacationBookList(["212","20","2"]);