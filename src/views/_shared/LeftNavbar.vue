<template>
  <!-- menu vertical -->
  <div class="column is-2-mobile is-4-tablet is-3-desktop">
    <br />
    <aside class="menu">
      <ul class="menu-list">
        <li>
          <router-link to="/my-booking" class="active"
            ><font-awesome-icon size="2x" :icon="['fas', 'suitcase']" /><span
              class="is-hidden-mobile"
              >&nbsp; My booking</span
            ></router-link
          >
        </li>
        <li>
          <router-link to="/contact"
            ><font-awesome-icon size="2x" :icon="['fas', 'map-signs']" /><span
              class="is-hidden-mobile"
              >&nbsp; Contact</span
            ></router-link
          >
        </li>
        <li>
          <router-link to="/bbq-fun"
            ><font-awesome-icon size="2x" :icon="['fas', 'burn']" /><span
              class="is-hidden-mobile"
              >&nbsp; BBQ fun</span
            ></router-link
          >
        </li>
        <li>
          <router-link to="/picnic-basket"
            ><font-awesome-icon
              size="2x"
              :icon="['fas', 'shopping-basket']"
            /><span class="is-hidden-mobile"
              >&nbsp; Picnic basket</span
            ></router-link
          >
        </li>
        <li>
          <router-link to="/dining-options"
            ><font-awesome-icon size="2x" :icon="['fas', 'utensils']" /><span
              class="is-hidden-mobile"
              >&nbsp; Dining options</span
            ></router-link
          >
        </li>
        <li>
          <router-link to="/booking-info"
            ><font-awesome-icon size="2x" :icon="['fas', 'info-circle']" /><span
              class="is-hidden-mobile"
              >&nbsp; Booking information</span
            ></router-link
          >
        </li>
        <li>
          <router-link to="/weather"
            ><font-awesome-icon size="2x" :icon="['fas', 'cloud']" /><span
              class="is-hidden-mobile"
              >&nbsp; Weather</span
            ></router-link
          >
        </li>
        <li>
          <a href="https://www.facebook.com/" target="_blank"
            ><font-awesome-icon
              size="2x"
              :icon="['fab', 'facebook-square']"
            /><span class="is-hidden-mobile">&nbsp; Facebook</span></a
          >
        </li>
        <li>
          <router-link to="/tripadvisor"
            ><font-awesome-icon size="2x" :icon="['fas', 'hotel']" /><span
              class="is-hidden-mobile"
              >&nbsp; TripAdvisor</span
            ></router-link
          >
        </li>
        <li>
          <router-link to="/holiday-check"
            ><font-awesome-icon
              size="2x"
              :icon="['fas', 'check-double']"
            /><span class="is-hidden-mobile"
              >&nbsp; Holiday check</span
            ></router-link
          >
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
import {
  faSuitcase,
  faMapSigns,
  faBurn,
  faShoppingBasket,
  faUtensils,
  faInfoCircle,
  faCloud,
  faHotel,
  faCheckDouble,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faSuitcase);
library.add(faMapSigns);
library.add(faBurn);
library.add(faShoppingBasket);
library.add(faUtensils);
library.add(faInfoCircle);
library.add(faCloud);

library.add(faFacebookSquare);
library.add(faHotel);
library.add(faCheckDouble);

export default {
  name: "LeftNavbar",
};
</script>
