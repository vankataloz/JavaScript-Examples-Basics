function trainingLab(input){
    let width = Number(input[0]) * 100;
    let height = Number(input[1]) * 100;
    let realHeight = height - 100;
    let deskSpace = Math.floor(realHeight / 70);
    let totalRows = Math.floor(width / 120);
    let workingPlaces = (deskSpace * totalRows) - 3
    console.log((workingPlaces).toFixed(0))
}
trainingLab(["8.4", "5.2"]);