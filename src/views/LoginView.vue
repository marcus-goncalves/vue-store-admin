<template>
  <main>
    <div class="flex items-center justify-center min-h-screen">
      <div class="px-8 py-8 mt-4 text-left bg-white shadow-lg">
        <div class="flex justify-center">
          <img src="../assets/logo.png" alt="logo" />
        </div>
        <h3 class="text-2xl font-bold text-center">Login</h3>
        <form>
          <div class="mt-4">
            <div>
              <label for="login" class="block">Email</label>
              <input type="text" placeholder="Login" class="field" />
              <span class="alert">Login é obrigatório</span>
            </div>
            <div>
              <label for="password" class="block">Senha</label>
              <input
                type="password"
                placeholder="Senha Super Secreta"
                class="field"
              />
              <span class="alert">Informar senha é necessário</span>
            </div>
            <div class="flex items-baseline justify-center">
              <button
                class="px-6 py-2 mt-4 text-white bg-purple-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-900"
                @click.prevent="login"
              >
                Go!
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>
<script>
import { mapActions } from "pinia";
import { useMainStore } from "../stores/mainStore";

// const store = useMainStore();
export default {
  methods: {
    ...mapActions(useMainStore, ["register"]),
    login() {
      this.register();
      this.$router.push("providers");
    }
  },
}
</script>
<style scoped>
.field {
  @apply w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600;
}
.alert {
  @apply text-xs tracking-wide text-red-700;
}
</style>
