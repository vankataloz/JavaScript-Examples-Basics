function trekkingMania(input){
    let groupsCount = Number(input[0]);
    let totalPeople = 0;
    let peopleOnMusala = 0;
    let peopleOnMonblan = 0;
    let peopleOnKilimanjaro = 0;
    let peopleOnK2 = 0;
    let peopleOnEverest = 0;
    for(let i = 1; i < groupsCount + 1; i++){
        let peopleInGroup = Number(input[i]);
        totalPeople += peopleInGroup;
    if(peopleInGroup <= 5){
        peopleOnMusala += peopleInGroup;
    }
    else if(peopleInGroup >=6 && peopleInGroup <=12){
        peopleOnMonblan += peopleInGroup;
    }
    else if(peopleInGroup >= 13 && peopleInGroup <= 25){
        peopleOnKilimanjaro += peopleInGroup;
    }
    else if(peopleInGroup >= 26 && peopleInGroup <= 40){
        peopleOnK2 += peopleInGroup;
    }
    else{
        peopleOnEverest += peopleInGroup;
    }
    }
    console.log(`${(peopleOnMusala/totalPeople*100).toFixed(2)}%`);
    console.log(`${(peopleOnMonblan/totalPeople*100).toFixed(2)}%`);
    console.log(`${(peopleOnKilimanjaro/totalPeople*100).toFixed(2)}%`);
    console.log(`${(peopleOnK2/totalPeople*100).toFixed(2)}%`);
    console.log(`${(peopleOnEverest/totalPeople*100).toFixed(2)}%`);
}
trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"]);