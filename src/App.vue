<template>
  <section>
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
