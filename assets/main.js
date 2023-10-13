 var cityInput = document.querySelector(".weather-input");
 var searchButton = document.querySelector(".btn");
 searchButton.addEventListener("click", function(){
fetch("https://api.openweathermap.org/data/2.5/weather?q='+cityInput.value+'&appid=4704c9c7e0563a83601c7f6cd4e3b0a7")
    .then(response => response.json())
    .then(data=> console.log(data))
 })
