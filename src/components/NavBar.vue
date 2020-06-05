<template>
  <div class="fixed-top top">
  <b-navbar variant="fade" type="light">
    <b-navbar-brand route to="/" class="mb-0">
      Victor Solutions
    </b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-button v-b-toggle.sidebar-right id="menuicon"
        ><b-icon icon="list" /></b-button
      >
      <sidebar />
    </b-navbar-nav>
  </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {
    Sidebar: () => import('@/components/Sidebar.vue')
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
    font-family: #fff;
  }
}
</style>
