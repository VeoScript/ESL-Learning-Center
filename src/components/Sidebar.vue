<template>
  <div>
    <b-sidebar id="sidebar-right" title="Menu" right shadow backdrop backdrop-variant="transparent">
      <b-list-group id="list-group">
        <b-list-group-item to="/" id="text-style">
          <b-icon id="icon" icon="house-fill"></b-icon> Home
        </b-list-group-item>
        <b-list-group-item to="/about">
          <b-icon id="icon" icon="person-square"></b-icon> About
        </b-list-group-item>
        <b-list-group-item to="/about">
          <b-icon id="icon" icon="grid1x2-fill"></b-icon> Lessons
        </b-list-group-item>
        <b-list-group-item to="/about">
          <b-icon id="icon" icon="person-bounding-box"></b-icon> Teachers
        </b-list-group-item>
        <b-list-group-item to="/about">
          <b-icon id="icon" icon="person-lines-fill"></b-icon> Contacts
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-center">
          <b-button-group size="sm">
            <b-button class="defaultstyle">
              <b-icon id="icon" icon="person-plus-fill"></b-icon> Register
            </b-button>
            <b-button class="defaultstyle">
              <b-icon id="icon" icon="person-circle"></b-icon> Login
            </b-button>
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
export default {
  name: 'SideBar'
};
</script>

<style scoped>
#list-group {
  border-radius: 0;
  font-weight: bolder !important;
}
#icon {
  font-weight: bolder !important;
}

.defaultstyle {
  border: 1px solid teal;
  background-color: #fff;
  color: teal;
}
.defaultstyle:focus {
  box-shadow: none;
  background: teal;
  color: white;
}
</style>
