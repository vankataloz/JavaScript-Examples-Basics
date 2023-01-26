function worldSwimmingRecord(input){

    let recordInSeconds = Number(input[0]);
    let DistanceInMeters = Number(input[1]);
    let secondsPerMeter = Number(input[2]);

    let totalSeconds = DistanceInMeters * secondsPerMeter;
    let slowingTimes = Math.floor(DistanceInMeters / 15);
    let slowing = slowingTimes * 12.5;
    let timePlusSlowing = totalSeconds + slowing;

    if(timePlusSlowing < recordInSeconds){
        console.log(`Yes, he succeeded! The new world record is ${timePlusSlowing.toFixed(2)} seconds.`);
    }
    else{
        console.log(`No, he failed! He was ${(timePlusSlowing-recordInSeconds).toFixed(2)} seconds slower.`);

    }
}
worldSwimmingRecord(["55555.67",
"3017",
"5.03"])