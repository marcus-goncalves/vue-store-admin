<template>
  <section class="sticky top-0">
    <TheNavbar />
    <div class="border-solid border-b-2 border-gray-500">
      <h1 class="ml-2 p-1 text-lg font-semibold">{{ routeName }}</h1>
    </div>
  </section>

  <main>
    <RouterView />
  </main>
</template>
<script>
import { RouterView } from "vue-router";
import TheNavbar from "@/components/TheNavbar.vue";
export default {
  components: {
    TheNavbar,
    RouterView,
  },
  computed: {
    routeName() {
      return this.$route.meta.menu;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap");

body {
  font-family: "Poppins", sans-serif;
  @apply bg-gray-200;
}
</style>
