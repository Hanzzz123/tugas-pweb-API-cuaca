//callback function step 1 button click
$(document).ready(function(){
    $("#form-submit").submit(function(event){
        performSearch(event);
    });
});

//api request
function performSearch(event){
    var request;
    event.preventDefault();

    //asynchronous call

   request = $.ajax({
        url:'https://api.openweathermap.org/data/2.5/weather',
        type: "GET",
        data : {
            q: $("#inputCity").val(),
            appid: '88762884948b847a1c3ba479c6fa56d4',
            units: 'metric'
        }

});

   //step 3
   request.done(function (response){
       formatSearch(response);
    });

}

function formatSearch(jsonObject){
    var city_name = jsonObject.name;
    var city_weather = jsonObject.weather[0].main;
    var city_temp = jsonObject.main.temp

    $("#city-name").text(city_name);
    $("#city-weather").text(city_weather);
    $("#city-temp").text(city_temp + " Celsius");

}