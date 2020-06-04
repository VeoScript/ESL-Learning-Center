<template>
  <div>
    <carousel/>
    <tabs/>
    <horizontal-cards/>
    <footer-component/>
  </div>
</template>

<script>

export default {
  name: "Home",
  components:{  
    Carousel: () => import('@/components/Carousel.vue'),
    Tabs: () => import('@/components/Tabs.vue'),
    HorizontalCards: () => import('@/components/HorizontalCards.vue'),
    FooterComponent: () => import('@/components/FooterComponent.vue')
  }
};
</script>
