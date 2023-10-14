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

  searchButton.addEventListener("click", function(){
    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=imperial&appid=4704c9c7e0563a83601c7f6cd4e3b0a7`)
    //  .then(response => response.json())
    //  .then(data=>{
    //     var nameValue = data['name'];
    //     var tempValue = data['main']['temp'];
    //     var windSpeed = data['wind']['speed'];
    //     var humidityValue = data['main']['humidity']

    //     currentCity.innerHTML = nameValue;
    //     currentTempature.innerHTML = "Temp: " + tempValue;
    //     currentWind.innerHTML = "Wind: " + windSpeed;
    //     currentHumidity.innerHTML ="Humidity: " + humidityValue;
    //  })

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityInput.value}&units=imperial&exclude=minutely,hourly&appid=4704c9c7e0563a83601c7f6cd4e3b0a7`)
    .then(response => response.json())
    //.then(data=>console.log(data))
    .then(data=>{
        for(i=0; i<5; i++){
          var cardDiv = document.createElement("div");
          cardDiv.setAttribute("class", "card");
          forecastCards.appendChild(cardDiv);
          var tempatureP = document.createElement("p");
          tempatureP.setAttribute("class", "nextTemp");
          cardDiv.appendChild(tempatureP);

             var nextTempature = data ['list'] [i] ['main'] ['temp'];
             tempatureP.innerHTML = "Temp: " + nextTempature;
       
        }
    })
})