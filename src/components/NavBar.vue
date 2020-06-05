<template>
  <div class="fixed-top top">
    <b-navbar variant="fade" type="light">
      <b-navbar-brand route to="/" class="mb-0">
        Victor Solutions
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-button v-b-toggle.sidebar-right id="menuicon"
          ><b-icon icon="list" />&nbsp;MENU</b-button
        >
        <side-bar />
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {
    SideBar: () => import("@/components/SideBar.vue")
  }
};
</script>

<style lang="scss">
#menuicon {
  background: none;
  color: #333;
  font-size: 12px;
}

.navbar {
  background: #fff;
  box-shadow: 1px 1px 1px #333;

  .navbar-brand {
    font-family: #fff;
  }
}
</style>
