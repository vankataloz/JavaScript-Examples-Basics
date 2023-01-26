function RadianToDegreese(input){
    let angleInRadian = Number(input[0]);
    let convertedDegreese = (angleInRadian * 180) / Math.PI ;
    console.log(convertedDegreese)
}
RadianToDegreese(["3.1416"]);