import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/project",
    name: "project",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProjectView.vue"),
  },
  {
    path: "/projectdetail/:id",
    name: "projectdetail",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProjectDetail.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AdminView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
