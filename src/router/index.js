import { createRouter, createWebHistory } from "vue-router";

const Login = () => import("../views/Login/index.vue");
const Home = () => import("../views/Home/index.vue");


export const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Home,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "Login" },
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;