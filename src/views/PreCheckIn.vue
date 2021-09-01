<template>
  <section>
    <TopNavbar></TopNavbar>

    <div class="container">
      <div class="columns is-mobile">
        <LeftNavbar currentActive="pre-check-in"></LeftNavbar>

        <div class="column is-9">
          <div id="main-content">
            <b-message
              type="is-success"
              v-if="isConfirmed"
              has-icon
              icon-size="small"
            >
              You have successfully sent the Pre-check-in We look forward to
              welcoming you.
            </b-message>

            <div v-else>
              <!-- page title -->
              <h1 class="title is-1">Pre-Check-In</h1>
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

              <!-- romm info -->
              <div
                v-for="room in booking.rooms"
                :key="room.id + '-package-details'"
              >
                <div class="columns is-multiline box">
                  <div class="column is-6">
                    <b-image
                      src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
                      alt="A random image"
                    ></b-image>
                  </div>
                  <div class="column is-6">
                    <p class="is-size-5 has-text-weight-semibold">
                      "{{ room.packageText }}" {{ room.roomTypeText }}
                    </p>
                    <p class="has-text-grey">
                      {{ new Date(room.arrivalDate) | date("dd MMMM") }} -
                      {{ new Date(room.departureDate) | date("dd MMMM yyyy") }}
                    </p>
                    <br />
                    <!--
                  <p class="has-text-weight-semibold">
                    16 -33 m (170 to 250 sq ft) | Sleeps up to 2 persons
                  </p>
                  <br />
                  <p>
                    The double room for 2 persons in the first floor.
                    Facilities: double bed, wardrobe, desk, armchair, bathroom
                    with shower and toilette, hair dryer, towel warnmer in the
                    winter, shower gel and soap, free W-LAN, safe, flat screen
                    TV, cuddly bathrobe for the hole stay.
                  </p>
                  --></div>
                </div>
                <br />
                <!-- guest list -->
                <div class="columns is-multiline box">
                  <div
                    class="column is-4"
                    v-for="guest in room.guests"
                    :key="guest.id + '-info'"
                  >
                    <div class="has-background-info-dark pb-5 pt-4 pl-5 pr-5">
                      <p class="has-text-weight-bold has-text-white">
                        <i class="fas fa-user"></i> &nbsp;{{
                          guest.firstName + " " + guest.lastName
                        }}
                      </p>
                      <p class="has-text-weight-semibold has-text-white">
                        <i class="fas fa-address-card"></i> &nbsp;{{
                          guest.guestTypeText
                        }}
                      </p>
                      <p class="has-text-weight-semibold has-text-white">
                        <i class="fas fa-calendar-alt"></i> &nbsp;
                        {{ new Date(room.arrivalDate) | date("dd MMMM") }} -
                        {{
                          new Date(room.departureDate) | date("dd MMMM yyyy")
                        }}
                      </p>
                      <p class="has-text-right">
                        <b-button
                          label="Edit"
                          type="is-danger"
                          size="is-small"
                          class="has-text-weight-semibold is-rounded"
                          v-on:click="openEditGuestModal(guest)"
                        />
                      </p>
                    </div>
                  </div>
                </div>

                <br />
              </div>

              <!-- Privacy policy -->
              <div class="columns box">
                <div class="column">
                  <b-button
                    label="Privacy policy"
                    type="is-text"
                    size="is-small"
                    v-on:click="isPrivacyModalActive = true"
                  />
                </div>
                <div class="column has-text-right">
                  <button
                    type="button"
                    class="button is-info"
                    v-on:click="confirmBooking"
                  >
                    Save
                  </button>
                </div>
              </div>

              <!-- edit guest modal -->
              <b-modal v-model="isEditGuestModalActive" scroll="keep">
                <div class="card">
                  <header class="modal-card-head">
                    <p class="modal-card-title">Edit guest</p>
                  </header>
                  <div class="modal-card-body">
                    <div class="field">
                      <div class="columns is-mobile is-multiline">
                        <div class="column is-12">
                          <p class="has-text-weight-semibold is-size-4">
                            Personal information
                          </p>
                        </div>
                        <div class="column is-6">
                          <label class="label">Salutation</label>
                          <div class="select">
                            <select v-model="selectedGuestToUpdate.salutation">
                              <option value="Mister">M</option>
                              <option value="Misses">Mr</option>
                            </select>
                          </div>
                        </div>
                        <div class="column is-6">
                          <b-field label="First name">
                            <b-input
                              placeholder="First name"
                              v-model="selectedGuestToUpdate.firstName"
                              type="text"
                              required
                            ></b-input>
                          </b-field>
                        </div>
                        <div class="column is-6">
                          <b-field label="Last name">
                            <b-input
                              placeholder="Last name"
                              v-model="selectedGuestToUpdate.lastName"
                              type="text"
                              required
                            ></b-input>
                          </b-field>
                        </div>
                        <div class="column is-6">
                          <label class="label">Birthday</label>
                          <div class="control">
                            <b-field>
                              <b-datepicker
                                v-model="selectedGuestToUpdate.birthday"
                                placeholder="Birthday"
                                icon="calendar-today"
                                :locale="locale"
                                editable
                                required
                              >
                              </b-datepicker>
                            </b-field>
                          </div>
                        </div>
                        <div class="column is-6">
                          <b-field label="E-mail">
                            <b-input
                              placeholder="E-mail"
                              v-model="selectedGuestToUpdate.email"
                              type="email"
                              required
                            ></b-input>
                          </b-field>
                        </div>
                        <div class="column is-6">
                          <b-field label="Phone number">
                            <b-input
                              placeholder="Phone number"
                              v-model="selectedGuestToUpdate.phone"
                              type="text"
                              required
                            ></b-input>
                          </b-field>
                        </div>
                        <div class="column is-12">
                          <hr />
                          <p class="has-text-weight-semibold is-size-4">
                            Address
                          </p>
                        </div>
                        <div class="column is-6">
                          <label class="label">Country</label>
                          <b-field>
                            <b-select
                              placeholder="Language"
                              icon="earth"
                              v-model="selectedGuestToUpdate.country"
                              required
                            >
                              <option>Deutschland</option>
                              <option>Deutschland</option>
                            </b-select>
                          </b-field>
                        </div>
                        <div class="column is-6">
                          <b-field label="Street">
                            <b-input
                              placeholder="Street"
                              v-model="selectedGuestToUpdate.street"
                              type="text"
                              required
                            ></b-input>
                          </b-field>
                        </div>
                        <div class="column is-6">
                          <b-field label="Street number">
                            <b-input
                              placeholder="StreetNumber"
                              v-model="selectedGuestToUpdate.streetNumber"
                              type="text"
                              required
                            ></b-input>
                          </b-field>
                        </div>
                        <div class="column is-6">
                          <b-field label="Post code">
                            <b-input
                              placeholder="Post code"
                              v-model="selectedGuestToUpdate.zip"
                              type="text"
                              required
                            ></b-input>
                          </b-field>
                        </div>
                        <div class="column is-6">
                          <b-field label="City">
                            <b-input
                              placeholder="City"
                              v-model="selectedGuestToUpdate.city"
                              type="text"
                              required
                            ></b-input>
                          </b-field>
                        </div>
                      </div>
                    </div>
                  </div>
                  <footer class="modal-card-foot has-text-right">
                    <b-button
                      class="close"
                      v-on:click="isEditGuestModalActive = false"
                      >Cancel</b-button
                    >
                    <b-button
                      type="is-info"
                      class="close"
                      v-on:click="saveEditGuest()"
                      >Save</b-button
                    >
                  </footer>
                </div>
              </b-modal>

              <!-- policy modal -->
              <b-modal v-model="isPrivacyModalActive" scroll="keep">
                <div class="card">
                  <header class="modal-card-head">
                    <p class="modal-card-title">Privacy policy</p>
                  </header>
                  <div class="modal-card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Amet luctus venenatis lectus magna fringilla urna
                      porttitor rhoncus. Sit amet est placerat in egestas erat
                      imperdiet sed euismod. Turpis egestas integer eget
                      aliquet. A pellentesque sit amet porttitor eget. Aenean et
                      tortor at risus viverra adipiscing. Mattis enim ut tellus
                      elementum sagittis. Vitae nunc sed velit dignissim sodales
                      ut. Id aliquet lectus proin nibh nisl condimentum id
                      venenatis. Suspendisse potenti nullam ac tortor vitae.
                      Venenatis tellus in metus vulputate eu scelerisque. Magna
                      ac placerat vestibulum lectus mauris ultrices. Neque
                      viverra justo nec ultrices dui sapien eget mi.
                    </p>
                  </div>
                  <footer class="modal-card-foot has-text-right">
                    <button
                      class="button close"
                      v-on:click="isPrivacyModalActive = false"
                    >
                      Ok
                    </button>
                  </footer>
                </div>
              </b-modal>
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
import * as functions from "./_sharedFunctions/functions.js";

