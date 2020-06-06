<template>
  <div id="app">
    <nav-bar />
    <vue-page-transition name="fade-in-right" class="content">
      <router-view />
    </vue-page-transition>
  </div>
</template>

<script>
export default {
  components: {
    NavBar: () => import("@/components/NavBar.vue")
  }
};
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
  background: #def2f1;
}
</style>
