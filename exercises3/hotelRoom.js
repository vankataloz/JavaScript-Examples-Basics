function hotelRoom(input){
    let month = input[0];
    let nightCount = Number(input[1]);
    let apartmentCost = 0;
    let studioCost = 0;

    switch(month){
        case "May":
        case "October":
            studioCost = 50;
            apartmentCost = 65;
            if(nightCount > 7 && nightCount <= 14){
                studioCost *= 0.95;
            }
            else if(nightCount > 14){
                studioCost *= 0.70;
                apartmentCost *= 0.9;
            }
            break;
        case "June":
        case "September":
            studioCost = 75.20;
            apartmentCost = 68.70;
            if(nightCount > 14){
                studioCost *= 0.80;
                apartmentCost *= 0.9;
            }
            break;
        case "July":
        case "August":
            studioCost = 76;
            apartmentCost = 77;
            if(nightCount > 14){
                apartmentCost *= 0.9;
            }
            break;
    }
        console.log(`Apartment: ${(apartmentCost * nightCount).toFixed(2)} lv.`);
        console.log(`Studio: ${(studioCost * nightCount).toFixed(2)} lv.`);

}
hotelRoom(["June", "14"]);