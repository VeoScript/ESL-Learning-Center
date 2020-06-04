<template>
  <div id="app">
    <topbar/>
    <router-view />
  </div>
</template>

<script>
export default {
  components: {
    Topbar: () => import('@/components/Topbar.vue')
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Scope+One|Trocchi");
@import url("https://fonts.googleapis.com/css?family=Varela+Round");
@import url("https://fonts.googleapis.com/css?family=Righteous");

#app {
  font-family: 'Righteous';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6, p, i, span, li{
  cursor: default;
}

body{
  background: #DEF2F1;
}
</style>
