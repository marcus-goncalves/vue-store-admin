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
      meta: { menu: "Login" },
    },
    {
      path: "/providers",
      name: "providers",
      component: ProvidersView,
      meta: { menu: "Fornecedores" },
    },
    {
      path: "/products",
      name: "products",
      component: ProductsView,
      meta: { menu: "Produtos" },
    },
    {
      path: "/transactions",
      name: "transactions",
      component: TransactionsView,
      meta: { menu: "Transações" },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView,
      meta: { menu: "Dashboard" },
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
