<template>
  <div>
    <front-page 
       :sideImage="sideImage"
       :title="title"
       :description="description"
       :buttonText="buttonText"
    />
    <home-vision-mission-page />
    <home-connect-page />
    <horizontal-list />
  </div>
</template>

<script>
  export default {
    name: "Home",
    components: {
      FrontPage: () => import('@/components/mixins/FrontPage'),
      HomeVisionMissionPage: () => import('@/components/pages/home/HomeVisionMission'),
      HomeConnectPage: () => import('@/components/pages/home/HomeContactPage'),
      HorizontalList: () => import('@/components/HorizontalList')
    },

    data: () => ({
        sideImage: require('@/assets/photos/communication.png'),
        title: 'Air Class Solution, Inc.',
        description: 'Learning English Language Through Video Calls. Putting Children First. Preparing children for success in life.',
        buttonText: 'Learn More'
    })
  }
</script>
