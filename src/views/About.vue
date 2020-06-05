<template>
  <div class="about">
    <h1>This is an about page</h1>
    <tabs></tabs>
  </div>
</template>

<script>
export default {
  components: {
    Tabs: () => import("@/components/Tabs.vue")
  }
}
</script>
