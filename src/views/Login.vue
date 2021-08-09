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
                placeholder="Booking reference"
                v-model="signInModel.bookingReference"
              ></b-input>
            </b-field>

            <b-field label="Email">
              <b-input
                placeholder="Email"
                type="email"
                v-model="signInModel.email"
              ></b-input>
            </b-field>

            <b-field label="Booking date">
              <div class="columns is-mobile">
                <div class="column is-6">
                  <b-field>
                    <b-datepicker
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
                      <option>English</option>
                      <option>German</option>
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
      let _signIn = { ...this.signInModel };
      _signIn.arrivalDate = this.ignoreTimezone(_signIn.arrivalDate);
      _signIn.departureDate = this.ignoreTimezone(_signIn.departureDate);
      this.axios
        .post("https://localhost:44386/api/CheckIn/signin", _signIn)
        .then((response) => {
          if (response.data.status === 200) {
            localStorage.setItem(
              "bookingRef",
              response.data.body.bookingReference
            );
            this.$router.push("/my-booking");
          } else {
            this.danger(response.data.message);
          }
        })
        .catch(() => {
          this.danger("Error occurred, please try again.");
        });
    },

    danger(error) {
      this.$buefy.toast.open({
        duration: 5000,
        message: error,
        position: "is-top",
        type: "is-danger",
      });
    },

    ignoreTimezone(date) {
      if (date !== null) {
        date = new Date(date);
        return new Date(
          date.getTime() - date.getTimezoneOffset() * 60000
        ).toISOString();
      }
      return null;
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
