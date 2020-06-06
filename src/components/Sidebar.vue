<template>
  <div>
    <b-sidebar id="sidebar-right" title="Menu" right shadow backdrop backdrop-variant="transparent">
      <b-list-group>
        <b-list-group-item style="border-radius: none;" :class="$route.path === '/' ? 'active' : ''" to="/">
          <b-icon icon="house"></b-icon> Home
        </b-list-group-item>
        <b-list-group-item :class="$route.path === '/about' ? 'active' : ''" to="/about">
          <b-icon icon="person-check"></b-icon> About
        </b-list-group-item>
        <b-list-group-item :class="$route.path === '/lessons' ? 'active' : ''" to="/lessons">
          <b-icon icon="receipt"></b-icon> Lessons
        </b-list-group-item>
        <b-list-group-item :class="$route.path === '/teachers' ? 'active' : ''" to="/teachers">
          <b-icon icon="people"></b-icon> Teachers
        </b-list-group-item>
        <b-list-group-item :class="$route.path === '/contacts' ? 'active' : ''" to="/contacts">
          <b-icon icon="file-richtext"></b-icon> Contacts
        </b-list-group-item>
        <b-list-group-item to="/register" :class="$route.path === '/register' ? 'active' : ''">
           <b-icon icon="person-plus"></b-icon> Register
        </b-list-group-item>
        <b-list-group-item to="/login" :class="$route.path === '/login' ? 'active' : ''">
           <b-icon icon="person"></b-icon> Login
        </b-list-group-item>
        <!-- <b-list-group-item class="d-flex justify-content-center align-items-center business-logo">
            <b-img fluid src="@/assets/photos/logo.png" width="100"></b-img>
            <p class="cname">Victor Air Class Solutions, Inc.</p>
        </b-list-group-item> -->
      </b-list-group>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: 'SideBar'
};
</script>

<style scoped>

#list-group {
  border-radius: 0;
}

.active {
  background: rgb(44, 204, 204) !important;
  border: none;
  color: white;
}

.business-logo {
  background: rgb(204, 204, 204);
  border: none;
  color: white;
}
</style>
