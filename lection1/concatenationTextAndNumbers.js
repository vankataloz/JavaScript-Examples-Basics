function solve(input){
    let firstName = input[0];
    let lastName = input[1];
    let age = Number(input[2]);
    let town = input[3];
    //let result = "You are " + firstName + " " + lastName + ", a "+ age +"-years old person from " + town + ".";
    let result = `You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`;
    console.log(result)
}
solve(["Ivan","Ivanov","33","Burgas"]);