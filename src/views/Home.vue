<template>
  <div class="home">
    <carousel></carousel>
    <displaycards></displaycards>
  </div>
</template>

<script>

export default {
  name: "Home",
  components:{   
    carousel: () => import('@/components/Carousel.vue'),
    displaycards: () => import('@/components/DisplayCards.vue')
  }
};
</script>
