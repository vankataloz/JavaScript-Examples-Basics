function bikeRace(input){
    let juniorBikers = Number(input[0]);
    let seniorBikers = Number(input[1]);
    let typeTrack = input[2];
    let totalSum = 0;

    switch(typeTrack){
        case "trail":
            totalSum += juniorBikers * 5.50;
            totalSum += seniorBikers * 7;
            break;
        case "cross-country":
            totalSum += juniorBikers * 8;
            totalSum += seniorBikers * 9.50;
            if(juniorBikers + seniorBikers >= 50 ){
                totalSum *= 0.75;
            }
            break;
        case "downhill":
            totalSum += juniorBikers * 12.25;
            totalSum += seniorBikers * 13.75;
            break;
        case "road":
            totalSum += juniorBikers * 20;
            totalSum += seniorBikers * 21.50;
            break;
    }
    let donatedMoney = 0.95 * totalSum;
    console.log(donatedMoney.toFixed(2));
}
bikeRace(["21","26","cross-country"]);