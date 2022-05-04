import { createRouter, createWebHistory } from "vue-router";
const LoginView = () => import("@/views/LoginView.vue");
const ProvidersView = () => import("@/views/ProvidersView.vue");
const ProductsView = () => import("@/views/ProductsView.vue");
const TransactionsView = () => import("@/views/TransactionsView.vue");
const DashboardView = () => import("@/views/DashboardView.vue");

import { useMainStore } from "../stores/mainStore";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/providers",
      name: "providers",
      component: ProvidersView,
    },
    {
      path: "/products",
      name: "products",
      component: ProductsView,
    },
    {
      path: "/transactions",
      name: "transactions",
      component: TransactionsView,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView,
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  if (!useMainStore().authenticated && to.name !== "login") {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
