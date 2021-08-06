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
                  <div class="control">
                    <b-input placeholder="Arrival date" type="date"></b-input>
                  </div>
                </div>
                <div class="column is-6">
                  <div class="control">
                    <b-input placeholder="Departure date" type="date"></b-input>
                  </div>
                </div>
              </div>
            </b-field>

            <div class="field">
              <div class="columns is-mobile">
                <div class="column is-6">
                  <p class="control has-icons-left">
                    <b-select placeholder="Language">
                      <option>English</option>
                      <option>German</option>
                    </b-select>
                    <span class="icon is-small is-left">
                      <font-awesome-icon :icon="['fas', 'globe']" />
                    </span>
                  </p>
                </div>
                <div class="column is-6">
                  <div class="control has-text-right">
                    <b-button type="is-info">Login</b-button>
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
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faGlobe);

export default {
  name: "Login",
};
</script>
<style scoped>
#login-container {
  height: 100%;
  position: absolute;
  width: 100%;
}
</style>
