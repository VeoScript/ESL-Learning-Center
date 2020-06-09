<template>
    <div>
      <footer class="bd-footer text-muted docs-border">
        <b-row class="justify-content-center container">
          <b-col md="3">
            <b-img fluid src="@/assets/photos/logo.png" width="100"></b-img>
            <p class="cname">Victor Air Class Solutions, Inc.</p>
          </b-col>
          <b-col md="9">
            <b-row>
              <b-col md="3">
                <h5 class="ftxt">About School</h5>
                <ul>
                  <li>
                    <router-link to="/about" v-if="$route.path !== '/about'">Company Profile</router-link>
                    <scroll-link href="#about-us" v-else>Company Profile</scroll-link>
                  </li>
                  <li>
                    <router-link to="/about" v-if="$route.path !== '/about'">Our Staff</router-link>
                    <scroll-link href="#our-staff" v-else>Our Staff</scroll-link>
                  </li>
                  <li>
                    <router-link to="/about" v-if="$route.path !== '/about'">Our Partners</router-link>
                    <scroll-link href="#our-partners" v-else>Our Partners</scroll-link>
                  </li>
                  <li>
                    <router-link to="/about" v-if="$route.path !== '/about'">Careers</router-link>
                    <scroll-link href="#careers" v-else>Careers</scroll-link>
                  </li>
                </ul>
              </b-col>
              <b-col sm="4">
                <h5 class="ftxt">Programs</h5>
                <ul>
                  <li><router-link to="/">Long-term Programs</router-link></li>
                  <li><router-link to="/">Intensive Programs</router-link></li>
                  <li><router-link to="/">Specialized Programs</router-link></li>
                  <li><router-link to="/">Language Training</router-link></li>
                </ul>
              </b-col>
              <b-col sm="5">
                <h5 class="ftxt">Contact Info</h5>
                <ul class="ul-contactus">
                  <li><b-icon icon="envelope" /> yoursample@email.com</li>
                  <li><b-icon icon="phone" /> Call Us: 09153246565</li>
                  <li>
                    <b-icon icon="geo-alt" /> Maasin City, Southern Leyte PH
                  </li>
                </ul>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </footer>
      <div class="copy-right">
       &copy;{{ new Date().getFullYear() }} 
       <b>Victor Air Class Solutions, Inc.</b>, 
       Designed and developed by <b>
         <a href="https://github.com/veoscript" target="_blank">veoscript</a></b> & 
         <b><a href="https://github.com/acatzk" target="_blank">acatzk</a></b>.
    </div>
  </div>
</template>

<script>
export default {
  name: 'FootBar',

  components: {
    ScrollLink: () => import('./ScrollLink')
  }
}
</script>

<style lang="scss" scoped>
a {
  color: #21333b;
}
footer {
  background: #17242a;
  padding: 60px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cname {
  color: #fff;
}

.ul-contactus li {
  list-style-type: none !important;
  color: #eeeeee;
}

ul li {
  list-style-type: none;
  position: relative;
  right: 40px;
}

ul li a {
  color: #eeeeee;
}

ul li a:hover {
  color: #fff;
}

.ftxt {
  color: #fff;
  font-family: Helvetica, serif;
}

.copy-right {
  text-align: center;
  font-size: 14px;
  padding: 10px 0;
  color: #393536;
  background: #fff;
}
</style>
