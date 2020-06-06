<template>
  <div>
    <carousel />
    <tabs />
    <card-details-owner />
    <foot-bar />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    Carousel: () => import("@/components/Carousel.vue"),
    Tabs: () => import("@/components/Tabs.vue"),
    FootBar: () => import("@/components/FootBar.vue"),
    CardDetailsOwner: () => import("@/components/CardDetailsOwner.vue")
  }
};
</script>
