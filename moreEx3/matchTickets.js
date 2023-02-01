function matchTickets(input){
    let budget = Number(input[0]);
    let category = input[1];
    let peopleCount = Number(input[2]);

    if(peopleCount >= 1 && peopleCount <= 4){
        budget *= 0.25;
    }
    else if(peopleCount >= 5 && peopleCount <= 9){
        budget *= 0.4;
    }
    else if(peopleCount >= 10 && peopleCount <= 24){
        budget *= 0.5;
    }
    else if(peopleCount >= 25 && peopleCount <= 49){
        budget *= 0.6;
    }
    else{
        budget *= 0.75;
    }
    switch(category){
        case "VIP":budget -= peopleCount * 499.99; break;
        case "Normal":budget -= peopleCount * 249.99; break;
    }
    if(budget >=0){
        console.log(`Yes! You have ${budget.toFixed(2)} leva left.`);
    }
    else{
        console.log(`Not enough money! You need ${Math.abs(budget).toFixed(2)} leva.`);
    }
}
matchTickets(["1000","Normal","1"]);
