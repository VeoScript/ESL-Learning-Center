import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import("@/views/About.vue")
  },
  {
    path: '/lessons',
    name: 'lessons',
    component: () => import('@/views/Lessons.vue')
  }
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});


router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  NProgress.configure({ easing: 'ease', speed: 2000, showSpinner: false })
  if (to.name) {
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router;
