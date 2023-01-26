function basketballEquipment(input){
    let yearTax = Number(input[0]);
    let shoesCost = yearTax * 0.6;
    let outfitCost = shoesCost * 0.8;
    let ballCost = outfitCost * 0.25;
    let accessoriesCost = ballCost * 0.2;
    let totalCostExpenses = yearTax + shoesCost + outfitCost + ballCost + accessoriesCost;
    console.log(totalCostExpenses)
}
basketballEquipment(["365"]);