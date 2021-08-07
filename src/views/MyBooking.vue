<template>
  <section>
    <!-- page title -->
    <h1 class="title is-1">Booking details</h1>
    <p>Reference: 3128501486</p>
    <p>Reserved by: Steffen Diemer</p>

    <br />
    <br />
    <!-- date info -->
    <div class="columns box is-mobile">
      <div class="column is-4">
        <p class="has-text-grey has-text-centered">Arrival</p>
        <p class="is-size-5 has-text-centered has-text-weight-semibold">
          Monday, August 2, 2021
        </p>
      </div>
      <div class="column is-4">
        <p class="has-text-centered">
          <font-awesome-icon size="3x" :icon="['fas', 'arrow-right']" />
        </p>
      </div>
      <div class="column is-4">
        <p class="has-text-grey has-text-centered">Departure</p>
        <p class="is-size-5 has-text-centered has-text-weight-semibold">
          Thursday, August 5, 2021
        </p>
      </div>
    </div>

    <br />
    <br />

    <!-- summary -->
    <div class="columns is-multiline box is-mobile">
      <div class="column is-12">
        <p class="is-size-4 has-text-weight-bold">Summary</p>
      </div>
      <div class="column is-6">
        <div class="box-gray">
          <p class="is-size-5 has-text-weight-semibold">
            Rooms in this reservation
          </p>
          <p class="has-text-grey">1x "Stoa-Helmat" Double Room</p>
        </div>
      </div>
      <div class="column is-6">
        <div class="box-gray">
          <p class="is-size-5 has-text-weight-semibold">
            People in this reservation
          </p>
          <p class="has-text-grey">2x adults</p>
        </div>
      </div>
      <div class="column is-12">
        <div class="box-gray">
          <p class="has-text-centered">
            Pre-Check-In incomplete
            <i class="fas fa-exclamation-circle has-text-danger"></i>
          </p>
        </div>
      </div>
      <div class="column is-12">
        <div class="box-gray">
          <p class="has-text-centered">
            Total cost of your stay
            <span class="is-size-5 has-text-weight-bold">148,90 €</span>
          </p>
        </div>
      </div>
      <div class="column is-12 has-text-right">
        <router-link to="/pre-check-in" class="button is-info"
          >GO TO PRE-CHECK-IN</router-link
        >
      </div>
    </div>

    <br />
    <br />

    <!-- booking details -->
    <div class="columns is-multiline box">
      <div class="column is-12">
        <p class="is-size-4 has-text-weight-bold">
          "Stoa-Heimat" Double Room
        </p>
      </div>
      <div class="column is-6">
        <b-image
          src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
          alt="A random image"
        ></b-image>
      </div>
      <div class="column is-6">
        <p><span class="has-text-weight-bold">Arrival:</span> Aug 2, 2021</p>
        <p><span class="has-text-weight-bold">Departure:</span> Aug 3, 2021</p>
        <p><span class="has-text-weight-bold">Nights:</span> 1</p>
        <p><span class="has-text-weight-bold">Adults:</span> 2</p>
        <p>
          <span class="has-text-weight-bold">Rate:</span>
          Booking.com 1-2 Nachte
        </p>
      </div>
      <div class="column is-12">
        <p class="has-text-weight-bold">Description</p>
        <p class="has-text-weight-semibold">
          16 -33 m (170 to 250 sq ft) | Sleeps up to 2 persons
        </p>
        <br />
        <p>
          The double room for 2 persons in the first floor. Facilities: double
          bed, wardrobe, desk, armchair, bathroom with shower and toilette, hair
          dryer, towel warnmer in the winter, shower gel and soap, free W-LAN,
          safe, flat screen TV, cuddly bathrobe for the hole stay.
        </p>
      </div>
      <div class="column is-12">
        <br />
        <p class="is-size-5 has-text-weight-bold">Rates</p>
        <div class="columns is-multiline is-mobile">
          <div class="column is-12">
            <p class="has-text-weight-semibold">2X Adult</p>
          </div>
          <div class="column is-7">
            <p>
              UF Booking.com 1-2 Nachte <br />
              Aug 2, 2021 - Aug 3, 2021
            </p>
          </div>
          <div class="column is-5">
            <p class="has-text-weight-bold has-text-right">144, 90 €</p>
          </div>
        </div>
      </div>
      <div class="column is-12">
        <p class="is-size-5 has-text-weight-bold">Services</p>
        <div class="columns is-mobile">
          <div class="column is-7">
            <p>2 X Ortstaxe</p>
          </div>
          <div class="column is-5">
            <p class="has-text-weight-bold has-text-right">4, 00 €</p>
          </div>
        </div>
      </div>
      <div class="column is-12">
        <div class="columns is-mobile">
          <div class="column is-7">
            <p class="is-size-5 has-text-weight-bold">
              Total room price
            </p>
          </div>
          <div class="column is-5">
            <p class="has-text-weight-bold has-text-right">148, 90 €</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faArrowRight);
export default {
  name: "MyBooking",
};
</script>
