<template>
  <section>
    <TopNavbar></TopNavbar>

    <div class="container">
      <div class="columns is-mobile">
        <LeftNavbar currentActive="booking-info"></LeftNavbar>

        <div class="column is-9">
          <div id="main-content">
            <!-- page title -->
            <h1 class="title is-1">Booking information</h1>

            <br />
            <br />

            <!-- iframe -->
            <div class="columns is-multiline box">
              <div class="column is-12"></div>
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
export default {
  name: "BookingInfo",
  components: { TopNavbar, LeftNavbar, Footer },
};
</script>
