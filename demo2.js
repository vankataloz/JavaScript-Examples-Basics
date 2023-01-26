function familyTrip(input) {
 
    let budget = Number(input[0])
    let nights = Number(input[1])
    let nightPrice = Number(input[2])
    let additionalCostPercent = Number(input[3])

    let extraExpenses = budget * additionalCostPercent / 100;
 
  if (nights > 7){
    nightPrice *=0.95;
  }
    let totalExpenses = (nights * nightPrice) + extraExpenses;
  if(totalExpenses <= budget){
    console.log (`Ivanovi will be left with ${(budget-totalExpenses).toFixed(2)} leva after vacation.`)
  }
  else{
    console.log(`${(totalExpenses-budget).toFixed(2)} leva needed.`) 
  }
}
familyTrip(["500", "7", "66", "15"]);