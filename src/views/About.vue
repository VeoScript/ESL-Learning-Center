<template>
  <div class="about">
     <welcome-page 
       :sideImage="sideImage"
       :title="title"
       :description="description"
       :buttonText="buttonText"
     />
     <div id="about-us">
        <b-container>
          <h1>About Us</h1>
        </b-container>
     </div>
     <div id="our-staff"> 
       <b-container>
        <h1>Our Staff</h1>
      </b-container>
     </div>
     <div id="our-partners">
        <b-container>
          <h1>Our Partners</h1>
        </b-container>
     </div>
     <div id="careers">
       <b-container>
        <h1>Careers</h1>
      </b-container>
     </div>
     <foot-bar />
  </div>
</template>

<script>
export default {
  name: 'About',

  components: {
    WelcomePage: () => import('@/components/WelcomePage'),
    FootBar: () => import("@/components/FootBar"),
  },

  data: () => ({
    sideImage: require('@/assets/photos/communication.png'),
    title: 'About Our Company',
    description: 'Foundation of English school language,  an education.  Quality education is with English school tradition',
    buttonText: 'Enroll Now'
  })
}
</script>

<style scoped>

.container {
  height: 90vh;
}

#our-staff, #careers {
  background: #ffffff;
}

</style>