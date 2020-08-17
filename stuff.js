$(document).ready(function () {
    //name const

    //function to grab weather api
    // function getWeatherData() {
    //     let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=927924e4c73455c7286d71a6b1b45a4c`
        
    //     $.ajax({
    //         url,
    //         method: "GET"
    //     }).then(response => {
    //         console.log(response, "weatherData")
    //     })
    // }

    // getWeatherData()

    //fuction to grab uv index -- just kidding the openweather api has uv

    //function w/ for loop to make 5 divs and append weather in forecast

    //grab input from submission box
    // const btn = $(".btn")
    
    // function grabInputCity () {
    //     btn.click(() => {
    //         event.preventDefault();
    //         const inputCity = $("#inputCity");
    //         console.log(inputCity)
    //         })
    //      return inputCity
    // }

    // grabInputCity()
    
    //function to use input from submission to geocode
    function cityToGeolocation() {
        let url = `https://api.opencagedata.com/geocode/v1/json?q=${inputCity}&key=6d0e711d72d74daeb2b0bfd2a5cdfdba`

        $.ajax({
            url,
            method: "GET"
        }).then(response => {
                    console.log(response, "geoLocation")
                })
    }

    cityToGeolocation()

    // function getGeolocation() {

    // }

    //function to save to local storage

    //function to retrieve from local storage

})