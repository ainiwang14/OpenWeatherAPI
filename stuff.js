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
    const btn = $(".btn")
    
    function grabInputCity () {
        btn.click(() => {
            event.preventDefault();
            const inputCity = $("#inputCity");
            console.log(inputCity)
            })
    }

    grabInputCity()
    
    //function to use input from submission to process through google maps

    // function getGeolocation() {

    // }

    //function to save to local storage

    //function to retrieve from local storage

})