function fruitShop(input){
    let fruit = input[0];
    let dayOfweek = input[1];
    let quantity = Number(input[2]);
    let sum = 0;

    switch(dayOfweek){
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch(fruit){
                case "banana": sum = quantity * 2.50;console.log(sum.toFixed(2));break;
                case "apple": sum = quantity * 1.20;console.log(sum.toFixed(2));break;
                case "orange": sum = quantity * 0.85;console.log(sum.toFixed(2));break;
                case "grapefruit": sum = quantity * 1.45;console.log(sum.toFixed(2));break;
                case "kiwi": sum = quantity * 2.70;console.log(sum.toFixed(2));break;
                case "pineapple": sum = quantity * 5.50;console.log(sum.toFixed(2));break;
                case "grapes": sum = quantity * 3.85;console.log(sum.toFixed(2));break;
                default: console.log("error");break;
            }
            break;
        case "Saturday":
        case "Sunday":
            switch(fruit){
                case "banana": sum = quantity * 2.70;console.log(sum.toFixed(2));break;
                case "apple": sum = quantity * 1.25;console.log(sum.toFixed(2));break;
                case "orange": sum = quantity * 0.90;console.log(sum.toFixed(2));break;
                case "grapefruit": sum = quantity * 1.60;console.log(sum.toFixed(2));break;
                case "kiwi": sum = quantity * 3.00;console.log(sum.toFixed(2));break;
                case "pineapple": sum = quantity * 5.60;console.log(sum.toFixed(2));break;
                case "grapes": sum = quantity * 4.20;console.log(sum.toFixed(2));break;
                default: console.log("error");break;
            }
            break;
        default: console.log("error");break;
    }
}
fruitShop(["apple",
    "Sunday",
    "3"]);