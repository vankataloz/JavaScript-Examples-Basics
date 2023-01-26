function pipesInPool(input){

    let vPool = Number(input[0]);
    let pipeOneDebit = Number(input[1]);
    let pipeTwoDebit = Number(input[2]);
    let hoursMissing = Number(input[3]);

    let firstPipeFill = pipeOneDebit * hoursMissing;
    let secondPipeFill = pipeTwoDebit * hoursMissing;
    let totalFill = firstPipeFill + secondPipeFill;

    let percentFill = (100 - ((vPool - totalFill) / vPool) * 100).toFixed(2);
    let pipeOneFill = (100 - ((totalFill - firstPipeFill) / totalFill) * 100).toFixed(2);
    let pipeSecondFill = (100 - ((totalFill - secondPipeFill) / totalFill) * 100).toFixed(2);

    if(vPool>=totalFill){
        console.log(`The pool is ${percentFill}% full. Pipe 1: ${pipeOneFill}%. Pipe 2: ${pipeSecondFill}%.`)
    }
    else{
        console.log(`For ${hoursMissing} hours the pool overflows with ${totalFill-vPool} liters.`)
    }
}
pipesInPool(["1000","100","120","3"])