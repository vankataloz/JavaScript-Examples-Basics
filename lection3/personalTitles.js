function personalTitles(input){

    let years = Number(input[0]);
    let gender = input[1];

    if(years>=16){
        switch(gender){
            case "m": console.log("Mr.");break;
            case "f": console.log("Ms.");break;
        }
    }
    else{
        switch(gender){
            case "m": console.log("Master");break;
            case "f": console.log("Miss");break;
        }
    }
}
personalTitles([]);