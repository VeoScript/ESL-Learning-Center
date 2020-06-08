<template>
  <div>
    <welcome-page />
    <vision-mission />
    <connect-with-us />
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
    ConnectWithUs: () => import("@/components/ConnectWithUs"),
    HorizontalList: () => import('@/components/HorizontalList')
  }
};
</script>
