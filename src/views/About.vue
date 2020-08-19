<template>
  <div class="about">
     <front-page 
       :sideImage="frontpage.sideImage"
       :title="frontpage.title"
       :description="frontpage.description"
       :buttonText="frontpage.buttonText"
     />
     <div id="about-us">
        <b-container>
          <b-row class="d-flex justify-content-center align-items-center text-center">
              <b-col md="6">
                  <b-img class="side-image" width="180" src="@/assets/photos/communication.png"></b-img>
              </b-col>
              <b-col md="6" class="text-center">
                  <h2>Company Profile</h2>
                  <p style="text-align: justify;">
                    A partnership of a two good friends Victor and Nicholas.  An overseas workers, originally from the Philippines and the United States of America who met in the middle of war zone projects, working 7 days a week and 12-16 hours a day depends with the complexity of work to provide logistics and construction management support of NATO troops stationed in Middle East. Victor is a teacher and Nicholas is a civil Engineer,  they both have a work background in Estimating, Construction management and Business English.  It has been their long dream to have their own company that completely benefits the hardworking individuals who strives to uplift the quality of their life and the community. It has been our nature to provide quality service to the client and develop strong and long term relationship. Our goal is to help other's dream come to reality, especially those who are living in the remote areas and small villages. Big Cities are too congested with business and workers fighting the agony of being far away from home. With the Victor Air class Solutions we are determined to take commitment in working together with both young  and seasoned professionals’ teachers and Subject Matter Experts (SMEs) dedicated to impart their expertise and passion. May 28, 2020 we developed a challenging plan to start with company "Victors Air Class Solutions" .The company's name is taken from the CEO's' name and Nicholas' daughter's name. We provide teaching tools to qualified and teachers and other professionals who has the love and desire to teach online while enjoying their time home with families. We are dedicated to make partnership and teaching support in English and other courses that can be done remotely in a case to case basis.
                  </p>
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
          <carousel-3d :autoplay="true" :autoplay-timeout="2400">
              <div v-for="(item, index) in partners" :key="item.id">
                  <slide :index="index">
                      <img :src="item.src" />
                  </slide>
              </div>
          </carousel-3d>
        </b-container>
     </div>
     <div id="careers">
       <b-container>
        <h2 class="text-center">Careers Path</h2>
        <carrer-section />
      </b-container>
     </div>
  </div>
</template>

<script>

export default {
  name: 'About',

  components: {
    FrontPage: () => import('@/components/mixins/FrontPage'),
    OurStaffSection: () => import('@/components/OurStaffSection'),
    CarrerSection: () => import('@/components/CarrerSection')
  },

  data: () => ({
    frontpage: {
      sideImage: require('@/assets/photos/communication.png'),
      title: 'About Our Company',
      description: 'Foundation of English school language,  an education.  Quality education is with English school tradition',
      buttonText: 'Enroll Now',
    },
    partners: [
        {
            id: 0,
            src: 'https://res.cloudinary.com/ameo/image/upload/v1498843587/kTcPaQR_x77hor.jpg'
        },
        {
            id: 1,
            src: 'https://unsplash.it/400/300?image=456'
        },
        {
            id: 2,
            src: 'https://unsplash.it/400/300?image=222'
        },
        {
            id: 3,
            src: 'https://unsplash.it/400/300?image=1003'
        },
        {
            id: 4,
            src: 'https://unsplash.it/400/300?image=940'
        },
        {
            id: 5,
            src: 'https://unsplash.it/400/300?image=944'
        },
        {
            id: 6,
            src: 'https://source.unsplash.com/mEr7U5yfYt8/400x300'
        },
        {
            id: 7,
            src: 'https://unsplash.it/400/300?image=1041'
        }
    ]
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