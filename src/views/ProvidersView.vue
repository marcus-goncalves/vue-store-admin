<template>
  <main>
    <div
      class="m-4 p-3 flex justify-between space-x-8 items-stretch gap-5 w-full"
    >
      <div class="w-2/3 p-2 bg-white shadow-lg rounded-md">
        <TheFuncBar @update:searchTerm="setSearchTerm"></TheFuncBar>
        <table
          class="mt-2 container table-auto text-sm text-left text-gray-500 shadow-lg"
        >
          <thead class="text-xs bg-red-900 text-white font-medium">
            <th scope="col" class="px-6 py-3">Fornecedor</th>
            <th scope="col" class="px-6 py-3">Telefone</th>
            <th scope="col" class="px-6 py-3">Email</th>
            <th scope="col" class="px-6 py-3">Avaliação</th>
            <th scope="col" class="px-6 py-3">Status</th>
            <th scope="col" class="px-6 py-3">Ação</th>
          </thead>
          <tbody>
            <tr
              v-for="provider in filteredProviders"
              :key="provider.id"
              class="bg-white border-b border-gray-200 hover:bg-gray-100"
            >
              <td class="pl-2">{{ provider.provider_name }}</td>
              <td class="pl-2">{{ getActivePhone(provider.phone_numbers) }}</td>
              <td class="pl-2">{{ provider.email }}</td>
              <td class="pl-2">{{ provider.rating ? provider.rating : "" }}</td>
              <td class="pl-2">{{ provider.active ? "Ativo" : "Inativo" }}</td>
              <td class="pl-2">
                <div>Editar</div>
                <div>Remover</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="w-1/3 p-2 bg-white shadow-lg rounded-md">
        Provider Profile
      </div>
    </div>
  </main>
</template>
<script>
import TheFuncBar from "@/components/TheFuncBar.vue";
import { mapState } from "pinia";
import { useMainStore } from "../stores/mainStore";
export default {
  components: { TheFuncBar },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapState(useMainStore, ["providers"]),
    filteredProviders() {
      return this.providers.filter((provider) => {
        const providerName = provider.provider_name;

        return providerName.includes(this.search);
      });
    },
  },
  methods: {
    getActivePhone(phoneNumbers) {
      for (let phone of phoneNumbers) {
        return phone.main ? phone.value : "";
      }
    },
    setSearchTerm(searchTerm) {
      this.search = searchTerm;
    },
  },
};
</script>
