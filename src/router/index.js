import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import aboutApplicaton from "../views/aboutApplicaton.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: aboutApplicaton
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
