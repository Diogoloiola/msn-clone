import { createRouter, createWebHistory } from "vue-router";

const Login = () => import("../views/Login/index.vue");

export const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
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