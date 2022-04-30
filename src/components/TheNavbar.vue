<template>
  <header class="flex justify-around py-2 mx-auto bg-red-900 text-gray-100">
    <div class="flex items-center">
      <router-link :to="{ name: 'login' }" class="text-2xl font-medium"
        >LOGO</router-link
      >
    </div>
    <nav class="items-center hidden space-x-8 lg:flex">
      <router-link :to="{ name: 'providers' }">Fornecedores</router-link>
      <router-link :to="{ name: 'products' }">Produtos</router-link>
      <router-link :to="{ name: 'transactions' }">Caixa</router-link>
      <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
    </nav>
    <ul class="flex items-center space-x-2">
      <li class="hidden">Login</li>
    </ul>
  </header>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
};
</script>
