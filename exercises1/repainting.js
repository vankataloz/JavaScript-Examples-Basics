function repainting(input){
    let nylonQuantity = Number(input[0]) + 2;
    let paintLitters = Number(input[1]) + (input[1] * 0.1);
    let thinnerLitters = Number(input[2]);
    let masterHours = Number(input[3]);
    let sumNylon = nylonQuantity * 1.50;
    let sumPaint = paintLitters * 14.50;
    let sumThinner = thinnerLitters * 5.00;
    let totalCostMaterials = sumNylon + sumPaint + sumThinner + 0.40;
    let masterPayment = masterHours * (totalCostMaterials * 0.3);
    totalCost = totalCostMaterials + masterPayment;
    console.log(totalCost)
}
repainting(["10","11","4","8"]);