function converterCtoF(input){
    let celsiumDegreese = Number(input[0]);
    let convertToF = (celsiumDegreese * 1.8) + 32;

    console.log((convertToF).toFixed(2))
}
converterCtoF(["25"]);