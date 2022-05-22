import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import Simulator from "../pages/Simulator.vue";
import Result from "../pages/Result.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/simulator",
    component: Simulator,
  },
  {
    path: "/result",
    component: Result,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
