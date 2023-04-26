import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Business from "../views/Business.vue";
import Entertainment from "../views/Entertainment.vue";
import General from "../views/General.vue";
import Health from "../views/Health.vue";
import Science from "../views/Science.vue";
import Sports from "../views/Sports.vue";
import Technology from "../views/Technology.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/business",
    name: "Business",
    component: Business,
  },
  {
    path: "/entertainment",
    name: "Entertainment",
    component: Entertainment,
  },
  {
    path: "/general",
    name: "General",
    component: General,
  },
  {
    path: "/health",
    name: "Health",
    component: Health,
  },
  {
    path: "/science",
    name: "Science",
    component: Science,
  },
  {
    path: "/sports",
    name: "Sports",
    component: Sports,
  },
  {
    path: "/technology",
    name: "Technology",
    component: Technology,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
