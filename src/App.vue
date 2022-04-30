<template>
  <section class="sticky top-0">
    <TheNavbar />
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
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap");

body {
  font-family: "Poppins", sans-serif;
  @apply bg-gray-50;
}
</style>
