<template>
  <section>
    <TopNavbar></TopNavbar>

    <div class="container">
      <div class="columns is-mobile">
        <LeftNavbar currentActive="my-booking"></LeftNavbar>

        <div class="column is-9">
          <div id="main-content">
            <!-- page title -->
            <h1 class="title is-1">Booking details</h1>
            <p>
              <span class="has-text-weight-semibold">Reference:</span>
              {{ booking.bookingReference }}
            </p>
            <p>
              <span class="has-text-weight-semibold">Reserved by:</span>
              {{ booking.reservedBy }}
            </p>

            <br />
            <br />
            <!-- date info -->
            <div class="columns box is-mobile">
              <div class="column is-4">
                <p class="has-text-grey has-text-centered">Arrival</p>
                <p class="is-size-5 has-text-centered has-text-weight-semibold">
                  {{
                    new Date(booking.rooms[0].arrivalDate)
                      | date("dd MMMM yyyy")
                  }}
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
                  {{
                    new Date(booking.rooms[0].departureDate)
                      | date("dd MMMM yyyy")
                  }}
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
                  <ul>
                    <li
                      class="has-text-grey disc-list"
                      v-for="room in booking.rooms"
                      :key="room.id"
                    >
                      "{{ room.packageText }}" {{ room.roomTypeText }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="column is-6">
                <div class="box-gray">
                  <p class="is-size-5 has-text-weight-semibold">
                    People in this reservation
                  </p>
                  <p
                    class="has-text-grey"
                    v-for="room in booking.rooms"
                    :key="room.id"
                  >
                    <span
                      v-if="
                        room.guests.filter(
                          (x) => x.guestTypeText.toLowerCase() === 'adult'
                        ).length > 0
                      "
                    >
                      {{
                        room.guests.filter(
                          (x) => x.guestTypeText.toLowerCase() === "adult"
                        ).length
                      }}x Adult(s)
                    </span>
                  </p>
                  <p
                    class="has-text-grey"
                    v-for="room in booking.rooms"
                    :key="room.id"
                  >
                    <span
                      v-if="
                        room.guests.filter(
                          (x) => x.guestTypeText.toLowerCase() !== 'adult'
                        ).length > 0
                      "
                    >
                      {{
                        room.guests.filter(
                          (x) => x.guestTypeText.toLowerCase() !== "adult"
                        ).length
                      }}x Minor(s)
                    </span>
                  </p>
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
                    <span class="is-size-5 has-text-weight-bold"
                      >{{ booking.totalCost.toFixed(2) }} €</span
                    >
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
            <div class="box">
              <div
                class="columns is-multiline"
                v-for="room in booking.rooms"
                :key="room.id"
              >
                <div class="column is-12">
                  <p class="is-size-4 has-text-weight-bold">
                    "{{ room.packageText }}" {{ room.roomTypeText }}
                  </p>
                </div>
                <div class="column is-6">
                  <b-image
                    src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
                    alt="hotel image"
                  ></b-image>
                </div>
                <div class="column is-6">
                  <p>
                    <span class="has-text-weight-bold">Arrival:</span>
                    {{ new Date(room.arrivalDate) | date("dd MMMM yyyy") }}
                  </p>
                  <p>
                    <span class="has-text-weight-bold">Departure:</span>
                    {{ new Date(room.departureDate) | date("dd MMMM yyyy") }}
                  </p>
                  <p><span class="has-text-weight-bold">Nights:</span> 1</p>
                  <p
                    v-if="
                      room.guests.filter(
                        (x) => x.guestTypeText.toLowerCase() === 'adult'
                      ).length > 0
                    "
                  >
                    <span class="has-text-weight-bold">Adult(s):</span>
                    {{
                      room.guests.filter(
                        (x) => x.guestTypeText.toLowerCase() === "adult"
                      ).length
                    }}
                  </p>
                  <p
                    v-if="
                      room.guests.filter(
                        (x) => x.guestTypeText.toLowerCase() !== 'adult'
                      ).length > 0
                    "
                  >
                    <span class="has-text-weight-bold">Minor(s):</span>
                    {{
                      room.guests.filter(
                        (x) => x.guestTypeText.toLowerCase() !== "adult"
                      ).length
                    }}
                  </p>
                  <p class="has-text-weight-bold">
                    Rate(s):
                  </p>
                  <ul>
                    <li
                      v-for="rate in room.rates"
                      :key="rate.id"
                      class="disc-list"
                    >
                      {{ rate.rateText }}:
                      {{ new Date(rate.rateFrom) | date("dd MMMM yyyy") }}
                      <font-awesome-icon :icon="['fas', 'arrow-right']" />
                      {{ new Date(rate.rateTo) | date("dd MMMM yyyy") }}
                    </li>
                  </ul>
                </div>
                <!--
        <div class="column is-12">
          <p class="has-text-weight-bold">Description</p>
          <p class="has-text-weight-semibold">
             16 -33 m (170 to 250 sq ft) | Sleeps up to 2 persons 
          </p>
          <br />
          <p>
              The double room for 2 persons in the first floor. Facilities: double
            bed, wardrobe, desk, armchair, bathroom with shower and toilette,
            hair dryer, towel warnmer in the winter, shower gel and soap, free
            W-LAN, safe, flat screen TV, cuddly bathrobe for the hole stay. 
          </p>
        </div>
        -->

                <div class="columns is-multiline">
                  <div class="column is-12">
                    <br />
                    <p class="is-size-5 has-text-weight-bold">Rate(s)</p>

                    <p
                      class="has-text-weight-semibold"
                      v-if="
                        room.guests.filter(
                          (x) => x.guestTypeText.toLowerCase() === 'adult'
                        ).length > 0
                      "
                    >
                      {{
                        room.guests.filter(
                          (x) => x.guestTypeText.toLowerCase() === "adult"
                        ).length
                      }}x Adult(s)
                    </p>
                    <p
                      class="has-text-weight-semibold"
                      v-if="
                        room.guests.filter(
                          (x) => x.guestTypeText.toLowerCase() !== 'adult'
                        ).length > 0
                      "
                    >
                      {{
                        room.guests.filter(
                          (x) => x.guestTypeText.toLowerCase() !== "adult"
                        ).length
                      }}x Minor(s)
                    </p>
                    <br />
                    <div v-for="rate in room.rates" :key="rate.id">
                      <div class="columns is-multiline is-mobile">
                        <div class="column is-7">
                          <p>
                            {{ rate.rateText }} <br />
                            {{ new Date(rate.rateFrom) | date("dd MMMM yyyy") }}
                            <font-awesome-icon :icon="['fas', 'arrow-right']" />
                            {{ new Date(rate.rateTo) | date("dd MMMM yyyy") }}
                          </p>
                        </div>
                        <div class="column is-5">
                          <p class="has-text-weight-bold has-text-right">
                            {{ rate.rateTotal.toFixed(2) }} €
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="column is-12">
                    <p class="is-size-5 has-text-weight-bold">Services</p>
                    <div v-for="roomAdd in room.roomAdds" :key="roomAdd.id">
                      <div class="columns is-mobile">
                        <div class="column is-7">
                          <p>
                            {{ roomAdd.roomAddAmount }}x
                            {{ roomAdd.roomAddText }}
                          </p>
                        </div>
                        <div class="column is-5">
                          <p class="has-text-weight-bold has-text-right">
                            {{ roomAdd.roomAddTotal.toFixed(2) }} €
                          </p>
                        </div>
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
                        <p class="has-text-weight-bold has-text-right">
                          {{ room.totalRoomPrice.toFixed(2) }} €
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr />

              <p class="is-size-5 has-text-weight-bold">Booking extra</p>
              <div
                class="columns is-multiline"
                v-for="bookingAdd in booking.bookingAdds"
                :key="bookingAdd.id"
              >
                <div class="column is-7">
                  <p>
                    {{ bookingAdd.bookingAddAmount }}x
                    {{ bookingAdd.bookingAddText }}
                  </p>
                </div>
                <div class="column is-5 has-text-weight-bold has-text-right">
                  {{ bookingAdd.bookingAddTotal.toFixed(2) }} €
                </div>
              </div>

              <hr />

              <div class="columns">
                <div class="column is-7 is-size-3 has-text-weight-bold">
                  Total price
                </div>
                <div
                  class="column is-5 has-text-weight-bold has-text-right is-size-3"
                >
                  {{ booking.totalCost.toFixed(2) }} €
                </div>
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

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faArrowRight);

export default {
  name: "MyBooking",
  data() {
    return {
      booking: {},
    };
  },
  mounted() {
    let _booking = localStorage.getItem("booking");
    if (_booking !== null) this.booking = JSON.parse(_booking);
    else this.$router.push("/");
  },
  components: { TopNavbar, LeftNavbar, Footer },
};
</script>
