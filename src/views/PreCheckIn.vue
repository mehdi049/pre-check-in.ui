<template>
  <section>
    <b-message type="is-success" has-icon icon-size="small">
      You have successfully sent the Pre-check-in We look forward ro welcoming
      you.
    </b-message>

    <b-message type="is-danger" has-icon icon-size="small">
      Error occurred, please try again.
    </b-message>

    <!-- page title -->
    <h1 class="title is-1">Pre-Check-In</h1>
    <p>Booking Reference: 3128501486</p>
    <p>Reserved by: Steffen Diemer</p>

    <br />
    <br />

    <!-- romm info -->
    <div class="columns is-multiline box">
      <div class="column is-6">
        <b-image
          src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
          alt="A random image"
        ></b-image>
      </div>
      <div class="column is-6">
        <p class="is-size-5 has-text-weight-semibold">
          "Stoa-Helmat" Double Room
        </p>
        <p class="has-text-grey">8/2 - 8/3/2021</p>
        <br />
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
    </div>
    <br />
    <!-- guest list -->
    <div class="columns is-multiline box">
      <div class="column is-4">
        <div class="has-background-info-dark pb-5 pt-4 pl-5 pr-5">
          <p class="has-text-weight-bold has-text-white">
            <i class="fas fa-user"></i> &nbsp;Steffen Diemer
          </p>
          <p class="has-text-weight-semibold has-text-white">
            <i class="fas fa-address-card"></i> &nbsp;Adult
          </p>
          <p class="has-text-weight-semibold has-text-white">
            <i class="fas fa-calendar-alt"></i> &nbsp;8/2 - 8/3/2021
          </p>
          <p class="has-text-right">
            <b-button
              label="Edit"
              type="is-danger"
              size="is-small"
              class="has-text-weight-semibold is-rounded"
              @click="isEditGuestModalActive = true"
            />
          </p>
        </div>
      </div>
      <div class="column is-4">
        <div class="has-background-info-dark pb-5 pt-4 pl-5 pr-5">
          <p class="has-text-weight-bold has-text-white">
            <i class="fas fa-user"></i> &nbsp;Guest 1
          </p>
          <p class="has-text-weight-semibold has-text-white">
            <i class="fas fa-address-card"></i> &nbsp;Adult
          </p>
          <p class="has-text-weight-semibold has-text-white">
            <i class="fas fa-calendar-alt"></i> &nbsp;8/2 - 8/3/2021
          </p>
          <p class="has-text-right">
            <b-button
              label="Edit"
              type="is-danger"
              size="is-small"
              class="has-text-weight-semibold is-rounded"
              @click="isEditGuestModalActive = true"
            />
          </p>
        </div>
      </div>
      <div class="column is-4">
        <div class="has-background-info-dark pb-5 pt-4 pl-5 pr-5">
          <p class="has-text-weight-bold has-text-white">
            <i class="fas fa-user"></i> &nbsp;Guest 2
          </p>
          <p class="has-text-weight-semibold has-text-white">
            <i class="fas fa-address-card"></i> &nbsp;Adult
          </p>
          <p class="has-text-weight-semibold has-text-white">
            <i class="fas fa-calendar-alt"></i> &nbsp;8/2 - 8/3/2021
          </p>
          <p class="has-text-right">
            <b-button
              label="Edit"
              type="is-danger"
              size="is-small"
              class="has-text-weight-semibold is-rounded"
              @click="isEditGuestModalActive = true"
            />
          </p>
        </div>
      </div>
    </div>

    <br />

    <!-- Privacy policy -->
    <div class="columns box">
      <div class="column">
        <b-button
          label="Privacy policy"
          type="is-text"
          size="is-small"
          @click="isPrivacyModalActive = true"
        />
      </div>
      <div class="column has-text-right">
        <button type="button" class="button is-info">Save</button>
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
                  <select>
                    <option>M</option>
                    <option>Mr</option>
                  </select>
                </div>
              </div>
              <div class="column is-6">
                <b-field label="First name">
                  <b-input placeholder="First name"></b-input>
                </b-field>
              </div>
              <div class="column is-6">
                <b-field label="Last name">
                  <b-input placeholder="Last name"></b-input>
                </b-field>
              </div>
              <div class="column is-6">
                <label class="label">Birthday</label>
                <div class="control">
                  <b-field>
                    <b-datepicker
                      placeholder="Birthday"
                      icon="calendar-today"
                      :locale="locale"
                      editable
                    >
                    </b-datepicker>
                  </b-field>
                </div>
              </div>
              <div class="column is-6">
                <b-field label="E-mail">
                  <b-input placeholder="E-mail"></b-input>
                </b-field>
              </div>
              <div class="column is-6">
                <b-field label="Phone number">
                  <b-input placeholder="Phone number"></b-input>
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
                  <b-select placeholder="Language" icon="earth">
                    <option>Deutshland</option>
                    <option>Deutshland</option>
                  </b-select>
                </b-field>
              </div>
              <div class="column is-6">
                <b-field label="Address">
                  <b-input placeholder="Address"></b-input>
                </b-field>
              </div>
              <div class="column is-6">
                <b-field label="Post code">
                  <b-input placeholder="Post code"></b-input>
                </b-field>
              </div>
              <div class="column is-6">
                <b-field label="City">
                  <b-input placeholder="City"></b-input>
                </b-field>
              </div>
            </div>
          </div>
        </div>
        <footer class="modal-card-foot has-text-right">
          <b-button class="close" v-on:click="isEditGuestModalActive = false"
            >Cancel</b-button
          >
          <b-button
            type="is-info"
            class="close"
            v-on:click="isEditGuestModalActive = false"
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
            luctus venenatis lectus magna fringilla urna porttitor rhoncus. Sit
            amet est placerat in egestas erat imperdiet sed euismod. Turpis
            egestas integer eget aliquet. A pellentesque sit amet porttitor
            eget. Aenean et tortor at risus viverra adipiscing. Mattis enim ut
            tellus elementum sagittis. Vitae nunc sed velit dignissim sodales
            ut. Id aliquet lectus proin nibh nisl condimentum id venenatis.
            Suspendisse potenti nullam ac tortor vitae. Venenatis tellus in
            metus vulputate eu scelerisque. Magna ac placerat vestibulum lectus
            mauris ultrices. Neque viverra justo nec ultrices dui sapien eget
            mi.
            <br />
            Condimentum id venenatis a condimentum. Facilisis magna etiam tempor
            orci eu lobortis elementum. Nisi lacus sed viverra tellus in hac
            habitasse platea dictumst. Tincidunt vitae semper quis lectus nulla
            at. Senectus et netus et malesuada fames ac turpis egestas integer.
            Id volutpat lacus laoreet non. Nisl nisi scelerisque eu ultrices
            vitae auctor eu augue. Tempus iaculis urna id volutpat lacus.
            Commodo nulla facilisi nullam vehicula ipsum a arcu. Feugiat in ante
            metus dictum at tempor. Ipsum suspendisse ultrices gravida dictum.
            Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat
            orci. Semper auctor neque vitae tempus quam pellentesque nec.
            Accumsan sit amet nulla facilisi morbi tempus iaculis urna id.
            Malesuada fames ac turpis egestas sed tempus. Tincidunt tortor
            aliquam nulla facilisi cras fermentum odio eu. Aliquet risus feugiat
            in ante. Sem integer vitae justo eget magna fermentum. Mattis
            ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget.
            Tellus mauris a diam maecenas sed enim ut sem viverra.
            <br />
            Ipsum dolor sit amet consectetur adipiscing elit. Lobortis feugiat
            vivamus at augue eget arcu dictum. Faucibus scelerisque eleifend
            donec pretium vulputate. Porttitor rhoncus dolor purus non enim.
            Viverra vitae congue eu consequat ac felis donec et odio. Volutpat
            blandit aliquam etiam erat velit scelerisque in. Tortor at risus
            viverra adipiscing at in tellus integer feugiat. Non tellus orci ac
            auctor augue mauris. Nibh tortor id aliquet lectus proin nibh nisl.
            Risus feugiat in ante metus dictum at tempor commodo. Semper auctor
            neque vitae tempus quam pellentesque nec nam aliquam.
            <br />
            Luctus venenatis lectus magna fringilla urna porttitor rhoncus
            dolor. Quis ipsum suspendisse ultrices gravida dictum fusce.
            Tincidunt praesent semper feugiat nibh. Id aliquet risus feugiat in.
            Cras adipiscing enim eu turpis egestas. Euismod nisi porta lorem
            mollis aliquam ut. Vestibulum lorem sed risus ultricies tristique
            nulla aliquet enim. Vestibulum lectus mauris ultrices eros in cursus
            turpis massa tincidunt. Adipiscing vitae proin sagittis nisl. Nec
            sagittis aliquam malesuada bibendum arcu vitae. Eu ultrices vitae
            auctor eu augue. Suspendisse sed nisi lacus sed viverra tellus in
            hac. Turpis egestas integer eget aliquet nibh praesent tristique
            magna. Varius sit amet mattis vulputate enim nulla aliquet. Placerat
            duis ultricies lacus sed turpis tincidunt.
            <br />
            Proin sagittis nisl rhoncus mattis rhoncus. Est pellentesque elit
            ullamcorper dignissim cras tincidunt lobortis feugiat. Nunc
            scelerisque viverra mauris in aliquam. Massa enim nec dui nunc.
            Tellus mauris a diam maecenas. Cursus in hac habitasse platea
            dictumst quisque. Odio euismod lacinia at quis risus sed vulputate.
            Semper quis lectus nulla at volutpat diam ut venenatis. Scelerisque
            fermentum dui faucibus in ornare quam. Quis imperdiet massa
            tincidunt nunc pulvinar sapien. Iaculis at erat pellentesque
            adipiscing commodo elit at imperdiet dui. At urna condimentum mattis
            pellentesque id nibh tortor id aliquet. Fermentum iaculis eu non
            diam phasellus vestibulum. Turpis egestas maecenas pharetra
            convallis posuere. Arcu cursus euismod quis viverra nibh cras
            pulvinar mattis nunc. Vel orci porta non pulvinar neque laoreet
            suspendisse interdum consectetur. At augue eget arcu dictum varius
            duis at consectetur. Euismod quis viverra nibh cras.
          </p>
        </div>
        <footer class="modal-card-foot has-text-right">
          <button class="button close" @click="isPrivacyModalActive = false">
            Ok
          </button>
        </footer>
      </div>
    </b-modal>
  </section>
</template>

<script>
export default {
  name: "PreCheckIn",
  data() {
    return {
      locale: undefined, // Browser locale,
      isEditGuestModalActive: false,
      isPrivacyModalActive: false,
    };
  },
};
</script>
