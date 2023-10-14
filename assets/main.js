  var cityInput = document.querySelector(".weather-input");
  var searchButton = document.querySelector(".btn");
  var currentCity = document.querySelector(".currentCity");
  var currentTempature = document.querySelector(".currentTempature");
  var currentWind = document.querySelector(".currentWind");
  var currentHumidity = document.querySelector(".currentHumidity");
  var nextTempature = document.querySelector(".nextTemp")
  var nextWind = document.querySelector(".nextWind")
  var nextHumid = document.querySelector(".nextHumidity")

  searchButton.addEventListener("click", function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=imperial&appid=4704c9c7e0563a83601c7f6cd4e3b0a7`)
     .then(response => response.json())
     .then(data=>{
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var windSpeed = data['wind']['speed'];
        var humidityValue = data['main']['humidity']

        currentCity.innerHTML = nameValue;
        currentTempature.innerHTML = "Temp: " + tempValue;
        currentWind.innerHTML = "Wind: " + windSpeed;
        currentHumidity.innerHTML ="Humidity: " + humidityValue;
     })

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityInput.value}&units=imperial&exclude=minutely,hourly&appid=4704c9c7e0563a83601c7f6cd4e3b0a7`)
    .then(response => response.json())
    //.then(data=>console.log(data))
    .then(data=>{
        for(i=0; i<5; i++){
            var nextTemp = data ['list'] [i] ['main'] ['temp'];
            nextTempature.innerHTML = nextTemp;
       
        }
    })
})

// for(i=0; i<5; i++){
//     var nextTemp = data ['list'] ['main'] ['temp'];
//     var nextWindSpeed = data ['list'] ['wind'] ['speed'];
//     var nextHumidity = data ['list'] ['main'] ['humidity'];

//     nextTempature.innerHTML = nextTemp;
//     nextWind.innerHTML = nextWindSpeed;
//     nextHumid.innerHTML = nextHumidity;
// }









  //.then(data=>console.log(data))