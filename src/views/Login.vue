<template>
  <div id="login-container">
    <div class="content-center bg-gray">
      <div class="container">
        <div class="columns is-mobile is-centered">
          <div
            class="
              column
              is-10-mobile is-6-tablet is-6-desktop is-5-widescreen is-4-fullhd
              box
            "
          >
            <b-field label="Booking reference">
              <b-input
                type="text"
                required="true"
                placeholder="Booking reference"
                v-model="signInModel.bookingReference"
              ></b-input>
            </b-field>

            <b-field label="Email">
              <b-input
                placeholder="Email"
                required="true"
                type="email"
                v-model="signInModel.email"
              ></b-input>
            </b-field>

            <b-field label="Booking date">
              <div class="columns is-mobile">
                <div class="column is-6">
                  <b-field>
                    <b-datepicker
                      required="true"
                      placeholder="Arrival date"
                      icon="calendar-today"
                      :locale="locale"
                      editable
                      v-model="signInModel.arrivalDate"
                    >
                    </b-datepicker>
                  </b-field>
                </div>
                <div class="column is-6">
                  <b-field>
                    <b-datepicker
                      required="true"
                      placeholder="Departure date"
                      icon="calendar-today"
                      :locale="locale"
                      editable
                      v-model="signInModel.departureDate"
                    >
                    </b-datepicker>
                  </b-field>
                </div>
              </div>
            </b-field>

            <div class="field">
              <div class="columns is-mobile">
                <div class="column is-6">
                  <b-field>
                    <b-select placeholder="Language" icon="earth">
                      <option value="en">English</option>
                      <option value="ge">German</option>
                    </b-select>
                  </b-field>
                </div>
                <div class="column is-6">
                  <div class="control has-text-right">
                    <b-button type="is-info" v-on:click="authenticate"
                      >Login</b-button
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as functions from "./_sharedFunctions/functions.js";

export default {
  name: "Login",
  data() {
    return {
      locale: undefined, // Browser locale,
      signInModel: {
        bookingReference:
          this.$route.query.ref !== undefined &&
          this.$route.query.ref.length > 0
            ? this.$route.query.ref
            : "202107-003-1",
        email: "mehdi.marouani.049@gmail.com",
        arrivalDate: new Date("2021-07-28"),
        departureDate: new Date("2021-08-01"),
      },
    };
  },
  methods: {
    authenticate: function() {
      if (!this.validateForm()) {
        let _signIn = { ...this.signInModel };
        _signIn.arrivalDate = functions.ignoreTimezone(_signIn.arrivalDate);
        _signIn.departureDate = functions.ignoreTimezone(_signIn.departureDate);
        this.axios
          .post("https://localhost:44386/api/CheckIn/signin", _signIn)
          .then((response) => {
            if (response.data.status === 200) {
              let _booking = functions.setBooking(response.data.body);
              localStorage.setItem(
                "booking_original",
                JSON.stringify(response.data.body)
              );
              localStorage.setItem("booking", JSON.stringify(_booking));
              this.$router.push("/my-booking");
            } else {
              this.danger(response.data.message);
            }
          })
          .catch(() => {
            this.danger("Error occurred, please try again.");
          });
      } else this.danger("Please fill all the required fields.");
    },

    validateForm: function() {
      let error = false;
      const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

      if (
        this.signInModel.bookingReference === "" ||
        this.signInModel.email === "" ||
        !reg.test(this.signInModel.email.replace(/\+/gi, ".")) ||
        this.signInModel.arrivalDate === null ||
        this.signInModel.departureDate === null
      )
        error = true;

      return error;
    },

    danger(msg) {
      this.$buefy.toast.open({
        duration: 5000,
        message: msg,
        position: "is-top",
        type: "is-danger",
      });
    },
  },
};
</script>
<style scoped>
#login-container {
  height: 100%;
  position: absolute;
  width: 100%;
}
.field .columns .column {
  padding-left: 0px;
  padding-right: 5px;
  margin-right: 5px;
}
</style>
