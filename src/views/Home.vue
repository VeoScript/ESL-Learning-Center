<template>
  <div>
    <welcome-page 
       :sideImage="sideImage"
       :title="title"
       :description="description"
       :buttonText="buttonText"
    />
    <vision-mission />
    <connect-with-us />
    <horizontal-list />
  </div>
</template>

<script>
  export default {
    name: "Home",
    components: {
      WelcomePage: () => import('@/components/WelcomePage'),
      VisionMission: () => import('@/components/VisionMission'),
      ConnectWithUs: () => import("@/components/ConnectWithUs"),
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
