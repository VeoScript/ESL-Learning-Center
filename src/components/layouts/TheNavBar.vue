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

              <!-- HOME PAGE -->
              <b-nav-item 
                href="#" 
                :class="$route.path === '/' ? 'active font-weight-bold' : ''" 
                to="/"
                v-if="!isLoggedIn"
              >
                  <b-icon 
                    :icon="$route.path === '/' ? 'house-fill' : 'house'">
                  </b-icon>
                  Home
              </b-nav-item>

              <!-- DASHBOARD PAGE -->
              <b-nav-item 
                href="#" 
                :class="$route.path === '/dashboard' ? 'active font-weight-bold' : ''" 
                to="/dashboard"
                v-if="isLoggedIn"
              >
                  <b-icon 
                    :icon="$route.path === '/dashboard' ? 'house-fill' : 'house'">
                  </b-icon>
                  Dahsboard
              </b-nav-item>

              <!-- ABOUT PAGE -->
              <b-nav-item 
                href="#" 
                to="/about"
                :class="$route.path === '/about' ? 'active font-weight-bold' : ''"
                v-if="!isLoggedIn"
              >
                <b-icon 
                  :icon="$route.path === '/about' ? 'person-check-fill' : 'person-check'">
                </b-icon> 
                About
              </b-nav-item>

              <!-- OUR SERVICES PAGE -->
              <b-nav-item 
                href="#" 
                to="/services"
                :class="$route.path === '/services' ? 'active font-weight-bold' : ''"
                v-if="!isLoggedIn"
              >
                <b-icon 
                  :icon="$route.path === '/services' ? 'briefcase-fill' : 'briefcase'">
                </b-icon> 
                Services
              </b-nav-item>

              <!-- lESSONS PAGE -->
              <b-nav-item 
                href="#"
                :class="$route.path === '/lessons' ? 'active font-weight-bold' : ''"
                to="/lessons"
                v-if="isLoggedIn"
              >
                <b-icon 
                  :icon="$route.path === '/lessons' ? 'file-post' : 'file-text'">
                </b-icon>
                Lessons
              </b-nav-item>

              <!-- TEACHER PAGE -->
              <b-nav-item 
                href="#"
                :class="$route.path === '/teachers' ? 'active font-weight-bold' : ''"
                to="/teachers"
                v-if="isLoggedIn"
              >
                <b-icon 
                  :icon="$route.path === '/teachers' ? 'people-fill' : 'people'">
                </b-icon> 
                Teachers
              </b-nav-item>


              <!-- CONTACT PAGE -->
              <b-nav-item 
                href="#"
                :class="$route.path === '/contacts' ? 'active font-weight-bold' : ''"
                to="/contacts"
                v-if="!isLoggedIn"
              >
               <b-icon 
                :icon="$route.path === '/contacts' ? 'chat-square-dots-fill' : 'chat-square-dots'">
              </b-icon>
                Contacts
              </b-nav-item>

              <!-- PROFILE PAGE -->
              <b-nav-item 
                href="#"
                :class="$route.path === '/profile' ? 'active font-weight-bold' : ''"
                to="/profile"
                v-if="isLoggedIn"
              >
               <b-icon 
                :icon="$route.path === '/profile' ? 'person-fill' : 'person'">
              </b-icon>
                Profile
              </b-nav-item>

              <!-- REGISTER BUTTON -->
              <b-nav-item v-if="!isLoggedIn">
                <b-button variant="outline-primary" size="sm" v-b-modal.register-modal>
                  <b-icon icon="person-plus-fill"></b-icon> Register
                </b-button>
              </b-nav-item>

              <!-- LOGIN BUTTON -->
              <b-nav-item v-if="!isLoggedIn">
                <b-button variant="outline-primary" size="sm" v-b-modal.login-modal>
                  <b-icon icon="lock-fill"></b-icon> Login
                </b-button>
              </b-nav-item>

              <!-- LOGOUT BUTTON -->
              <b-nav-item v-if="isLoggedIn">
                <b-button variant="primary" size="sm" @click="onClickLogout">
                  <b-icon icon="box-arrow-in-right"></b-icon> Logout
                </b-button>
              </b-nav-item>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>

    <register /> <!-- Regsiter vue comopnent -->

    <login /> <!-- Login vue component -->

  </div>
</template>

<script>

  import { auth } from '@/services'

  import { toastAlertStatus } from '@/utils'

  export default {
    name: 'nav-bar',

    components: {
      Register: () => import('@/views/Register'),
      Login: () => import('@/views/Login')
    },
    
    data () {
      return {
        toggle: false
      }
    },

    computed: {
      isLoggedIn () {
        return auth.currentUser
      }
    },

    methods: {
      onClickLogout () {  
        auth
         .signOut()
         .then(() => this.$router.push('/'))
         .catch(error => toastAlertStatus(error, 'error'))
      }
    }
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
