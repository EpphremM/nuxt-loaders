<template>
  <div>
    <BasicLoader />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import BasicLoader from "../../templates/BasicLoader.vue";

const log = () => {
  console.log("this is the loader");
};

onMounted(log);
</script>

<style scoped lang="css">
div {
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}
</style>