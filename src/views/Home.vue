<template>
  <div>
    <!-- <carousel /> -->
    <Hero />
    <tabs />
    <card-details-owner />
    <card-details />
    <foot-bar />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    // Carousel: () => import("@/components/Carousel.vue"),
    Tabs: () => import("@/components/Tabs.vue"),
    FootBar: () => import("@/components/FootBar.vue"),
    CardDetailsOwner: () => import("@/components/CardDetailsOwner.vue"),
    CardDetails: () => import('@/components/CardDetails'),
    Hero: () => import('@/components/Hero.vue')
  }
};
</script>
