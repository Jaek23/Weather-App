// function getWeather(city){
//     //let city = $('#weather-input').val()
//     let queryUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=4704c9c7e0563a83601c7f6cd4e3b0a7`
//     $.ajax({
//         url: queryUrl,
//         method: 'GET'
//     }).then(function(response){
//         console.log(JSON.stringify(response, null, 2)) 
//     })
// }
// getWeather(Dallas)


function getApi(){
    var requestUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=4704c9c7e0563a83601c7f6cd4e3b0a7'
    fetch(requestUrl)
    .then(function response(){
        return response.json(); 
    })
    console.log(getApi)
}