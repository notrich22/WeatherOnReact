import axios from 'axios';
async function getWeather(city) {
    const API_key = "1195410e4ae2d05ce024d37aa18407de";
    const url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+API_key;
    console.log(url);
    const response = await axios.get(url).catch(async(error) =>{
        console.log(error.toJSON());
        return undefined;
    })
    return response;
}
export async function  WeatherBtnPressed(){
    let city = document.getElementById("city");
    if(document.getElementById("chosenCity").value === ""){
        alert("Enter city");
        return;
    }
    let state = document.getElementById("state");
    let temperature = document.getElementById("temperature");
    let feelsLike = document.getElementById("feelsLike");
    let wind = document.getElementById("wind");
    let humidity = document.getElementById("humidity");
    let image = document.getElementById("image");
    
    let weather = await getWeather(document.getElementById("chosenCity").value);

    if(weather === undefined){
        alert("Something went wrong!");
        return;
    }
    console.log(weather);
    image.src = "https://api.openweathermap.org/img/w/" + weather.data.weather[0].icon + ".png";
    city.innerText = document.getElementById("chosenCity").value;
    state.innerText = weather.data.weather[0].description;
    temperature.innerHTML = "Temperature: " + Math.round(weather.data.main.temp - 273.15) + "°C";
    feelsLike.innerText = "Feels like: " + Math.round(weather.data.main.temp - 273.15) + "°C";
    wind.innerText = "Wind: " + Math.round(weather.data.wind.speed) + " м/с";
    humidity.innerText = "Humidity: " + weather.data.main.humidity + " %";

}
window.addEventListener("load", WeatherBtnPressed);
export default WeatherBtnPressed;