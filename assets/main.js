  var cityInput = document.querySelector(".weather-input");
  var searchButton = document.querySelector(".btn");
  var currentCity = document.querySelector(".currentCity");
  var currentTempature = document.querySelector(".currentTempature");
  var currentWind = document.querySelector(".currentWind");
  var currentHumidity = document.querySelector(".currentHumidity");
  var nextTempature = document.querySelector(".nextTemp")
  var nextWind = document.querySelector(".nextWind")
  var nextHumid = document.querySelector(".nextHumidity")
  var forecastCards = document.querySelector(".forecastcards");
  var dateNow = document.querySelector("#current-date");
  var currentDay = document.querySelector(".current-day")
  var date = new Date();
  var currentDate = dayjs();

  searchButton.addEventListener("click", function(){
    $('#current-date').text(currentDate.format('(M/D/YYYY)'));
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=imperial&appid=4704c9c7e0563a83601c7f6cd4e3b0a7`)
     .then(response => response.json())
     .then(data=>{
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var windSpeed = data['wind']['speed'];
        var humidityValue = data['main']['humidity']


        currentCity.innerHTML = nameValue;
        currentTempature.innerHTML = "Temp: " + tempValue + " °F";
        currentWind.innerHTML = "Wind: " + windSpeed + " MPH";
        currentHumidity.innerHTML ="Humidity: " + humidityValue + "%";

        localStorage.setItem("data", nameValue + tempValue + windSpeed + humidityValue)
     })

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityInput.value}&units=imperial&exclude=minutely,hourly&appid=4704c9c7e0563a83601c7f6cd4e3b0a7`)
    .then(response => response.json())
    //.then(data=>console.log(data))
    .then(data=>{
      var fiveForecastDays = [];
      var fiveDaysForecast = data.list.filter(forecast =>{
        var forecastDate = new Date(forecast.dt_txt).getDate();
         if(!fiveForecastDays.includes(forecastDate)){
            return fiveForecastDays.push(forecastDate);
         } 
       })

       for(i=0; i<5; i++){
        var cardDiv = document.createElement("div");
        cardDiv.setAttribute("class", "card");
        forecastCards.appendChild(cardDiv);
        var tempatureP = document.createElement("p");
        tempatureP.setAttribute("class", "nextTemp");
        cardDiv.appendChild(tempatureP);
        var windP = document.createElement("p");
        windP.setAttribute("class", "nextWind")
        cardDiv.appendChild(windP);
        var humidityP = document.createElement("p");
        humidityP.setAttribute("class", "nextHumidity");
        cardDiv.appendChild(humidityP);

        var nextTempature = fiveDaysForecast [i] ['main'] ['temp']
        tempatureP.innerHTML = "Temp: " + nextTempature + " °F";
        var nextWind = fiveDaysForecast [i] ['wind'] ['speed'];
        windP.innerHTML = "Wind: " + nextWind + " MPH";
        var nextHumidity = fiveDaysForecast [i] ['main'] ['humidity'];
        humidityP.innerHTML = "Humidity: " + nextHumidity + "%";
      }
      console.log(fiveDaysForecast);
       })
       resetState()
})

function resetState(){
  while(forecastCards.firstChild){
      forecastCards.removeChild(forecastCards.firstChild)
  }
}
