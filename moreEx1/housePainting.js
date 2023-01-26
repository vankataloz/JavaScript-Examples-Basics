function housePainting(input){
    let height = Number(input[0]);
    let length = Number(input[1]);
    let heightRoof = Number(input[2]);

    let sideWall = (height * length * 2) - 4.5;
    let backWall = (height * height * 2) - 2.4;
    let totalAreaHouse = sideWall + backWall;
    let greenPaint = (totalAreaHouse / 3.4).toFixed(2);
    let twoSidesRoof = 2 * (height * length);
    let twoTrianglesRoof = 2 * ((height * heightRoof) / 2);
    let totalRoofArea = twoSidesRoof + twoTrianglesRoof;
    let redPaint = (totalRoofArea / 4.3).toFixed(2);
    
    console.log(greenPaint);
    console.log(redPaint);
}
housePainting(["6", "10", "5.2"])