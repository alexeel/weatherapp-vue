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
              @click.prevent="getWeather(city, index)"
              class="city-list__link"
              :class="[
                city.isActive ? 'active' : '',
                city.isCorrect ? '' : 'uncorrect',
              ]"
              >{{ city.cityTitle }}</a
            >
          </li>
        </ul>
      </aside>
      <main class="main">
        <div class="weather-wrap">
          <div class="weather__title">
            <h1 v-if="visible">{{ weather.cityName }}</h1>
            <span v-else class="h2"
              >Город "{{ weather.cityName }}" не найден. Попробуйте повторить
              попытку</span
            >
          </div>
          <div v-if="visible" class="weather__info">
            <div class="weather-today">
              <div class="weather-today__wrap">
                <div class="weather-today__title">
                  <span>Сегодня</span>
                </div>
                <div class="weather-today__info">
                  <span class="weather-today__degree"
                    >{{ weather.temperature[1] }}°C</span
                  >
                  <span class="weather-today__icon">
                    <img
                      width="64"
                      height="64"
                      :src="weather.icon[1]"
                      :alt="weather.description[1]"
                  /></span>
                </div>
                <span class="weather-today__conditions">{{
                  weather.description[1]
                }}</span>
              </div>
              <div class="weather-map">
                <GmapMap
                  ref="mapRef"
                  :center="centerMap"
                  :zoom="8"
                  :options="{
                    mapTypeControl: false,
                    streetViewControl: false,
                    zoomControl: true,
                    panControl: true,
                    scaleControl: false,
                    fullscreenControl: false,
                    styles: [
                      {
                        featureType: 'administrative',
                        elementType: 'geometry',
                        stylers: [
                          {
                            visibility: 'off',
                          },
                        ],
                      },
                      {
                        featureType: 'administrative.land_parcel',
                        stylers: [
                          {
                            visibility: 'off',
                          },
                        ],
                      },
                      {
                        featureType: 'administrative.neighborhood',
                        stylers: [
                          {
                            visibility: 'off',
                          },
                        ],
                      },
                      {
                        featureType: 'landscape.man_made',
                        elementType: 'geometry.fill',
                        stylers: [
                          {
                            color: '#96a3a9',
                          },
                        ],
                      },
                      {
                        featureType: 'landscape.natural',
                        elementType: 'geometry.fill',
                        stylers: [
                          {
                            color: '#cfd8dc',
                          },
                        ],
                      },
                      {
                        featureType: 'poi',
                        stylers: [
                          {
                            visibility: 'off',
                          },
                        ],
                      },
                      {
                        featureType: 'poi',
                        elementType: 'labels.text',
                        stylers: [
                          {
                            visibility: 'off',
                          },
                        ],
                      },
                      {
                        featureType: 'road',
                        elementType: 'labels',
                        stylers: [
                          {
                            visibility: 'off',
                          },
                        ],
                      },
                      {
                        featureType: 'road',
                        elementType: 'labels.icon',
                        stylers: [
                          {
                            visibility: 'off',
                          },
                        ],
                      },
                      {
                        featureType: 'transit',
                        stylers: [
                          {
                            visibility: 'off',
                          },
                        ],
                      },
                      {
                        featureType: 'water',
                        elementType: 'labels.text',
                        stylers: [
                          {
                            visibility: 'off',
                          },
                        ],
                      },
                    ],
                  }"
                  map-type-id="terrain"
                  style="width: 100%; height: 500px"
                >
                </GmapMap>
              </div>
            </div>
            <div class="weather__subinfo">
              <div class="weather-day">
                <div class="weather-day__title">
                  <span>Вчера</span>
                </div>
                <div class="weather-day__info">
                  <div class="weather-day__subinfo">
                    <span class="weather-day__degree"
                      >{{ weather.temperature[0] }}°C</span
                    >
                    <span class="weather-day__icon">
                      <img
                        width="40"
                        height="40"
                        :src="weather.icon[0]"
                        :alt="weather.description[0]"
                    /></span>
                  </div>
                  <span class="weather-day__conditions">{{
                    weather.description[0]
                  }}</span>
                </div>
              </div>

              <div class="weather-day">
                <div class="weather-day__title">
                  <span>Завтра</span>
                </div>
                <div class="weather-day__info">
                  <div class="weather-day__subinfo">
                    <span class="weather-day__degree"
                      >{{ weather.temperature[2] }}°C</span
                    >
                    <span class="weather-day__icon">
                      <img
                        width="40"
                        height="40"
                        :src="weather.icon[2]"
                        :alt="weather.description[2]"
                    /></span>
                  </div>
                  <span class="weather-day__conditions">{{
                    weather.description[2]
                  }}</span>
                </div>
              </div>
              <div class="weather-day">
                <div class="weather-day__title">
                  <span>Послезавтра</span>
                </div>
                <div class="weather-day__info">
                  <div class="weather-day__subinfo">
                    <span class="weather-day__degree"
                      >{{ weather.temperature[3] }}°C</span
                    >
                    <span class="weather-day__icon">
                      <img
                        width="40"
                        height="40"
                        :src="weather.icon[3]"
                        :alt="weather.description[3]"
                    /></span>
                  </div>
                  <span class="weather-day__conditions">{{
                    weather.description[3]
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="footer">
          <div class="footer-wrap">
            <p>Disined by Alex Troshkin</p>
          </div>
        </footer>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      centerMap: { lat: 55.75, lng: 37.62 },
      visible: true,
      citySearch: "",
      cities: [
        {
          cityTitle: "Москва",
          isActive: true,
          isCorrect: true,
        },
        {
          cityTitle: "Нью-Йорк",
          isActive: false,
          isCorrect: true,
        },
        {
          cityTitle: "Рио-де-Жанейро",
          isActive: false,
          isCorrect: true,
        },
        {
          cityTitle: "Бирлен",
          isActive: false,
          isCorrect: true,
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
    setCenter(currentLat, currentLng) {
      this.centerMap = { lat: currentLat, lng: currentLng };
    },
    getWeather: async function (city, cityIndex) {
      const cityTitle = city.cityTitle;
      const key = "2f496ab65f5a480192f101539211304";
      const yesterday = new Date(Date.now() - 126400000)
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
        this.cities.isActive = false;
        this.cities.forEach((element, index) => {
          if (index === cityIndex) {
            element.isActive = true;
          } else {
            element.isActive = false;
          }
        });
        const currentLat = Number(dataCurrent.location.lat);
        const currentLng = Number(dataCurrent.location.lon);
        this.setCenter(currentLat, currentLng);
      } catch (error) {
        this.visible = false;
        this.weather.cityName = cityTitle;
        this.cities.forEach((element, index) => {
          element.isActive = false;
          if (index === cityIndex) {
            element.isCorrect = false;
          }
        });
      }
    },
  },
};
</script>

<style lang='scss'>
// Roboto

@font-face {
  font-family: "Roboto";
  src: url("fonts/Roboto/Roboto-MediumItalic.eot");
  src: local("Roboto Medium Italic"), local("Roboto-MediumItalic"),
    url("fonts/Roboto/Roboto-MediumItalic.eot?#iefix")
      format("embedded-opentype"),
    url("fonts/Roboto/Roboto-MediumItalic.woff") format("woff"),
    url("fonts/Roboto/Roboto-MediumItalic.ttf") format("truetype");
  font-weight: 500;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Roboto";
  src: url("fonts/Roboto/Roboto-Italic.eot");
  src: local("Roboto Italic"), local("Roboto-Italic"),
    url("fonts/Roboto/Roboto-Italic.eot?#iefix") format("embedded-opentype"),
    url("fonts/Roboto/Roboto-Italic.woff") format("woff"),
    url("fonts/Roboto/Roboto-Italic.ttf") format("truetype");
  font-weight: normal;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Roboto";
  src: url("fonts/Roboto/Roboto-Bold.eot");
  src: local("Roboto Bold"), local("Roboto-Bold"),
    url("fonts/Roboto/Roboto-Bold.eot?#iefix") format("embedded-opentype"),
    url("fonts/Roboto/Roboto-Bold.woff") format("woff"),
    url("fonts/Roboto/Roboto-Bold.ttf") format("truetype");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Roboto";
  src: url("fonts/Roboto/Roboto-Regular.eot");
  src: local("Roboto"), local("Roboto-Regular"),
    url("fonts/Roboto/Roboto-Regular.eot?#iefix") format("embedded-opentype"),
    url("fonts/Roboto/Roboto-Regular.woff") format("woff"),
    url("fonts/Roboto/Roboto-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Roboto";
  src: url("fonts/Roboto/Roboto-Medium.eot");
  src: local("Roboto Medium"), local("Roboto-Medium"),
    url("fonts/Roboto/Roboto-Medium.eot?#iefix") format("embedded-opentype"),
    url("fonts/Roboto/Roboto-Medium.woff") format("woff"),
    url("fonts/Roboto/Roboto-Medium.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Roboto";
  src: url("fonts/Roboto/Roboto-BoldItalic.eot");
  src: local("Roboto Bold Italic"), local("Roboto-BoldItalic"),
    url("fonts/Roboto/Roboto-BoldItalic.eot?#iefix") format("embedded-opentype"),
    url("fonts/Roboto/Roboto-BoldItalic.woff") format("woff"),
    url("fonts/Roboto/Roboto-BoldItalic.ttf") format("truetype");
  font-weight: bold;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Roboto";
  src: url("fonts/Roboto/Roboto-ThinItalic.eot");
  src: local("Roboto Thin Italic"), local("Roboto-ThinItalic"),
    url("fonts/Roboto/Roboto-ThinItalic.eot?#iefix") format("embedded-opentype"),
    url("fonts/Roboto/Roboto-ThinItalic.woff") format("woff"),
    url("fonts/Roboto/Roboto-ThinItalic.ttf") format("truetype");
  font-weight: 100;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Roboto";
  src: url("fonts/Roboto/Roboto-Black.eot");
  src: local("Roboto Black"), local("Roboto-Black"),
    url("fonts/Roboto/Roboto-Black.eot?#iefix") format("embedded-opentype"),
    url("fonts/Roboto/Roboto-Black.woff") format("woff"),
    url("fonts/Roboto/Roboto-Black.ttf") format("truetype");
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Roboto";
  src: url("fonts/Roboto/Roboto-Light.eot");
  src: local("Roboto Light"), local("Roboto-Light"),
    url("fonts/Roboto/Roboto-Light.eot?#iefix") format("embedded-opentype"),
    url("fonts/Roboto/Roboto-Light.woff") format("woff"),
    url("fonts/Roboto/Roboto-Light.ttf") format("truetype");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Roboto";
  src: url("fonts/Roboto/Roboto-LightItalic.eot");
  src: local("Roboto Light Italic"), local("Roboto-LightItalic"),
    url("fonts/Roboto/Roboto-LightItalic.eot?#iefix")
      format("embedded-opentype"),
    url("fonts/Roboto/Roboto-LightItalic.woff") format("woff"),
    url("fonts/Roboto/Roboto-LightItalic.ttf") format("truetype");
  font-weight: 300;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Roboto";
  src: url("fonts/Roboto/Roboto-BlackItalic.eot");
  src: local("Roboto Black Italic"), local("Roboto-BlackItalic"),
    url("fonts/Roboto/Roboto-BlackItalic.eot?#iefix")
      format("embedded-opentype"),
    url("fonts/Roboto/Roboto-BlackItalic.woff") format("woff"),
    url("fonts/Roboto/Roboto-BlackItalic.ttf") format("truetype");
  font-weight: 900;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Roboto";
  src: url("fonts/Roboto/Roboto-Thin.eot");
  src: local("Roboto Thin"), local("Roboto-Thin"),
    url("fonts/Roboto/Roboto-Thin.eot?#iefix") format("embedded-opentype"),
    url("fonts/Roboto/Roboto-Thin.woff") format("woff"),
    url("fonts/Roboto/Roboto-Thin.ttf") format("truetype");
  font-weight: 100;
  font-style: normal;
  font-display: swap;
}

// Jost

@font-face {
  font-family: "Jost";
  src: local("Jost Semi"), local("Jost-Semi"),
    url("fonts/Jost/Jost_semi.woff2") format("woff2"),
    url("fonts/Jost/Jost_semi.woff") format("woff"),
    url("fonts/Jost/Jost_semi.ttf") format("truetype");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Jost";
  src: local("Jost Hairline Italic"), local("Jost-HairlineItalic"),
    url("fonts/Jost/Jost_hairlineitalic.woff2") format("woff2"),
    url("fonts/Jost/Jost_hairlineitalic.woff") format("woff"),
    url("fonts/Jost/Jost_hairlineitalic.ttf") format("truetype");
  font-weight: 100;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: "Jost";
  src: local("Jost Medium"), local("Jost-Medium"),
    url("fonts/Jost/Jost_medium.woff2") format("woff2"),
    url("fonts/Jost/Jost_medium.woff") format("woff"),
    url("fonts/Jost/Jost_medium.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Jost";
  src: local("Jost Heavy"), local("Jost-Heavy"),
    url("fonts/Jost/Jost_heavy.woff2") format("woff2"),
    url("fonts/Jost/Jost_heavy.woff") format("woff"),
    url("fonts/Jost/Jost_heavy.ttf") format("truetype");
  font-weight: 800;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Jost";
  src: local("Jost Semi Italic"), local("Jost-SemiItalic"),
    url("fonts/Jost/Jost_semiitalic.woff2") format("woff2"),
    url("fonts/Jost/Jost_semiitalic.woff") format("woff"),
    url("fonts/Jost/Jost_semiitalic.ttf") format("truetype");
  font-weight: 600;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: "Jost";
  src: local("Jost Thin Italic"), local("Jost-ThinItalic"),
    url("fonts/Jost/Jost_thinitalic.woff2") format("woff2"),
    url("fonts/Jost/Jost_thinitalic.woff") format("woff"),
    url("fonts/Jost/Jost_thinitalic.ttf") format("truetype");
  font-weight: 200;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: "Jost";
  src: local("Jost Bold"), local("Jost-Bold"),
    url("fonts/Jost/Jost_bold.woff2") format("woff2"),
    url("fonts/Jost/Jost_bold.woff") format("woff"),
    url("fonts/Jost/Jost_bold.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Jost";
  src: local("Jost Book"), local("Jost-Book"),
    url("fonts/Jost/Jost_book.woff2") format("woff2"),
    url("fonts/Jost/Jost_book.woff") format("woff"),
    url("fonts/Jost/Jost_book.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Jost";
  src: local("Jost Thin"), local("Jost-Thin"),
    url("fonts/Jost/Jost_thin.woff2") format("woff2"),
    url("fonts/Jost/Jost_thin.woff") format("woff"),
    url("fonts/Jost/Jost_thin.ttf") format("truetype");
  font-weight: 200;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Jost";
  src: local("Jost Light Italic"), local("Jost-LightItalic"),
    url("fonts/Jost/Jost_lightitalic.woff2") format("woff2"),
    url("fonts/Jost/Jost_lightitalic.woff") format("woff"),
    url("fonts/Jost/Jost_lightitalic.ttf") format("truetype");
  font-weight: 300;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: "Jost";
  src: local("Jost Black Italic"), local("Jost-BlackItalic"),
    url("fonts/Jost/Jost_blackitalic.woff2") format("woff2"),
    url("fonts/Jost/Jost_blackitalic.woff") format("woff"),
    url("fonts/Jost/Jost_blackitalic.ttf") format("truetype");
  font-weight: 900;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: "Jost";
  src: local("Jost Book Italic"), local("Jost-BookItalic"),
    url("fonts/Jost/Jost_bookitalic.woff2") format("woff2"),
    url("fonts/Jost/Jost_bookitalic.woff") format("woff"),
    url("fonts/Jost/Jost_bookitalic.ttf") format("truetype");
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: "Jost";
  src: local("Jost Heavy Italic"), local("Jost-HeavyItalic"),
    url("fonts/Jost/Jost_heavyitalic.woff2") format("woff2"),
    url("fonts/Jost/Jost_heavyitalic.woff") format("woff"),
    url("fonts/Jost/Jost_heavyitalic.ttf") format("truetype");
  font-weight: 800;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: "Jost";
  src: local("Jost Bold Italic"), local("Jost-BoldItalic"),
    url("fonts/Jost/Jost_bolditalic.woff2") format("woff2"),
    url("fonts/Jost/Jost_bolditalic.woff") format("woff"),
    url("fonts/Jost/Jost_bolditalic.ttf") format("truetype");
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: "Jost";
  src: local("Jost Hairline"), local("Jost-Hairline"),
    url("fonts/Jost/Jost_hairline.woff2") format("woff2"),
    url("fonts/Jost/Jost_hairline.woff") format("woff"),
    url("fonts/Jost/Jost_hairline.ttf") format("truetype");
  font-weight: 100;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Jost";
  src: local("Jost Black"), local("Jost-Black"),
    url("fonts/Jost/Jost_black.woff2") format("woff2"),
    url("fonts/Jost/Jost_black.woff") format("woff"),
    url("fonts/Jost/Jost_black.ttf") format("truetype");
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Jost";
  src: local("Jost Medium Italic"), local("Jost-MediumItalic"),
    url("fonts/Jost/Jost_mediumitalic.woff2") format("woff2"),
    url("fonts/Jost/Jost_mediumitalic.woff") format("woff"),
    url("fonts/Jost/Jost_mediumitalic.ttf") format("truetype");
  font-weight: 500;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: "Jost";
  src: local("Jost Light"), local("Jost-Light"),
    url("fonts/Jost/Jost_light.woff2") format("woff2"),
    url("fonts/Jost/Jost_light.woff") format("woff"),
    url("fonts/Jost/Jost_light.ttf") format("truetype");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

* {
  box-sizing: border-box;
}
body {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  background-color: #cfd8dc;
}
h1 {
  font-family: "Jost", sans-serif;
  font-size: 60px;
  font-weight: 700;
  margin: 0;
}
h2,
.h2 {
  font-family: "Jost", sans-serif;
  font-size: 40px;
  font-weight: 700;
  margin: 0;
}
.container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.sidebar {
  font-family: "Jost", sans-serif;
  width: 100%;
  max-width: 20%;
  border-right: 5px solid #455a64;
  border-left: 5px solid #95e7ed;
  background-color: #2f3844;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  padding: 7vh 0;
}
.main {
  flex: 1;
  min-height: 100vh;
}
.city-list {
  position: sticky;
  top: 0;
  list-style: none;
  margin: 0;
  &__link {
    position: relative;
    display: block;
    padding: 0.7em 1em;
    font-size: 20px;
    color: #fff;
    text-decoration: none;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 0;
      height: 100%;
      background-color: #95e7ed;
      mix-blend-mode: difference;
      transition: 1s width ease-in-out;
      pointer-events: none;
      z-index: 9;
    }
    &:hover {
      background-color: #293039;
    }
    &.active {
      pointer-events: none;
      &::before {
        width: 100%;
        transition-timing-function: cubic-bezier(0.65, 0.39, 0.99, 0.06);
      }
    }
    &.uncorrect {
      pointer-events: none;
      &::before {
        width: 100%;
        background-color: #cc4949;
        transition-timing-function: cubic-bezier(0.65, 0.39, 0.99, 0.06);
      }
    }
  }
}
.weather {
  &-wrap {
    padding: 40px 30px;
  }
  &__title {
    text-align: center;
    margin-bottom: 50px;
  }
  &__info {
    display: flex;
    align-items: flex-start;
  }
  &__subinfo {
    padding: 10px;
    flex: 2;
  }
  &-day {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.3em;
    padding-bottom: 1.3em;
    border-radius: 15px;
    border-bottom: 1px solid #eee;
    &:last-child {
      margin-bottom: 0;
    }
    &__subinfo {
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;
    }
    &__title {
      font-size: 18px;
      font-weight: 500;
    }
    &__degree {
      font-family: "Jost", sans-serif;
      font-weight: 500;
      font-size: 36px;
      line-height: 1.6;
    }
    &__conditions {
      display: block;
      text-align: right;
    }
    &__icon {
      img {
        display: block;
      }
    }
  }
  &-today {
    flex: 3;
    text-align: center;
    &__wrap {
      margin-bottom: 30px;
    }
    &__title {
      font-size: 25px;
      margin-bottom: 0.5em;
    }
    &__info {
      margin-bottom: 20px;
    }
    &__degree {
      font-family: "Jost", sans-serif;
      font-size: 60px;
    }
  }
  &-map {
    position: relative;
    overflow: hidden;
    border-radius: 30px;
    &::before {
      content: "";
      position: absolute;
      top: -15px;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      background: url("assets/pin.png") no-repeat center center / auto;
      z-index: 9;
    }
  }
}
.vue-map-container {
  max-height: 50vh;
}
.footer {
  text-align: right;
  &-wrap {
    padding: 20px 30px;
  }
}
@media screen and (max-width: 1440px) {
  h1 {
    font-size: 40px;
  }
  h2,
  .h2 {
    font-size: 30px;
  }
  .weather {
    &-today__degree {
      font-size: 40px;
    }
    &-day__degree {
      font-size: 30px;
    }
  }
}
@media screen and (max-width: 1280px) {
  .weather {
    &__info {
      flex-wrap: wrap;
    }
    &-today,
    &__subinfo {
      width: 100%;
      flex: auto;
    }
  }
}
@media screen and (max-width: 849px) {
  .city-list__link {
    font-size: 18px;
  }
}
@media screen and (max-width: 549px) {
  h1 {
    font-size: 30px;
  }
  h2,
  .h2 {
    font-size: 24px;
  }
  .sidebar {
    padding: 30px 0;
    max-width: 100%;
  }
  .weather {
    &-wrap {
      padding: 30px 15px;
    }
    &-day {
      flex-direction: column;
      align-items: flex-start;
      &__info {
        margin-left: auto;
      }
    }
  }
}
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .city-list {
    &__link {
      z-index: 9;
      &::before {
        z-index: -1;
      }
    }
  }
}
</style>
