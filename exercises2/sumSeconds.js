function sumSeconds(input){

    let seconds1 = Number(input[0]);
    let seconds2 = Number(input[1]);
    let seconds3 = Number(input[2]);

    let totalSec = seconds1 + seconds2 + seconds3;

    let minutes = Math.floor(totalSec/60);
    let seconds = totalSec % 60;

    if(seconds<10){
        console.log(`${minutes}:0${seconds}`)
    }
    else{
        console.log(`${minutes}:${seconds}`)
    }
}
sumSeconds(["35",
"45",
"44"])