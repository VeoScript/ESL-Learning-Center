<template>
  <footer class="bd-footer text-muted docs-border">
    <b-row class="justify-content-center">
      <b-col sm="3">
        <b-img fluid src="@/assets/photos/logo.png" width="100"></b-img>
        <p class="cname">Victor Air Class Solutions, Inc.</p>
        <p>
          Lorem ipsum dolor sit amet nsectetur cing elit. Suspe ndisse suscipit
          sagittis leo sit met entum estibulum dignissim posuere cubilia
          deleniti atque corrupti quos dolores vero eos et accusamu.
        </p>
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
              <li><b-icon icon="envelope-fill" /> yoursample@email.com</li>
              <li><b-icon icon="phone" /> Call Us: 09153246565</li>
              <li>
                <b-icon icon="geo-alt" /> Maasin City, Southern Leyte,
                Philippines
              </li>
            </ul>
          </b-col>
        </b-row>
        <hr style="background:#487184;" />
        <p class="copyright">
          &copy;2020 Victor Air Class Solutions, Inc. / All Rights Reserved.
          Designed and Developed by VEOSCRIPT and ACATZK.
        </p>
      </b-col>
    </b-row>
  </footer>
</template>

<style lang="scss">
footer {
  background: #17242a;
  padding: 50px;
}

.cname {
  color: #fff;
}

.ul-contactus li {
  list-style-type: none;
  color: #3aafa9;
}

ul li a {
  color: #3aafa9;
}

ul li a:hover {
  color: #138496;
}

.ftxt {
  color: #fff;
}

.copyright {
  font-size: 10px;
  color: #888888;
}
</style>