export default {
  name: "PreCheckIn",
  data() {
    let _booking = JSON.parse(localStorage.getItem("booking"));
    return {
      locale: undefined, // Browser locale,
      isConfirmed: _booking.bookingStatusId !== 1,
      isEditGuestModalActive: false,
      isPrivacyModalActive: false,
      selectedGuestToUpdate: {},
      booking: {},
    };
  },
  mounted() {
    let _booking = localStorage.getItem("booking");
    if (_booking !== null) this.booking = JSON.parse(_booking);
    else this.$router.push("/");
  },
  methods: {
    openEditGuestModal(guest) {
      this.selectedGuestToUpdate = guest;
      this.selectedGuestToUpdate.birthday =
        guest.birthday != null ? new Date(guest.birthday) : null;
      this.isEditGuestModalActive = true;
    },
    saveEditGuest() {
      if (!this.validateForm()) {
        let _selectedGuestToUpdate = { ...this.selectedGuestToUpdate };
        _selectedGuestToUpdate.birthday = functions.ignoreTimezone(
          _selectedGuestToUpdate.birthday
        );

        this.axios
          .post(
            process.env.VUE_APP_PRECHECKIN_API_ENDPOINT + "/CheckIn/guest",
            _selectedGuestToUpdate
          )
          .then((response) => {
            if (response.data.status === 200) {
              functions.refreshBooking();
              this.isEditGuestModalActive = false;
              this.success("Guest updated successfully.");
            } else {
              this.danger(response.data.message);
            }
          })
          .catch(() => {
            this.danger("Error occurred, please try again.");
          });
      } else this.danger("Please fill all the required fields.");
    },

    confirmBooking() {
      let _selectedGuestToUpdate = { ...this.selectedGuestToUpdate };
      _selectedGuestToUpdate.birthday = functions.ignoreTimezone(
        _selectedGuestToUpdate.birthday
      );

      this.axios
        .post(
          process.env.VUE_APP_PRECHECKIN_API_ENDPOINT +
            "/CheckIn/confirm/" +
            this.booking.bookingReference
        )
        .then((response) => {
          if (response.data.status === 200) {
            functions.refreshBooking();
            this.isConfirmed = true;
          } else {
            this.danger(response.data.message);
          }
        })
        .catch(() => {
          this.danger("Error occurred, please try again.");
        });
    },

    validateForm: function() {
      let error = false;
      const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

      if (
        this.selectedGuestToUpdate.salutation === "" ||
        this.selectedGuestToUpdate.email === "" ||
        !reg.test(this.selectedGuestToUpdate.email.replace(/\+/gi, ".")) ||
        this.selectedGuestToUpdate.firstName === null ||
        this.selectedGuestToUpdate.firstName === "" ||
        this.selectedGuestToUpdate.lastName === null ||
        this.selectedGuestToUpdate.lastName === "" ||
        this.selectedGuestToUpdate.birthday === null ||
        this.selectedGuestToUpdate.birthday === "" ||
        this.selectedGuestToUpdate.phone === null ||
        this.selectedGuestToUpdate.phone === "" ||
        this.selectedGuestToUpdate.country === null ||
        this.selectedGuestToUpdate.country === "" ||
        this.selectedGuestToUpdate.street === null ||
        this.selectedGuestToUpdate.street === "" ||
        this.selectedGuestToUpdate.streetNumber === null ||
        this.selectedGuestToUpdate.streetNumber === "" ||
        this.selectedGuestToUpdate.zip === null ||
        this.selectedGuestToUpdate.zip === "" ||
        this.selectedGuestToUpdate.city === null ||
        this.selectedGuestToUpdate.city === ""
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

    success(msg) {
      this.$buefy.toast.open({
        duration: 5000,
        message: msg,
        position: "is-top",
        type: "is-success",
      });
    },
  },
  components: { TopNavbar, LeftNavbar, Footer },
};
</script>
