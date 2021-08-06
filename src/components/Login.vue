<template>
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
          <div class="field">
            <label class="label">Booking reference</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Booking reference"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input class="input" type="email" placeholder="Email" />
            </div>
          </div>
          <div class="field">
            <label class="label">Booking date</label>
            <div class="columns is-mobile">
              <div class="column is-6">
                <div class="control">
                  <input type="date" placeholder="Arrival date" />
                </div>
              </div>
              <div class="column is-6">
                <div class="control">
                  <input type="date" placeholder="departure date" />
                </div>
              </div>
            </div>
          </div>
          <div class="field">
            <div class="columns is-mobile">
              <div class="column is-6">
                <p class="control has-icons-left">
                  <span class="select">
                    <select>
                      <option selected>English</option>
                      <option>German</option>
                    </select>
                  </span>

                  <span class="icon is-small is-left">
                    <font-awesome-icon :icon="['fas', 'globe']" />
                  </span>
                </p>
              </div>
              <div class="column is-6">
                <div class="control has-text-right">
                  <a href="my-booking.html" class="button is-info">Login</a>
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
};
</script>
