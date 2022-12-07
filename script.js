const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '05e1ee4efcmshb03dd50b604c522p1be148jsn009af7ad83a1',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)

            // cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset

        })
        .catch(err => console.error(err));

}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)

})
getWeather("Jaipur")

// For Tonk
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tonk', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)

        cloud_pct_tonk.innerHTML = response.cloud_pct
        temp_tonk.innerHTML = response.temp
        feels_like_tonk.innerHTML = response.feels_like
        humidity_tonk.innerHTML = response.humidity
        min_temp_tonk.innerHTML = response.min_temp
        max_temp_tonk.innerHTML = response.max_temp
        wind_speed_tonk.innerHTML = response.wind_speed
        wind_degrees_tonk.innerHTML = response.wind_degrees
        sunrise_tonk.innerHTML = response.sunrise
        sunset_tonk.innerHTML = response.sunset

    })
    .catch(err => console.error(err));

// For 

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Jodhpur', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)

        cloud_pct_jodhpur.innerHTML = response.cloud_pct
        temp_jodhpur.innerHTML = response.temp
        feels_like_jodhpur.innerHTML = response.feels_like
        humidity_jodhpur.innerHTML = response.humidity
        min_temp_jodhpur.innerHTML = response.min_temp
        max_temp_jodhpur.innerHTML = response.max_temp
        wind_speed_jodhpur.innerHTML = response.wind_speed
        wind_degrees_jodhpur.innerHTML = response.wind_degrees
        sunrise_jodhpur.innerHTML = response.sunrise
        sunset_jodhpur.innerHTML = response.sunset

    })
    .catch(err => console.error(err));

// For Kota

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kota', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)

        cloud_pct_kota.innerHTML = response.cloud_pct
        temp_kota.innerHTML = response.temp
        feels_like_kota.innerHTML = response.feels_like
        humidity_kota.innerHTML = response.humidity
        min_temp_kota.innerHTML = response.min_temp
        max_temp_kota.innerHTML = response.max_temp
        wind_speed_kota.innerHTML = response.wind_speed
        wind_degrees_kota.innerHTML = response.wind_degrees
        sunrise_kota.innerHTML = response.sunrise
        sunset_kota.innerHTML = response.sunset

    })
    .catch(err => console.error(err));


// For Delhi

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)

        cloud_pct_delhi.innerHTML = response.cloud_pct
        temp_delhi.innerHTML = response.temp
        feels_like_delhi.innerHTML = response.feels_like
        humidity_delhi.innerHTML = response.humidity
        min_temp_delhi.innerHTML = response.min_temp
        max_temp_delhi.innerHTML = response.max_temp
        wind_speed_delhi.innerHTML = response.wind_speed
        wind_degrees_delhi.innerHTML = response.wind_degrees
        sunrise_delhi.innerHTML = response.sunrise
        sunset_delhi.innerHTML = response.sunset

    })
    .catch(err => console.error(err));
