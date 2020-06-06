<template>
  <div>
    <carousel />
    <b-container>
      <card-details />
      <card-details-owner /> 
      <!-- <tabs />-->
    </b-container>
    <foot-bar />
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    Carousel: () => import("@/components/Carousel.vue"),
    // Tabs: () => import("@/components/Tabs.vue"),
    CardDetails: () => import("@/components/CardDetails.vue"),
    FootBar: () => import("@/components/FootBar.vue"),
    CardDetailsOwner: () => import("@/components/CardDetailsOwner.vue")
  }
};
</script>
