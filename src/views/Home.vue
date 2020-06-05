<template>
  <div>
    <carousel />
    <b-container>
      <tabs />
      <card-details />
    </b-container>
    <foot-bar />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    Carousel: () => import("@/components/Carousel.vue"),
    Tabs: () => import("@/components/Tabs.vue"),
    CardDetails: () => import("@/components/CardDetails.vue"),
    FootBar: () => import("@/components/FootBar.vue")
  }
};
</script>
