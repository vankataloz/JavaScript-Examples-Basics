function areaOfFigures(input){
    let type = input[0];
    let result =0;

    if(type ==="square"){
        let side = Number(input[1]);
        result = side * side;
        console.log(result.toFixed(3));
    }
    else if(type==='rectangle'){
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        result = sideA * sideB;
        console.log(result.toFixed(3));
    }
    else if(type==='circle'){
        let r = Number(input[1]);
        result = Math.PI * r * r;
        console.log(result.toFixed(3));
    }
    else if(type==='triangle'){
        let side = Number(input[1]);
        let height = Number(input[2]);
        result = side * height / 2;
        console.log(result.toFixed(3));
}
}
areaOfFigures(["square", "5"]);