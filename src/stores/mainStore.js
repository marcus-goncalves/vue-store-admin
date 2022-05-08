import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    authenticated: false,
    providers: [
      {
        id: "1",
        provider_name: "teste1",
        email: "teste1@email.com",
        phone_numbers: [
          {
            value: "31123456789",
            main: true,
          },
        ],
        address: {
          street: "Rua teste",
          number: "55",
          complement: "apto 201",
          neighborhood: "Bairro Bom",
          city: "Belo Horizonte",
          state: "Minas Gerais",
        },
        active: true,
        created_at: "2022-05-06 23:55:01",
        updated_at: "2202-05-07 15:01:00",
      },
      {
        id: "2",
        provider_name: "teste2",
        email: "teste2@email.com",
        phone_numbers: [
          {
            value: "31987654321",
            main: true,
          },
          {
            value: "319654987321",
            main: false,
          },
        ],
        address: {
          street: "Rua teste2",
          number: "51",
          complement: "apto 222",
          neighborhood: "outro bairro",
          city: "Belo Horizonte",
          state: "Minas Gerais",
        },
        active: true,
        created_at: "2022-05-06 23:55:01",
        updated_at: "2202-05-07 15:01:00",
      },
    ],
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
