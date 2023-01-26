function ProjectCreation(input){
    let name = input[0];
    let projects = Number(input[1]);
    let result = Number(projects * 3);
    let output = `The architect ${name} will need ${result} hours to complete ${projects} project/s.`;
    console.log(output)
}
ProjectCreation(["George ","4"])