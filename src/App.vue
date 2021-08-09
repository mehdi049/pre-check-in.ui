<template>
  <div id="app">
    <div v-if="loggedIn === false">
      <router-view />
    </div>

    <div v-else>
      <TopNavbar></TopNavbar>

      <div class="container">
        <div class="columns is-mobile">
          <LeftNavbar></LeftNavbar>

          <div class="column is-9">
            <div id="main-content">
              <router-view />
            </div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import TopNavbar from "./views/_shared/TopNavbar.vue";
import LeftNavbar from "./views/_shared/LeftNavbar.vue";
import Footer from "./views/_shared/Footer.vue";

let booking = localStorage.getItem("bookingRef");
export default {
  name: "App",
  data() {
    return {
      loggedIn: booking != null,
    };
  },
  components: { TopNavbar, LeftNavbar, Footer },
};
</script>
