<template>
  <div class="fixed-top top">
  <b-navbar toggleable="lg" variant="fade" type="light">
    <b-navbar-brand route to="/" class="mb-0">
      <img src="@/assets/photos/logo.png" height="30" alt="Vic Solutions">
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Home <span class="sr-only">(current)</span></b-nav-item>
          <b-nav-item href="#">Lessons <span class="sr-only"></span></b-nav-item>
          <b-nav-item href="#">Teachers <span class="sr-only"></span></b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav>
          <b-nav-item href="#">Login <span class="sr-only"></span></b-nav-item>
          <b-button>Register</b-button>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {
    
  }
}
</script>

<style lang="scss">
#menuicon {
  background: none;
  border: 1px solid rgb(221, 221, 221);
  color: rgb(139, 139, 139);
  font-size: 15px;
}

.navbar {
  background: #fff;
  border-bottom: 1px solid rgb(218, 217, 217);

  .navbar-brand {
    font-family: 'Righteous';
    color: #445b66;
  }
}
</style>
