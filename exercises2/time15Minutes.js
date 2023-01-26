function time15Minutes(input){

    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    
    let totalMinutes = hours * 60 + minutes;

    totalMinutes += 15;

    let newHours = Math.floor(totalMinutes / 60);
    let newMinutes = totalMinutes % 60;

    if(newHours === 24){
        newHours = 0;
    }
    if(newMinutes<10){
        console.log(`${newHours}:0${newMinutes}`)
    }
    else{
        console.log(`${newHours}:${newMinutes}`)
    }
}
time15Minutes(["1", "46"])