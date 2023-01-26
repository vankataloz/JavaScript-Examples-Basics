function transportPrice(input){

    let kilometersCount = Number(input[0]);
    let timeFromDay = input[1];
    let totalPrice = 0;

    if(kilometersCount<20)
    {
        if(timeFromDay === "day")
        totalPrice = 0.70 + (0.79 * kilometersCount);
        else{
        totalPrice = 0.70 + (0.90 * kilometersCount);
        }
    }
    else if(kilometersCount>=20 && kilometersCount<100){
        totalPrice = 0.09 * kilometersCount;
    }
    else{
        totalPrice = 0.06 * kilometersCount;
    }
    console.log(totalPrice.toFixed(2));
}
transportPrice(["5", "day"])