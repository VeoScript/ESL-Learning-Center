<template>
  <div class="about">
     <welcome-page />
  </div>
</template>

<script>
export default {
  name: 'About',

  components: {
    WelcomePage: () => import('@/components/WelcomePage')
  }
}
</script>

<style scoped>

</style>