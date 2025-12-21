<template>
  <Loader v-if="isLoading" />
  <CircularLoader  class="text-black"/>

  <NuxtPage />

</template>

<script setup>
import Loader from "../../src/runtime/components/Loader.vue";
import { useLoader } from "../../src/runtime/composables/useLoader";
import CircularLoader from "../../src/templates/CircularLoader.vue"

const config = useLoader();
const { isLoading } = config;

onBeforeMount(() => {
  console.log("Hello");
});
</script>
