function summer(input) {

    let degrees = Number(input[0]);
    let timeofday = input[1];
    let outfit = "";
    let shoes = "";

    if ((timeofday === "Morning") && (10 <= degrees && degrees <= 18)) {
        outfit = "Sweatshirt";
        shoes = "Sneakers";

    } else if ((timeofday === "Evening" || timeofday === "Afternoon") && (10 <= degrees && degrees <= 18 )){
        outfit = "Shirt";
        shoes = "Moccasins";

    } else if ((timeofday === "Morning" || timeofday === "Evening") && (18 < degrees && degrees <= 24 )){
        outfit = "Shirt";
        shoes = "Moccasins";

    } else if (timeofday === "Afternoon" && 18 <= degrees && degrees <= 24 ){
        outfit = "T-Shirt";
        shoes = "Sandals";

    } else if (timeofday === "Morning" && degrees >= 25){
        outfit = "T-Shirt"
        shoes = "Sandals"

    } else if (timeofday === "Afternoon" && degrees >= 25){

        outfit = "Swim Suit"
        shoes = "Barefoot"

    } else if (timeofday === "Evening" && degrees >= 25){
        outfit = "Shirt"
        shoes = "Moccasins"
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)

}
summer(["22","Afternoon"])