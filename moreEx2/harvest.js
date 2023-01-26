function harvest(input){

    let grapeLand = Number(input[0]);
    let grapePerSquareMeter = Number(input[1]);
    let littersVineNeeded = Number(input[2]);
    let workersCount = Number(input[3]);

    landForVine = grapeLand * 0.4;
    grapeKilograms = landForVine * grapePerSquareMeter;
    totalVine = grapeKilograms / 2.5;

    if(totalVine>=littersVineNeeded){
        console.log(`Good harvest this year! Total wine: ${Math.ceil(totalVine)} liters.`);
        console.log(`${Math.ceil(totalVine-littersVineNeeded)} liters left -> ${Math.ceil((totalVine-littersVineNeeded)/workersCount)} liters per person.`)
    }
    else{
        console.log(`It will be a tough winter! More ${Math.floor(littersVineNeeded-totalVine)} liters wine needed.`)
    }
}
harvest(["1020", "1.5", "425", "4"])