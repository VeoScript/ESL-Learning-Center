<template>
  <div>
    <welcome-page />
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
    WelcomePage: () => import('@/components/WelcomePage'),
    VisionMission: () => import('@/components/VisionMission'),
    FootBar: () => import("@/components/FootBar"),
    CardDetails: () => import("@/components/CardDetails"),
    HorizontalList: () => import('@/components/HorizontalList')
  }
};
</script>
