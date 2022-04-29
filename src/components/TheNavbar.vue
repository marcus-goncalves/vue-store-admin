<template>
  <div>
    <nav>
      <title>This is a NavBar</title>
      <ul>
        <li>
          <router-link :to="{ name: 'login' }">Login</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'providers' }">Fornecedores</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'products' }">Produtos</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'transactions' }">Caixa</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
};
</script>
