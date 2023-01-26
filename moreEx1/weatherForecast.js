function weatherForecast(input){
    let weatherOutside = input[0];

    if (weatherOutside == "sunny") 
    {
        greeting = "It's warm outside!";
        console.log(greeting);
    }
    else
    {
        greeting = "It's cold outside!"
        console.log(greeting);
    }
}
weatherForecast(["sunny"])