import "./styles.css";

export default function App() {
  function WeatherBtnPressed() {}
  return (
    <div className="App">
      <section class="contentPanel">
        <div class="gridContainer">
          <div class="weatherForm">
            <h2>
              Введите <span>город</span> чтобы получить прогноз погоды
            </h2>
            <div id="WeatherContainer">
              <div class="formControl">
                <input
                  id="chosenCity"
                  type="text"
                  value="Москва"
                  autocomplete="off"
                />
              </div>
              <input
                id="submitBtn"
                class="forecastBtn"
                onClick="WeatherBtnPressed()"
                type="submit"
                value="Показать погоду"
              />
            </div>
          </div>

          <div class="forecastResult">
            <ul>
              <li id="city"></li>
              <hr />
              <li id="state"></li>
              <li>
                <img id="image" />
              </li>
              <li id="temperature"></li>
              <li id="feelsLike"></li>
              <li id="wind"></li>
              <li id="humidity"></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
