<template>
  <section>
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
          {{ new Date(booking.rooms[0].arrivalDate) | date("dd MMMM yyyy") }}
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
          {{ new Date(booking.rooms[0].departureDate) | date("dd MMMM yyyy") }}
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
          <p class="has-text-grey" v-for="room in booking.rooms" :key="room.id">
            "{{ room.packageText }}" {{ room.roomTypeText }}
          </p>
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
            :key="room.id + 'ad'"
          >
            {{
              room.guests.filter(
                (x) => x.guestTypeText.toLowerCase() === "adult"
              ).length
            }}x Adult(s)
          </p>
          <p class="has-text-grey" v-for="room in booking.rooms" :key="room.id">
            {{
              room.guests.filter(
                (x) => x.guestTypeText.toLowerCase() !== "adult"
              ).length
            }}x Minor(s)
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
  data() {
    return {
      booking: {},
    };
  },
  mounted() {
    let _bookingRef = localStorage.getItem("bookingRef");
    this.axios
      .get("https://localhost:44386/api/CheckIn/booking/" + _bookingRef)
      .then((response) => {
        if (response.data.status === 200) {
          let _booking = { ...this.booking };

          _booking.bookingReference = response.data.body.bookingReference;
          _booking.reservedBy =
            response.data.body.rooms[0].guests[0].firstName +
            " " +
            response.data.body.rooms[0].guests[0].lastName;

          let _bookingAdds = [];
          response.data.body.bookingAdds.map((x) => {
            _bookingAdds.push({
              id: x.id,
              bookingAddAmount: x.bookingAddAmount,
              bookingAddSingle: x.bookingAddSingle,
              bookingAddText: x.bookingAddText,
              bookingAddTotal: x.bookingAddTotal,
            });
          });
          _booking.bookingAdds = _bookingAdds;

          let _rooms = [];
          response.data.body.rooms.map((x) => {
            let _guests = [];
            x.guests.map((g) => {
              _guests.push({
                id: g.id,
                birthday: g.birthday,
                city: g.city,
                company: g.company,
                country: g.country,
                email: g.email,
                firstName: g.firstName,
                lastName: g.lastName,
                guestComment: g.guestComment,
                guestNumber: g.guestNumber,
                guestTypeText: g.guestTypeText,
                passport: g.passport,
                phone: g.phone,
                salutation: g.salutation,
                street: g.street,
                streetNumber: g.streetNumber,
                title: g.title,
                zip: g.zip,
              });
            });

            let _rates = [];
            x.rates.map((r) => {
              _rates.push({
                id: r.id,
                rateAmount: r.rateAmount,
                rateFrom: r.rateFrom,
                rateTo: r.rateTo,
                rateSingle: r.rateSingle,
                rateText: r.rateText,
                rateTotal: r.rateTotal,
                roomId: r.roomId,
              });
            });

            let _adds = [];
            x.roomAdds.map((a) => {
              _adds.push({
                id: a.id,
                roomAddAmount: a.roomAddAmount,
                roomAddSingle: a.roomAddSingle,
                roomAddText: a.roomAddText,
                roomAddTotal: a.roomAddTotal,
                roomId: a.roomId,
              });
            });

            _rooms.push({
              id: x.id,
              arrivalDate: x.arrivalDate,
              arrivalTime: x.arrivalTime,
              departureDate: x.departureDate,
              packageText: x.packageText,
              roomComment: x.roomComment,
              roomNumber: x.roomNumber,
              roomTypeText: x.roomTypeText,
              guests: _guests,
              rates: _rates,
              roomAdds: _adds,
            });
          });

          _booking.rooms = _rooms;

          this.booking = _booking;
          localStorage.setItem("booking", JSON.stringify(response.data.body));
          localStorage.setItem("bookingUpdated", JSON.stringify(_booking));
        } else {
          this.danger(response.data.message);
        }
      })
      .catch(() => {
        this.danger("Error occurred, please try again.");
      });
  },
};
</script>
