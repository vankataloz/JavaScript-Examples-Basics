function fishLand(input){
    let mackerelPrice = Number(input[0]);
    let sprinklePrice = Number(input[1]);
    let bonitoKg = Number(input[2]);
    let safridKg = Number(input[3]);
    let musselsKg = Number(input[4]);

    let bonitoCostPerKg = mackerelPrice * 1.6;
    let safridCostPerKg = sprinklePrice * 1.8;

    let bonitoCost = bonitoCostPerKg * bonitoKg;
    let safridCost = safridCostPerKg * safridKg;
    let musselsCost = musselsKg * 7.50;
    
    let totalCost = bonitoCost + safridCost + musselsCost;
    console.log((totalCost).toFixed(2));
}
fishLand(["6.90", "4.20", "1.5", "2.5", "1"]);