<template>
  <main>
    <div class="m-4 p-3 flex justify-between space-x-8 items-stretch gap-5">
      <div class="w-2/3 p-2 bg-white shadow-lg rounded-md">
        <TheFuncBar></TheFuncBar>
        <div>Table of Providers</div>
      </div>
      <div class="w-1/3 p-2 bg-white shadow-lg rounded-md">
        Provider Profile
      </div>
    </div>
  </main>
</template>
<script>
import TheFuncBar from "@/components/TheFuncBar.vue";
export default {
  components: { TheFuncBar },
};
</script>
