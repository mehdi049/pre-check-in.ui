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
              <b-input placeholder="Booking reference"></b-input>
            </b-field>

            <b-field label="Email">
              <b-input placeholder="Email" type="email"></b-input>
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
    };
  },
  methods: {
    authenticate: function() {
      localStorage.setItem("user", "user");
      this.$router.push("/my-booking");
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
</style>
