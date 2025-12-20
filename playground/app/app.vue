<template>
  <Loader v-if="isLoading" />

  <NuxtPage />
</template>

<script setup>
import Loader from "../../src/runtime/components/Loader.vue";
import { useLoader } from "../../src/runtime/composables/useLoader";

const config = useLoader();
const { isLoading } = config;

onBeforeMount(() => {
  console.log("Hello");
});
</script>
