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
          <b-row class="d-flex justify-content-center align-items-center text-center">
              <b-col md="6">
                  <b-img class="side-image" width="180" src="@/assets/photos/communication.png"></b-img>
              </b-col>
              <b-col md="6" class="text-center">
                  <h2>About Us</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, suscipit laboriosam. Quo nulla dolore alias eos, sit fugiat? Esse reprehenderit numquam molestias dolorem distinctio! At iusto dicta sit rerum, officiis aliquam amet, odio molestiae modi, deserunt quo! Optio laudantium ad, iste maxime quia atque veniam adipisci nesciunt vero corporis in, obcaecati omnis. Consequatur fugiat dignissimos sint, facere molestias hic sunt excepturi, provident iusto dolor, explicabo amet maiores magni voluptas? Veniam natus quia consequuntur iste inventore, reprehenderit ipsa quo doloribus, nisi et repudiandae fugit aliquam quidem neque. Error pariatur quam voluptas laborum, facilis ab autem quod nostrum nobis, quidem, explicabo facere!</p>
              </b-col>
          </b-row>
        </b-container>
     </div>
     <div id="our-staff"> 
       <b-container>
        <h2 class="text-center">Our Staff</h2>
        <our-staff-section />
      </b-container>
     </div>
     <div id="our-partners">
        <b-container>
          <h2 class="text-center">Our Partners</h2>
          <carousel-overflow /> <!--  Carousel Overflow component-->
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
    OurStaffSection: () => import('@/components/OurStaffSection'),
    CarouselOverflow: () => import('@/components/CarouselOverflow'),
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

#about-us, #our-staff, #our-partners, #careers {
  padding: 100px 0;
}


#our-staff, #careers {
  background: #ffffff;
}


@media only screen and (min-width: 1000px) {
  .side-image {
      width: 400px;
  }
}

@media only screen and (max-width: 1000px) {
  
}
</style>