import Vue from "vue";
import { createRouter, createWebHistory } from 'vue-router'
import goTo from "vuetify/lib/services/goto";
import Missing from "../views/404.vue";
import Demo from "../views/Demo.vue";
import Index from "../views/all-home-version/LandingPersonalPortfolioTwo"

// Vue.use(VueRouter);

const routes = [  
  {
    path: "/",
    name: "LandingPersonalPortfolioTwo",
    component: Index
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return goTo(scrollTo);
  },
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
