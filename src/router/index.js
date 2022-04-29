import { createRouter, createWebHistory } from "vue-router";
const LoginView = () => import("@/views/LoginView.vue");
const ProvidersView = () => import("@/views/ProvidersView.vue");
const ProductsView = () => import("@/views/ProductsView.vue");
const TransactionsView = () => import("@/views/TransactionsView.vue");
const DashboardView = () => import("@/views/DashboardView.vue");

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

export default router;
