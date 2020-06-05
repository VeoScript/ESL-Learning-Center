<template>
  <div>
    <b-sidebar id="sidebar-right" title="Menu" right shadow backdrop>
      <b-list-group id="list-group">
        <b-list-group-item href="/">Home</b-list-group-item>
        <b-list-group-item href="/">About</b-list-group-item>
        <b-list-group-item href="/">Lessons</b-list-group-item>
        <b-list-group-item href="/">Teachers</b-list-group-item>
        <b-list-group-item href="/">Contacts</b-list-group-item>
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

<style>
#list-group {
  border-radius: 0;
}
</style>
