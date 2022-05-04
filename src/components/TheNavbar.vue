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
      <div @click="logout" class="cursor-pointer">
        <li v-if="isLogged">Logout</li>
      </div>
    </ul>
  </header>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { RouterLink } from "vue-router";
import { useMainStore } from "../stores/mainStore";

export default {
  components: {
    RouterLink,
  },
  methods: {
    ...mapActions(useMainStore, ["unregister"]),
    logout() {
      this.unregister();
      this.$router.push("/");
    }
  },
  computed: {
    ...mapState(useMainStore, ["isLogged"]),
  },
};
</script>
