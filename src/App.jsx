import React from 'react';
import weatherHandler from "./weatherHandler";
import './Weather.css';
class Weather extends React.Component{
  render(){
    return <div classNameName="App">
      <section className="contentPanel">
        <div className="gridContainer">
            <div className="weatherForm">
                <h2>Enter <span>city</span> for the weather forecast</h2>
                <div id="WeatherContainer">
                    <div className="formControl">
                        <input id ="chosenCity" type="text" defaultValue="Moscow" autoComplete="off"/>
                    </div>
                    <input id ="submitBtn" className="forecastBtn" onClick={weatherHandler} type="button" defaultValue="See forecast"/>
                </div>
            </div>
    
            <div className="forecastResult">
                <ul>
                    <li id="city"></li>
                    <hr/>
                    <li id="state"></li>
                    <li><img id="image" alt=""/></li>
                    <li id="temperature"></li>
                    <li id="feelsLike"></li>
                    <li id="wind"></li>
                    <li id="humidity"></li>
                </ul>
            </div>
        </div>
    </section>
    </div>
  }
}

export default Weather;
