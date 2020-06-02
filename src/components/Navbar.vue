<template>
  <div class="fixed-top top">
    <b-navbar toggleable="lg" type="dark" variant="secondary">
      <b-navbar-brand href="#">ESL Learning Center</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <router-link to="/" :class="$route.path == '/' ? 'nav-link active' : 'nav-link'">Home</router-link>
          <router-link to="/" :class="$route.path == '/freedomwall' ? 'nav-link active' : 'nav-link'">About</router-link>
          <router-link to="/" :class="$route.path == '/about' ? 'nav-link active' : 'nav-link'">Register</router-link>
          <router-link to="/" :class="$route.path == '/about' ? 'nav-link active' : 'nav-link'">Login</router-link>
          <!-- <router-link to="/" :class="$route.path == '/freedomwall' ? 'nav-link active' : 'nav-link'">Services</router-link>
          <router-link to="/" :class="$route.path == '/about' ? 'nav-link active' : 'nav-link'">Resources</router-link>
          <router-link to="/" :class="$route.path == '/about' ? 'nav-link active' : 'nav-link'">FAQ</router-link>
          <router-link to="/" :class="$route.path == '/about' ? 'nav-link active' : 'nav-link'">Contact Me</router-link> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>

</style>