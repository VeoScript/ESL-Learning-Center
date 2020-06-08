<template>
  <div class="fixed-top top">
    <b-container>
      <b-navbar toggleable="lg" variant="fade" type="light">
        <b-navbar-brand route to="/" class="mb-0">
          <img src="@/assets/photos/logo.png" height="30" alt="Vic Solutions">
        </b-navbar-brand>
        <b-navbar-toggle target="collapse"  @click="toggle = !toggle">
          <b-icon 
              :icon="toggle ? 'x' : 'list'">
          </b-icon>
        </b-navbar-toggle>
        <b-collapse v-model="toggle" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav class="d-flex justify-content-center align-items-center">
              <b-nav-item 
                href="#" 
                :class="$route.path === '/' ? 'active font-weight-bold' : ''" 
                to="/"
              >
                  <b-icon 
                    :icon="$route.path === '/' ? 'house-fill' : 'house'">
                  </b-icon>
                  Home
                </b-nav-item>
              <b-nav-item 
                href="#" 
                to="/about"
                :class="$route.path === '/about' ? 'active font-weight-bold' : ''"
              >
                <b-icon 
                  :icon="$route.path === '/about' ? 'person-check-fill' : 'person-check'">
                </b-icon> 
                About
              </b-nav-item>
              <b-nav-item 
                href="#"
                :class="$route.path === '/lessons' ? 'active font-weight-bold' : ''"
                to="/lessons"
              >
                <b-icon 
                  :icon="$route.path === '/lessons' ? 'file-post' : 'file-text'">
                </b-icon>
                Lessons
              </b-nav-item>
              <b-nav-item 
                href="#"
                :class="$route.path === '/teachers' ? 'active font-weight-bold' : ''"
                to="/teachers"
              >
                <b-icon 
                  :icon="$route.path === '/teachers' ? 'people-fill' : 'people'">
                </b-icon> 
                Teachers
              </b-nav-item>
               <b-nav-item 
                href="#"
                :class="$route.path === '/contacts' ? 'active font-weight-bold' : ''"
                to="/contacts"
              >
               <b-icon 
                :icon="$route.path === '/contacts' ? 'chat-square-dots-fill' : 'chat-square-dots'">
              </b-icon>
                Contacts
              </b-nav-item>
              <b-nav-item 
                href="#"
                to="/register"
              :class="$route.path === '/register' ? 'active font-weight-bold' : ''"
              >
               <b-icon 
                :icon="$route.path === '/register' ? 'person-plus-fill' : 'person-plus'">
              </b-icon>
                Register
              </b-nav-item>
              <b-nav-item 
                href="#"
                :class="$route.path === '/login' ? 'active font-weight-bold' : ''"
                to="/login"
              >
               <b-icon 
                :icon="$route.path === '/login' ? 'lock-fill' : 'lock'">
              </b-icon>
                Login
              </b-nav-item>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  
  data: () => ({
    toggle: false
  })
}
</script>

<style lang="scss" scoped>
#menuicon {
  background: none;
  border: 1px solid rgb(221, 221, 221);
  color: rgb(139, 139, 139);
  font-size: 15px;
}

.top {
  background: white;
  border-bottom: 1px solid rgb(218, 217, 217);
}

.navbar {
  .navbar-brand {
    font-family: 'Righteous';
    color: #445b66;
  }
}

// .navbar-toggler {
//   border: none;
//   background: none;
// }
// .navbar-toggler:focus {
//   border: none;
//   background: none;
// }

</style>
