<template>
  <div class="hero">
    <b-carousel>
      <b-carousel-slide
        v-if="$route.path === '/'"
        img-src="@/assets/photos/vic2.png"
      ></b-carousel-slide>
      <b-carousel-slide
        v-else
        class="img-style"
        img-src="@/assets/photos/bg1.jpg"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'Hero',

  components: {
  }
}
</script>

<style lang="scss">
  .hero{
    margin-top: 50px;

    .img-style {
      height: 60vh;
      filter: brightness(80%); 
    }

    .card{
      background: none;
    }
  }
</style>