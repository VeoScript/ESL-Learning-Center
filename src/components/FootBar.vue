<template>
    <div>
      <footer class="bd-footer text-muted docs-border">
        <b-row class="justify-content-center container">
          <b-col sm="3">
            <b-img fluid src="@/assets/photos/logo.png" width="100"></b-img>
            <p class="cname">Victor Air Class Solutions, Inc.</p>
          </b-col>
          <b-col sm="9">
            <b-row>
              <b-col sm="3">
                <h5 class="ftxt">About School</h5>
                <ul>
                  <li><router-link to="/">About Us</router-link></li>
                  <li><router-link to="/">Our Staff</router-link></li>
                  <li><router-link to="/">Our Partners</router-link></li>
                  <li><router-link to="/">Careers</router-link></li>
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
       &copy;{{ new Date().getFullYear() }} <b>Victor Air Class Solutions, Inc.</b>, Designed and Developed by VEOSCRIPT & ACATZK.
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
  background: #fff;
}

</style>
