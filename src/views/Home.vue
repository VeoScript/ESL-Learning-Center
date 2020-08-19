<template>
  <div>
    <front-page 
       :sideImage="frontpage.sideImage"
       :title="frontpage.title"
       :description="frontpage.description"
       :buttonText="frontpage.buttonText"
    />
    <home-vision-mission-page />
    <home-connect-page />
    <horizontal-list />
  </div>
</template>

<script>
  export default {

    name: "Home",

    data () {
      return {
         frontpage: {
          sideImage: require('@/assets/photos/communication.png'),
          title: 'Air Class Solution, Inc.',
          description: 'Learning English Language Through Video Calls. Putting Children First. Preparing children for success in life.',
          buttonText: 'Learn More'
         }
      }
    },

    components: {
      FrontPage: () => import('@/components/mixins/FrontPage'),
      HomeVisionMissionPage: () => import('@/components/pages/home/HomeVisionMission'),
      HomeConnectPage: () => import('@/components/pages/home/HomeContactPage'),
      HorizontalList: () => import('@/components/HorizontalList')
    }

  }
</script>
