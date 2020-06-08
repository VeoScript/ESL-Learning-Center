<template>
  <div class="about">
     <welcome-page 
       :sideImage="sideImage"
       :title="title"
       :description="description"
       :buttonText="buttonText"
     />
  </div>
</template>

<script>
export default {
  name: 'About',

  components: {
    WelcomePage: () => import('@/components/WelcomePage')
  },

  data: () => ({
    sideImage: require('@/assets/photos/communication.png'),
    title: 'About Our Company',
    description: 'We are online learning language tutor. Any where in the world.  Quality education is with English school tradition',
    buttonText: 'Enroll Now'
  })
}
</script>

<style scoped>

</style>