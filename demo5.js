function hotelRoom(input){
    let month = input[0];
    let nightCount = Number(input[1]);
    let studioPrice = 0;
    let apartmentPrice = 0;

    if (month === "May" || month === "October"){
        studioPrice = 50 * nightCount;
        apartmentPrice = 65 * nightCount;
        if (nightCount > 14){
            studioPrice *= 0.70;
            apartmentPrice *= 0.90;
        }else if (nightCount > 7) {
            studioPrice *= 0.95;
        }
        console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
        console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
    }else if (month === 'June' || month === 'September'){
        studioPrice = 75.20 * nightCount;
        apartmentPrice = 68.70 * nightCount;
        if (nightCount > 14){
            studioPrice *= 0.80;
            apartmentPrice *= 0.90;
        }
        console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
        console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
    }else if (month === 'July' || month === 'August'){
        studioPrice = 76 * nightCount;
        apartmentPrice = 77 * nightCount;
        if (nightCount > 14){
            apartmentPrice *= 0.90;
        }
        console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
        console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
    }
}