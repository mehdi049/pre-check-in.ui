<template>
  <!-- menu horizontal -->
  <div class="container">
    <div id="h-menu" class="columns is-mobile">
      <div class="column">
        <a href="./my-booking.html">
          <img src="./_assets/images/logo.jpg" />
        </a>
      </div>
      <div class="column has-text-right">
        <div class="dropdown is-hoverable">
          <div class="dropdown-trigger">
            <button
              class="button"
              aria-haspopup="true"
              aria-controls="dropdown-lang"
            >
              <span><i class="fas fa-2x fa-globe"></i></span>
              <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-lang" role="menu">
            <div class="dropdown-content">
              <a href="#" class="dropdown-item">
                <img src="./_assets/images/en-icon.png" alt="" /> &nbsp; English
              </a>
              <a href="#" class="dropdown-item">
                <img src="./_assets/images/ge-icon.png" alt="" /> &nbsp; German
              </a>
            </div>
          </div>
        </div>

        <div class="dropdown is-hoverable">
          <div class="dropdown-trigger">
            <button
              class="button"
              aria-haspopup="true"
              aria-controls="dropdown-profile"
            >
              <span><i class="fas fa-2x fa-user"></i></span>
              <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-profile" role="menu">
            <div class="dropdown-content">
              <a href="./index.html" class="dropdown-item">
                Log out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNavbar",
};
</script>
