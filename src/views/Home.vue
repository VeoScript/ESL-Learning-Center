<template>
  <div>
    <!-- <Hero /> -->
    <front-page />
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
    FrontPage: () => import('@/components/FrontPage'),
    // Hero: () => import("@/components/Hero"),
    VisionMission: () => import('@/components/VisionMission'),
    FootBar: () => import("@/components/FootBar"),
    CardDetails: () => import("@/components/CardDetails"),
    HorizontalList: () => import('@/components/HorizontalList')
  }
};
</script>
