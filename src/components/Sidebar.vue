
<template>
  <div>
    <b-sidebar id="sidebar-right" title="Menu" right shadow>
      <b-list-group id="list-group">
        <b-list-group-item to="/">
          <b-icon icon="archive"></b-icon> Home
        </b-list-group-item>
        <b-list-group-item to="/about">About</b-list-group-item>
        <b-list-group-item to="/about">Lessons</b-list-group-item>
        <b-list-group-item to="/about">Teachers</b-list-group-item>
        <b-list-group-item to="/about">Contacts</b-list-group-item>
        <b-list-group-item>
          <b-button-group size="sm">
            <b-button>Register</b-button>
            <b-button>Login</b-button>
          </b-button-group>
        </b-list-group-item>
      </b-list-group>
      <p class="copyright mx-2 my-2">
        &copy;2020 Victor Air Class Solutions, Inc. / All Rights Reserved.<br />
        Designed and Developed by VEOSCRIPT and ACATZK.
      </p>
    </b-sidebar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#list-group {
  border-radius: 0;
}
</style>