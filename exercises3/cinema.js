function cinema(input){
    let typeProjection = input[0];
    let rowsCount = Number(input[1]);
    let columnsCount = Number(input[2]);
    let totalPlaces = rowsCount * columnsCount;

    switch(typeProjection){
        case "Premiere":console.log((totalPlaces * 12).toFixed(2)); break;
        case "Normal":console.log((totalPlaces * 7.50).toFixed(2)); break;
        case "Discount":console.log((totalPlaces * 5.00).toFixed(2)); break;

    }
}