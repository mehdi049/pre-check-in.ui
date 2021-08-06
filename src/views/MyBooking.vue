<template>
  <div id="main-content">
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
          <i class="fas fa-3x fa-arrow-right"></i>
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
    <div class="columns is-multiline box ">
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
        <a href="pre-check-in.html" class="button is-info"
          >GO TO PRE-CHECK-IN</a
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
        <figure class="image">
          <img src="_assets/images/1407953244000-177513283.jpg" alt="" />
        </figure>
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
  </div>
</template>

<script>
export default {
  name: "MyBooking",
};
</script>
