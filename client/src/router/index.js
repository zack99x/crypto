import Vue from "vue";
import VueRouter from "vue-router";
// Page import
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, _, next) => {
  const protectedRoute = ["Dashboard"];

  const offlineRoute = ["Login", "Register", "/"];
  const routeName = to.name;
  const isLogged = !!window.localStorage.getItem("jwt-token");

  if (offlineRoute.includes(routeName) && !isLogged) next();
  else if (protectedRoute.includes(routeName) && isLogged) next();
  else if (offlineRoute.includes(routeName) && isLogged) {
    next("/dashboard");
  } else {
    next("/login");
  }
});

export default router;
