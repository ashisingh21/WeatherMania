const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd7a6161e0cmshfce12356887f548p11727djsneaabab9a9be3',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {
    let upperCity = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()
    searchedCity.innerHTML = upperCity
    fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            // cloud_pct.innerHTML = response.cloud_pct
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            wind_degree.innerHTML = response.wind_degrees
            wind_speed.innerHTML = Math.round(response.wind_speed * 3.6)
            wind_speed2.innerHTML = Math.round(response.wind_speed * 3.6)
        })
        .catch(err => console.error(err));
}


submit2.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city2.value)

})


getWeather("Delhi")


fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lucknow", options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        // cloud_pct.innerHTML = response.cloud_pct
        city1_feels_like.innerHTML = response.feels_like
        city1_humidity.innerHTML = response.humidity

        city1_max_temp.innerHTML = response.max_temp
        city1_min_temp.innerHTML = response.min_temp
        city1_sunrise.innerHTML = response.sunrise
        city1_sunset.innerHTML = response.sunset
        city1_temp.innerHTML = response.temp

        city1_wind_degree.innerHTML = response.wind_degrees
        city1_wind_speed.innerHTML = Math.round(response.wind_speed * 3.6)

    })
    .catch(err => console.error(err));

fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=shimla", options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        // cloud_pct.innerHTML = response.cloud_pct
        city2_feels_like.innerHTML = response.feels_like
        city2_humidity.innerHTML = response.humidity

        city2_max_temp.innerHTML = response.max_temp
        city2_min_temp.innerHTML = response.min_temp
        city2_sunrise.innerHTML = response.sunrise
        city2_sunset.innerHTML = response.sunset
        city2_temp.innerHTML = response.temp

        city2_wind_degree.innerHTML = response.wind_degrees
        city2_wind_speed.innerHTML = Math.round(response.wind_speed * 3.6)

    })
    .catch(err => console.error(err));
fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=pune", options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        // cloud_pct.innerHTML = response.cloud_pct
        city3_feels_like.innerHTML = response.feels_like
        city3_humidity.innerHTML = response.humidity

        city3_max_temp.innerHTML = response.max_temp
        city3_min_temp.innerHTML = response.min_temp
        city3_sunrise.innerHTML = response.sunrise
        city3_sunset.innerHTML = response.sunset
        city3_temp.innerHTML = response.temp

        city3_wind_degree.innerHTML = response.wind_degrees
        city3_wind_speed.innerHTML = Math.round(response.wind_speed * 3.6)

    })
    .catch(err => console.error(err));
fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata", options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        // cloud_pct.innerHTML = response.cloud_pct
        city4_feels_like.innerHTML = response.feels_like
        city4_humidity.innerHTML = response.humidity

        city4_max_temp.innerHTML = response.max_temp
        city4_min_temp.innerHTML = response.min_temp
        city4_sunrise.innerHTML = response.sunrise
        city4_sunset.innerHTML = response.sunset
        city4_temp.innerHTML = response.temp

        city4_wind_degree.innerHTML = response.wind_degrees
        city4_wind_speed.innerHTML = Math.round(response.wind_speed * 3.6)

    })
    .catch(err => console.error(err));
fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai", options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        // cloud_pct.innerHTML = response.cloud_pct
        city5_feels_like.innerHTML = response.feels_like
        city5_humidity.innerHTML = response.humidity

        city5_max_temp.innerHTML = response.max_temp
        city5_min_temp.innerHTML = response.min_temp
        city5_sunrise.innerHTML = response.sunrise
        city5_sunset.innerHTML = response.sunset
        city5_temp.innerHTML = response.temp

        city5_wind_degree.innerHTML = response.wind_degrees
        city5_wind_speed.innerHTML = Math.round(response.wind_speed * 3.6)

    })
    .catch(err => console.error(err));





