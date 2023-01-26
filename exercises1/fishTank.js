function fishTank(input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]) / 100;
    let aquariumVolume = (length * width * height) * 0.001;
    let totalLitters = aquariumVolume - (aquariumVolume * percent);
    console.log(totalLitters);
}
fishTank(["85","75","47","17"]);