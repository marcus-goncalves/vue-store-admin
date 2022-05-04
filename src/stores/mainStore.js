import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    authenticated: false,
  }),
  actions: {
    register() {
      console.log("autentiquei");
      this.authenticated = true;
    },
    unregister() {
      this.authenticated = false;
    },
  },
  getters: {
    isLogged() {
      return this.authenticated;
    },
  },
});
