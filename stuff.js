$(document).ready(function () {
    //name const

    //grab input from submission box
    const btn = $(".btn")

    btn.click(() => {
        event.preventDefault();
        const inputCity = $("#inputCity")[0].value;
        cityToGeolocation(inputCity)
        localStorage.setItem(inputCity, inputCity)
        getCityKeys()
    });

    //function to use input from submission to geocode
    function cityToGeolocation(inputCity) {
        let url = `https://api.opencagedata.com/geocode/v1/json?q=${inputCity}&key=f7c536952d884e97baeb7a8948d115a0`
        // api key for testing: 6d0e711d72d74daeb2b0bfd2a5cdfdba
        // my api key: f7c536952d884e97baeb7a8948d115a0

        $.ajax({
            url,
            method: "GET"
        }).then(response => {
            console.log(response, "geoLocation")
            const lat = response.results[0].geometry.lat;
            const lng = response.results[0].geometry.lng;
            console.log(lat)
            console.log(lng)
            const geoLocation = {lat, lng};
            getWeatherData(geoLocation)
        })
    }

    // function to grab weather api
    function getWeatherData(geoLocation) {
        const {lat, lng} = geoLocation;
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=imperial&appid=927924e4c73455c7286d71a6b1b45a4c`;
        let i = 0
        
        $.ajax({
            url,
            method: "GET"
        }).then(response => {
            console.log(response, "weatherData")
            const uvIndex = response.current.uvi;
            const temp = response.current.temp;
            const humidity= response.current.humidity;
            const forecastTemp= response.daily[i].temp.day;
            const forecastHumidity= response.daily[i].humidity;
            const currentWeather = {uvIndex, temp, humidity};
            const forecastWeather = {forecastTemp, forecastHumidity}
            const weatherData = { currentWeather, forecastWeather }
            showWeather(weatherData)
        });
    }
    
    function showWeather(weatherData) {
        const { currentWeather, forecastWeather } = weatherData
        const { uvIndex, temp, humidity } = currentWeather
        const { forecastTemp, forecastHumidity } = forecastWeather

        const currentWeatherDiv = $("<div>").append(uvIndexDiv, tempDiv, humidityDiv)
        const uvIndexDiv = $("<p>").text(uvIndex)
        const tempDiv = $("<p>").text(temp)
        const humidityDiv = $("<p>").text(humidity)
        currentWeatherDiv.attri("id", "currentWeather")

        //function w/ for loop to make 5 divs and append weather in forecast
        for (var i = 0; i < 4; i++) {
            const forecastWeatherDiv = $("<div>").append(forecastTempDiv, forecastHumidityDiv)
            const forecastTempDiv = $("<p>").text(forecastTemp)
            const forecastHumidityDiv = $("<p>").text(forecastHumidity)
            $("forecast" + i).html(forecastWeatherDiv)
        }
    }

    //fuction to grab uv index -- just kidding the openweather api has uv

    //function to save to local storage

    //function to retrieve from local storage
    function getCityKeys() {
        const cities =  Object.keys(localStorage);
        const city = cities[0];
        console.log(city, "city");
        console.log(cities, "cities")
        $(".citylist").append("<li>" + city + "</li>")
    }

})