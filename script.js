// JavaScript File
$( document ).ready(function() {
    
$("#go").click(function(){
    var name = $("#search").val();
    var part1= "https://api.apixu.com/v1/current.json?key=e98c48b043494cdaabf131648171201&q="
    var url = part1 + name;
    
    $.getJSON(url, function (response){
        $("#weather-results").append("The humidity is"+ " " + response.current.humidity+"<br>");
        $("#weather-results").append("The temperature is" + " " + response.current.temp_f +"<br>");
        $("#weather-results").append("The wind speed is" + " " + response.current.wind_mph + " "+"mph" +"<br>");
        $("#weather-results").css('background-color','red');
    });
});
});




