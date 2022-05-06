<template>
  <section class="flex justify-between">
    <div>
      <div class="flex items-center align-baseline">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 mr-2 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          name="provider"
          id="provider"
          placeholder="Digite aqui..."
          class="w-50 text-sm py-2 border-b-2 border-gray-400 outline-none focus:border-purple-500"
        />
      </div>
    </div>
    <div>
      <button
        class="px-6 py-2 text-white bg-purple-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-900"
        @click.prevent="createProvider"
      >
        + Fornecedor
      </button>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    createProvider() {
      console.log("Provider create");
    },
  },
};
</script>
