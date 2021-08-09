<template>
  <section>
    <TopNavbar></TopNavbar>

    <div class="container">
      <div class="columns is-mobile">
        <LeftNavbar currentActive="contact"></LeftNavbar>

        <div class="column is-9">
          <div id="main-content">
            <!-- page title -->
            <h1 class="title is-1">Contact and arrival</h1>
            <p class="is-size4 has-text-weight-semibold">
              Hotel Garni Das Stoaberg
            </p>
            <p>Das Stoaberg</p>
            <p>Fam. Gruber</p>

            <br />
            <br />

            <!-- contact info -->
            <div class="columns is-multiline box">
              <div class="column is-6">
                <p class="is-size-5 has-text-weight-bold">Address</p>
                <br />
                <p>Hotel Garni Das Stoaberg</p>
                <p>Hirneriet 6</p>
                <p>5771 Leogang, Ostrreich</p>
              </div>
              <div class="column is-6">
                <p class="is-size-5 has-text-weight-bold">Contact</p>
                <br />
                <p>
                  <font-awesome-icon :icon="['fas', 'envelope']" />
                  &nbsp;
                  <a href="#">hotel@example.com</a>
                </p>
                <p>
                  <font-awesome-icon :icon="['fas', 'phone']" />&nbsp; +43 7434
                  8836
                </p>
                <p>
                  <font-awesome-icon
                    :icon="['fas', 'phone-square-alt']"
                  />&nbsp; +43 7434 8836 66
                </p>
                <p>
                  <font-awesome-icon :icon="['fas', 'home']" />&nbsp;
                  <a href="#">www.hotel.com</a>
                </p>
              </div>
              <div class="column is-12">
                <br />
                <p class="is-size-5 has-text-weight-bold">
                  Location and arrival
                </p>
                <p>This way you can find us using Google Maps</p>
                <br />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d309297.9718520039!2d11.902946584177458!3d52.72514720595526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aed77e060038a7%3A0x20dbaf5c2e267534!2sPension%20Zur%20Alten%20Post!5e0!3m2!1sen!2stn!4v1628039735482!5m2!1sen!2stn"
                  height="450"
                  style="border: 0; width: 100%"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
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
  faEnvelope,
  faPhone,
  faPhoneSquareAlt,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faEnvelope);
library.add(faPhone);
library.add(faPhoneSquareAlt);
library.add(faHome);
export default {
  name: "Contact",
  components: { TopNavbar, LeftNavbar, Footer },
};
</script>
