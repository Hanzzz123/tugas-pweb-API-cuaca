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
        url:'https://api.openweathermap.org/data/2.5/forecast',
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
    var date1 = jsonObject.list[0].dt_txt;
    var city_name1 = jsonObject.city.name;
    var city_weather1 = jsonObject.list[0].weather[0].main;
    var city_temp1 = jsonObject.list[0].main.temp;
    var iconcode1 = jsonObject.list[0].weather[0].icon;
    var iconurl1 = "https://openweathermap.org/img/wn/" + iconcode1 + "@4x.png";


    var date2 = jsonObject.list[1].dt_txt;
    var city_name2 = jsonObject.city.name;
    var city_weather2 = jsonObject.list[1].weather[0].main;
    var city_temp2 = jsonObject.list[1].main.temp;
    var iconcode2 = jsonObject.list[1].weather[0].icon;
    var iconurl2 = "https://openweathermap.org/img/wn/" + iconcode2 + "@4x.png";


    var date3 = jsonObject.list[2].dt_txt;
    var city_name3 = jsonObject.city.name;
    var city_weather3 = jsonObject.list[2].weather[0].main;
    var city_temp3 = jsonObject.list[2].main.temp
    var iconcode3 = jsonObject.list[2].weather[0].icon;
    var iconurl3 = "https://openweathermap.org/img/wn/" + iconcode3 + "@4x.png";


    var date4 = jsonObject.list[3].dt_txt;
    var city_name4 = jsonObject.city.name;
    var city_weather4 = jsonObject.list[3].weather[0].main;
    var city_temp4 = jsonObject.list[3].main.temp
    var iconcode4 = jsonObject.list[3].weather[0].icon;
    var iconurl4 = "https://openweathermap.org/img/wn/" + iconcode4 + "@4x.png";


    $("#date1").text(date1);
    $("#city-name1").text(city_name1);
    $("#city-weather1").text(city_weather1);
    $("#city-temp1").text(city_temp1 + " Celsius");
    $('#icon1').attr('src', iconurl1);

    $("#date2").text(date2);
    $("#city-name2").text(city_name2);
    $("#city-weather2").text(city_weather2);
    $("#city-temp2").text(city_temp2 + " Celsius");
    $('#icon2').attr('src', iconurl2);

    $("#date3").text(date3);
    $("#city-name3").text(city_name3);
    $("#city-weather3").text(city_weather3);
    $("#city-temp3").text(city_temp3 + " Celsius");
    $('#icon3').attr('src', iconurl3);

    $("#date4").text(date4);
    $("#city-name4").text(city_name4);
    $("#city-weather4").text(city_weather4);
    $("#city-temp4").text(city_temp4 + " Celsius");
    $('#icon4').attr('src', iconurl4);

}
function showDiv() {
    document.getElementById('card1').style.display = "block";
    document.getElementById('card2').style.display = "block";
    document.getElementById('card3').style.display = "block";
    document.getElementById('card4').style.display = "block";



}