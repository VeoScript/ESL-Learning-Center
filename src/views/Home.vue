<template>
  <div>
    <carousel/>
    <b-container>
      <tabs/>
      <horizontal-cards/>
    </b-container>
    <foot-bar />
  </div>
</template>

<script>

export default {
  name: "Home",
  components:{  
    Carousel: () => import('@/components/Carousel.vue'),
    Tabs: () => import('@/components/Tabs.vue'),
    HorizontalCards: () => import('@/components/HorizontalCards.vue'),
    FootBar: () => import('@/components/FootBar.vue')
  }
};
</script>
