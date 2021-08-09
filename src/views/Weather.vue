<template>
  <section>
    <TopNavbar></TopNavbar>

    <div class="container">
      <div class="columns is-mobile">
        <LeftNavbar currentActive="weather"></LeftNavbar>

        <div class="column is-9">
          <div id="main-content">
            <!-- page title -->
            <h1 class="title is-1">Weather</h1>
            <p class="is-size4 has-text-weight-semibold">Leogang</p>
            <p>Monday 12:13 PM</p>

            <br />
            <br />

            <!-- weather info -->
            <div class="columns is-multiline box">
              <div class="column is-6">
                <p>
                  <font-awesome-icon :icon="['fas', 'wind']" />&nbsp; 2.24 Km/h
                </p>
                <br />
                <p>
                  <font-awesome-icon
                    :icon="['fas', 'cloud-showers-heavy']"
                  />&nbsp; 48%
                </p>
                <br />
                <p>
                  <font-awesome-icon :icon="['fas', 'sun']" />&nbsp; 05:40 AM
                </p>
                <br />
                <p>
                  <font-awesome-icon :icon="['fas', 'cloud-sun']" />&nbsp; 09:06
                  PM
                </p>
                <br />
              </div>
              <div class="column is-6 has-text-centered">
                <figure class="image">
                  <img
                    src="https://image.shutterstock.com/image-vector/weather-forecast-icon-vector-seasons-260nw-1613761456.jpg"
                    alt=""
                    style="max-width: 150px"
                    class="is-inline"
                  />
                </figure>
                <p class="is-size-1 has-text-weight-bold">22 °</p>
                <hr />
                <p class="has-text-weight-semibold">15° - 25°</p>
                <p>Clear sky</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  </section>
</template>

<script>
import TopNavbar from "./_shared/TopNavbar.vue";
import LeftNavbar from "./_shared/LeftNavbar.vue";
import Footer from "./_shared/Footer.vue";

import {
  faWind,
  faCloudShowersHeavy,
  faSun,
  faCloudSun,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faWind);
library.add(faCloudShowersHeavy);
library.add(faSun);
library.add(faCloudSun);

export default {
  name: "Weather",
  components: { TopNavbar, LeftNavbar, Footer },
};
</script>
