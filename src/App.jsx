import React from 'react';
import axios from 'axios';
import './Weather.css';
class Weather extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            city: props.city!=null?props.city:null,
            state: null,
            image: null,
            temperature: null,
            feelsLike: null,
            wind: null,
            humidity: null
        }
        this.updateState = this.updateState.bind(this);
        this.getWeather = this.getWeather.bind(this);
    }
    async getWeather(){
        const API_key = "1195410e4ae2d05ce024d37aa18407de";
        const url = "http://api.openweathermap.org/data/2.5/weather?q="+this.state.city+"&appid="+API_key;
        //console.log(url);
        const response = await axios.get(url).catch(async(error) =>{
                console.log(error.toJSON());
                return null;})
        return response;
    };
    async updateState(){
        //console.log("UpdateState!");
        if(this.state.city === ""){
            alert("Enter city");
            return;
        }
        let weather = await this.getWeather();
    
        if(weather === null){
            alert("Something went wrong!");
            return;
        }
        console.log(weather);
        this.setState(() => {
            return{
                image: "https://api.openweathermap.org/img/w/" + weather.data.weather[0].icon + ".png",
                state:  weather.data.weather[0].description,
                temperature: Math.round(weather.data.main.temp - 273.15),
                feelsLike: Math.round(weather.data.main.temp - 273.15),
                wind: Math.round(weather.data.wind.speed),
                humidity: weather.data.main.humidity
            }
        });
    }
    render(){
        return <div className="App">
        <section className="contentPanel">
            <div className="gridContainer">
                <div className="weatherForm">
                    <h2>Enter <span>city</span> for the weather forecast</h2>
                    <div id="WeatherContainer">
                        <div className="formControl">
                            <input id ="chosenCity" type="text" onChange={(e)=>this.setState({city: e.target.value})} value={this.state.city}/>
                        </div>
                        <input id ="submitBtn" className="forecastBtn" onClick={this.updateState} type="button" defaultValue="See forecast"/>
                    </div>
                </div>
                {this.state.state != null&&
                    <div className="forecastResult">
                        <ul>
                            <li>{this.state.city}</li>
                            <hr/>
                            <li>{this.state.state}</li>
                            <li><img src= {this.state.image} alt=""/></li>
                            <li>Temperature: {this.state.temperature}  °C</li>
                            <li>Feels like: {this.state.feelsLike} °C</li>
                            <li>Wind: {this.state.wind} m/s</li>
                            <li>Humidity: {this.state.humidity}%</li>
                        </ul>
                    </div>
                }
            </div>
        </section>
        </div>
        }
    }
export default Weather;
