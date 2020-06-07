<template>
  <div>
    <Hero />
    <vision-mission />
    <card-details />
    <horizontal-list />
    <foot-bar />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    VisionMission: () => import('@/components/VisionMission.vue'),
    FootBar: () => import("@/components/FootBar.vue"),
    CardDetails: () => import("@/components/CardDetails"),
    HorizontalList: () => import('@/components/HorizontalList.vue'),
    Hero: () => import("@/components/Hero.vue")
  }
};
</script>
