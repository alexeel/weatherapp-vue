<template>
  <div id="app">
    <div class="container">
      <aside class="sidebar">
        <ul class="city-list">
          <li
            v-for="(city, index) in cities"
            :key="index"
            class="city-list__item"
          >
            <a
              href="#"
              @click.prevent="getWeather(city.cityTitle)"
              class="city-list__link"
              >{{ city.cityTitle }}</a
            >
          </li>
        </ul>
      </aside>
      <main class="main">
        <div class="weather-wrap">
          <div class="weather__title mb">
            <h1 v-if="visible">{{ weather.cityName }}</h1>
            <span v-else class="h2"
              >Город "{{ weather.cityName }}" не найден. Попробуйте повторить
              попытку</span
            >
          </div>
          <div v-if="visible" class="weather__info">
            <div class="weather-day weather-day--yesterday">
              <span class="weather-day__degree">{{
                weather.temperature[0]
              }}</span>
              <span class="weather-day__icon">
                <img
                  width="40"
                  height="40"
                  :src="weather.icon[0]"
                  :alt="weather.description[0]"
              /></span>
              <span class="weather-day__conditions">{{
                weather.description[0]
              }}</span>
            </div>
            <div class="weather-day weather-day--today">
              <span class="weather-day__degree">{{
                weather.temperature[1]
              }}</span>
              <span class="weather-day__icon">
                <img
                  width="40"
                  height="40"
                  :src="weather.icon[1]"
                  :alt="weather.description[1]"
              /></span>
              <span class="weather-day__conditions">{{
                weather.description[1]
              }}</span>
            </div>
            <div class="weather-day weather-day--tomorrow">
              <span class="weather-day__degree">{{
                weather.temperature[2]
              }}</span>
              <span class="weather-day__icon">
                <img
                  width="40"
                  height="40"
                  :src="weather.icon[2]"
                  :alt="weather.description[2]"
              /></span>
              <span class="weather-day__conditions">{{
                weather.description[2]
              }}</span>
            </div>
            <div class="weather-day weather-day--aftertomorrow">
              <span class="weather-day__degree">{{
                weather.temperature[3]
              }}</span>
              <span class="weather-day__icon">
                <img
                  width="40"
                  height="40"
                  :src="weather.icon[3]"
                  :alt="weather.description[3]"
              /></span>
              <span class="weather-day__conditions">{{
                weather.description[3]
              }}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
      citySearch: "",
      cities: [
        {
          cityTitle: "Москва",
        },
        {
          cityTitle: "Нью-Йорк",
        },
        {
          cityTitle: "Рио-де-Жанейро",
        },
        {
          cityTitle: "Бирлен",
        },
      ],
      weather: {
        cityName: "Москва",
        temperature: [0, 0, 0, 0],
        description: [
          "Не получено",
          "Не получено",
          "Не получено",
          "Не получено",
        ],
        icon: [
          "//cdn.weatherapi.com/weather/64x64/day/113.png",
          "//cdn.weatherapi.com/weather/64x64/day/113.png",
          "//cdn.weatherapi.com/weather/64x64/day/113.png",
          "//cdn.weatherapi.com/weather/64x64/day/113.png",
        ],
      },
    };
  },
  methods: {
    getWeather: async function (cityTitle) {
      const key = "2f496ab65f5a480192f101539211304";
      const yesterday = new Date(Date.now() - 96400000)
        .toLocaleDateString()
        .split(".")
        .reverse()
        .join("-");
      const lastday = new Date(Date.now() + 172800000)
        .toLocaleDateString()
        .split(".")
        .reverse()
        .join("-");
      const historyURL = `http://api.weatherapi.com/v1/history.json?q=${cityTitle}&key=${key}&lang=ru&dt=${yesterday}&end_dt=${lastday}`;
      const currentURL = `http://api.weatherapi.com/v1/current.json?q=${cityTitle}&key=${key}&lang=ru`;
      //fetch weather
      try {
        const responseHistory = await fetch(historyURL);
        const responseCurrent = await fetch(currentURL);
        const dataHistory = await responseHistory.json();
        const dataCurrent = await responseCurrent.json();
        console.log(dataCurrent);
        this.weather.cityName = dataHistory.location.name;
        for (let i = 0; i < 4; i++) {
          if (i === 1) {
            continue;
          }
          this.weather.temperature[i] = Math.round(
            dataHistory.forecast.forecastday[i].day.avgtemp_c
          );
          this.weather.description[i] =
            dataHistory.forecast.forecastday[i].day.condition.text;
          this.weather.icon[i] =
            dataHistory.forecast.forecastday[i].day.condition.icon;
        }
        this.weather.temperature[1] = Math.round(dataCurrent.current.temp_c);
        this.weather.description[1] = dataCurrent.current.condition.text;
        this.weather.icon[1] = dataCurrent.current.condition.icon;
        this.visible = true;
      } catch (error) {
        this.visible = false;
        this.weather.cityName = cityTitle;
      }
    },
  },
};
</script>

<style lang='scss'>
* {
  box-sizing: border-box;
}
h1 {
  font-size: 60px;
  font-weight: 700;
  margin: 0 0 0.5em;
}
h2,
.h2 {
  font-size: 40px;
  font-weight: 700;
  margin: 0 0 0.5em;
}
.container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.aside {
  width: 100%;
  max-width: 450px;
}
.main {
  flex: 1;
}
.city-list {
  position: sticky;
  top: 0;
  list-style: none;
  margin: 0;
  padding: 30px;
  &__item {
  }
  &__link {
    display: block;
    padding: 5px 10px;
  }
}
.weather {
  &-wrap {
    padding: 40px 30px;
    background-color: grey;
    min-height: 100vh;
  }
  &__title {
    text-align: center;
  }
}
</style>
