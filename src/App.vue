<template>
  <div id="app">
    <the-nav-bar />
    <vue-page-transition name="fade-in-right" class="content">
      <router-view />
    </vue-page-transition>
    <the-foot-bar />
  </div>
</template>

<script>
  export default {
    components: {
      TheNavBar: () => import("@/components/layouts/TheNavBar.vue"),
      TheFootBar: () => import("@/components/layouts/TheFootBar")
    }
  }
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Scope+One|Trocchi");
@import url("https://fonts.googleapis.com/css?family=Varela+Round");
@import url("https://fonts.googleapis.com/css?family=Righteous");
@import url("https://fonts.googleapis.com/css?family=Nunito");
@import url("https://fonts.googleapis.com/css?family=Lobster+Two");
@import url("https://fonts.googleapis.com/css?family=Bebas+Neue");

#app {
  font-family: "Nunito";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
i,
span,
li {
  cursor: default;
}

body {
  background: rgba(227, 245, 245, 0.467);
}

.content {
  margin-top: 58px;
}
</style>
